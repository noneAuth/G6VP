// 组件市场
import React, { useEffect } from 'react';
import { message, Button, Popconfirm, Alert } from 'antd';
import { Provider } from 'react-redux';
import { Utils } from '@antv/graphin';
import store from '../Analysis/redux';
import ComponentMetaPanel from './meta/ComponentMeta';
import BaseNavbar from '../../components/Navbar/BaseNavbar';
import {
  updateAssets,
  updateFileContent,
  getFileSourceCode,
  createNewBranch,
  queryAssetById,
  buildAssetWithTask,
} from '../../services/assets';
import { useImmer } from 'use-immer';
import * as ts from 'typescript';
import moment from 'moment';
import GraphInsightIDE from './GraphInsightIDE';
import GravityDemoSDK from '@alipay/gravity-demo-sdk/dist/gravityDemoSdk/sdk/sdk.js';
import { usePersistFn, useInterval } from 'ahooks';
import queryString from 'querystring';
import './index.less';

window.React = React;

function looseCodeParse(source) {
  const compileCode = ts.transpileModule(source.split('export default')[0], {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
    },
  });

  // 变成成 JS 后的格式是 var registerMeta = function (context) {}，需要将 function 之前的部分去掉
  const functionCode = compileCode.outputText.slice(19);

  const tmpCode = functionCode.slice(0, functionCode.length - 3);

  return Function('"use strict";return (' + tmpCode + ')')();
}

const ComponentMarket = props => {
  const { history } = props;

  const appRef = React.createRef();

  const [state, setState] = useImmer({
    currentSelectAsset: null,
    sourceCode: null,
    metaInfo: null,
    previewCode: null,
    loading: true,
    buildStatus: null,
    // 定时器
    interval: null
  });

  const { currentSelectAsset, buildStatus, loading, interval } = state;

  const queryParams = queryString.parse(location.hash.split('?')[1]);
  const projectName = queryParams.project as string;
  const branchName = queryParams.branch as string;
  const assetId = queryParams.assetId as string;
  const assetType = queryParams.type;
  const projectId = queryParams.projectId;

  const setSourceCode = value => {
    setState(draft => {
      draft.sourceCode = value;
    });
  };

  const updateAssetById = async options => {
    const currentId: string = state.currentSelectAsset?.id;

    const result = await updateAssets(currentId, options);
    const { success } = result;
    if (!success) {
      message.error('Meta 信息保存失败');
      return;
    }
  };

  const queryAssetDetailById = async () => {
    const result = await queryAssetById(assetId);
    const { data, success, errorMsg } = result;
    if (!success) {
      // 接口执行失败
      message.error('接口请求失败', errorMsg);
      return;
    }

    setState(draft => {
      draft.currentSelectAsset = data;
      if (!data.status) {
        draft.buildStatus = null
        draft.loading = false
      } else {
        // 不是构建中时，就不需要再进行轮询
        if (data.status !== 2) {
          draft.interval = null
          draft.loading = false
          if (data.status) {
            draft.buildStatus = data.status === 3 ? 'error' : 'success'
          }
        } else {
          // 构建中
          draft.loading = true
          draft.buildStatus = 'info'
        }
      }
    });
  };

  useInterval(
    () => {
      queryAssetDetailById();
    },
    interval,
    { immediate: false },
  );

  /**
   * 将源代码对象转成实时预览需要的数据格式
   * @param isc 源代码数据
   */
  const fileMapToModules = isc => {
    // 将初始化转换为预览的数据格式
    const previewCodeMap = Object.keys(isc).reduce((prev, file) => {
      let pervObj: any = prev;
      if (typeof prev === 'string') {
        if (prev === 'demo.tsx') {
          pervObj = {
            [`/src/demo.tsx`]: {
              code: isc[prev],
              // fpath: `src/index.js`,
              fpath: `/src/${prev}`,
              entry: 1,
            },
          };
        } else {
          pervObj = {
            [`/src/${prev}`]: {
              code: isc[prev],
              fpath: `/src/${prev}`,
            },
          };
        }
      }

      const fileObj = {
        code: isc[file],
        fpath: `/src/${file}`,
      };

      if (file === 'demo.tsx') {
        // @ts-ignore
        fileObj.entry = 1;
      }

      if (file === 'package.json') {
        // @ts-ignore
        fileObj.packagejson = 1;
        fileObj.fpath = `/${file}`;
        return {
          ...pervObj,
          [`/${file}`]: fileObj,
        };
      }

      return {
        ...pervObj,
        [`/src/${file}`]: fileObj,
      };
    });

    return previewCodeMap;
  };

  /**
   * 初始查询文件内容，做实时预览使用
   */
  const queryInitSourceCode = async () => {
    // 加载所有的源文件，构造实时预览需要的初始数据
    const demoFile = await getFileSourceCode({
      projectName,
      branchName,
      path: 'src/demo.tsx',
    });

    const demoStyleFile = await getFileSourceCode({
      projectName,
      branchName,
      path: 'src/demo.module.less',
    });

    const componentStyleFile = await getFileSourceCode({
      projectName,
      branchName,
      path: 'src/styles.less',
    });

    const componentFile = await getFileSourceCode({
      projectName,
      branchName,
      path: 'src/component.tsx'
    })

    const packageFile = await getFileSourceCode({
      projectName,
      branchName,
      path: 'package.json',
    });

    const initSourceCode = {
      'demo.tsx': demoFile.data,
      'demo.module.less': demoStyleFile.data,
      'styles.less': componentStyleFile.data,
      'component.tsx': componentFile.data,
      'package.json': packageFile.data
    }

    const previewCodeModules = fileMapToModules(initSourceCode);
    setState(draft => {
      draft.sourceCode = initSourceCode;
      draft.previewCode = {
        modules: previewCodeModules,
        type: 'demo',
      };
    });
  };

  React.useEffect(() => {
    queryAssetDetailById();
    // 查询 preview 所需要的 code

    // 当为组件时初始化源码
    if (assetType === '1') {
      queryInitSourceCode();
    }
    // TODO: 查询构建状态，如果有在构建中的组件，进行提示
  }, []);

  const handleSourceCodeChange = async (filepath: string, source: string) => {
    // 更新 antcode 上文件的内容，只有当不是 service 时才需要修改
    const result = await updateFileContent({
      projectName,
      branchName,
      path: filepath,
      content: source,
      commitMsg: '测试修改文件',
    });

    const { success, errorMsg } = result;
    if (!success) {
      // 保存失败，提示用户
      message.warn(`更改的内容未保存成功，错误原因: ${errorMsg}，请再次尝试`);
    }

    // 当修改的为 service 的文件时，不需要更新 antcode 上的内容
    if (assetType == '3') {
      await updateAssetById({
        sourceCode: source,
        projectId,
      });
    } else {
      // 更新 gitlab 上文件成功，且为 meta 时候需要存储到数据库中
      if (success && filepath === 'meta.ts') {
        await updateAssetById({
          meta: source,
        });

        try {
          // 更新 metainfo，触发右侧面板重新渲染
          const registerMeta = looseCodeParse(source);

          // 使用 Graphin Mock 数据调用 registerMeta 方法，获取 metaInfo
          const metaInfo = registerMeta({
            data: Utils.mock(5).circle().graphin(),
          });

          setState(draft => {
            draft.metaInfo = metaInfo;
          });
        } catch (error) {
          console.error('Meta 数据格式不对，请检查：' + error);
        }
      }
    }
    setSourceCode({
      ...state.sourceCode,
      [filepath]: source,
    });
  };

  const codeChangeCallback = usePersistFn(handleSourceCodeChange);

  const handleMetaInfoChange = value => {
    console.log(value);
    // TODO: Meta 配置面板，更新了以后，要同步更新图上
  };

  useEffect(() => {
    if (state.currentSelectAsset && state.currentSelectAsset.meta) {
      // 更新 metainfo，触发右侧面板重新渲染
      // 从 Meta 中解析出 Meta 对象
      try {
        const registerMeta = looseCodeParse(state.currentSelectAsset.meta);

        // 使用 Graphin Mock 数据调用 registerMeta 方法，获取 metaInfo
        const metaInfo = registerMeta({
          data: Utils.mock(5).circle().graphin(),
        });

        setState(draft => {
          draft.metaInfo = metaInfo;
        });
      } catch (error) {
        console.error('Meta 数据格式不对，请检查：' + error);
      }
    }
  }, [currentSelectAsset]);

  useEffect(() => {
    if (state.sourceCode && assetType === '1') {
      const previewCodeModules = fileMapToModules(state.sourceCode);
      setState(draft => {
        draft.sourceCode = state.sourceCode;
        draft.previewCode = {
          modules: previewCodeModules,
          type: 'demo',
        };
      });
    }
  }, [state.sourceCode]);

  // 发布组件，需要先创建分支，然后构建
  const handlePublish = async () => {
    setState(draft => {
      draft.loading = true
    })

    const uuid = `${Math.random().toString(36).substr(2)}`;
    const currentDate = moment(new Date()).format('YYYYMMDD');
    const newBranchName = `sprint_${projectName}_${uuid}_${currentDate}`;

    // step1: 创建新的分支
    // const result = await createNewBranch({
    //   projectName,
    //   branchName: newBranchName,
    //   refBranchName: 'master'
    // })

    // step2: 构建
    const buildResult = await buildAssetWithTask({
      assetId,
      projectName,
      branchName,
    });

    if (buildResult) {
      const { logUrl, id } = buildResult;
      // 更新数据库中构建状态及构建日志字段
      updateAssets(assetId, {
        yuyanBuildId: id,
        /* status 状态值： 
          0: 默认值
          1: 已删除
          2: 构建中
          3: 发布/构建失败
          4: 发布/构建成功
        */
        status: 2,
        buildLogUrl: logUrl,
        version: newBranchName,
      });

      // 启动定时器
      setState(draft => {
        draft.buildStatus = 'info'
        draft.interval = 30000
      })
    }
  };

  const buildingTips = <span>资产正在构建中，预计需要3-5分钟的时间，你可以<a href={currentSelectAsset?.buildLogUrl} target='_blank'>查看构建日志</a>以了解最新进展</span>

  const buildSuccessTips = <>
    <span>资产构建成功，你可以</span>
    <a href={currentSelectAsset?.buildLogUrl} target='_blank'>查看构建日志</a>
    <span>或</span>
    <a href={currentSelectAsset?.distCodeUrl} target='_blank'>查看构建产物</a>
  </>
  
  const buildErrorTips = <span>资产构建失败，具体失败原因请<a href={currentSelectAsset?.buildLogUrl} target='_blank'>查看构建日志</a></span>

  let tipsDom = null
  if (buildStatus === 'success') {
    tipsDom = buildSuccessTips
  } else if (buildStatus === 'info') {
    tipsDom = buildingTips
  } else if (buildStatus === 'error') {
    tipsDom =  buildErrorTips
  }

  let publishDom = null

  if (assetType === '1') {
    publishDom = <Popconfirm title="发布需要3-5分钟的时间，确定要进行发布吗？"
      onConfirm={handlePublish}
      okText="确定"
      cancelText="取消">
      <Button loading={loading} style={{ color: '#000' }}>
        发布
      </Button>
    </Popconfirm>
  }
  return (
    <>
      <BaseNavbar rightContent={publishDom}>
      {
        buildStatus &&
        <Alert message={tipsDom} type={buildStatus} showIcon />
      }
      </BaseNavbar>
      <div className="componet-market">
        <div className="gi-ide-wrapper" style={{ width: assetType === '1' ? '60%' : '100%' }}>
          <GraphInsightIDE id='test' readOnly={false} appRef={appRef} mode={assetType === '1' ? '/src/demo.tsx' : '/index.ts' } codeChange={codeChangeCallback}  />
        </div>
        {assetType !== '3' && (
          <div className="gi-config-wrapper">
            <div className="config">
              {state.metaInfo ? (
                <ComponentMetaPanel onChange={handleMetaInfoChange} config={state.metaInfo} />
              ) : (
                '暂无 Meta 信息'
              )}
            </div>
            <div className="view">
              {state.previewCode && (
                <GravityDemoSDK
                  code={state.previewCode}
                  width="100%"
                  height="100%"
                  src="https://gw.alipayobjects.com/as/g/Gravity/gravity/3.10.3/gravityDemoSdk/index.html"
                />
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

const WrapAnalysis = props => {
  return (
    <Provider store={store}>
      <ComponentMarket {...props} />
    </Provider>
  );
};

export default WrapAnalysis;
