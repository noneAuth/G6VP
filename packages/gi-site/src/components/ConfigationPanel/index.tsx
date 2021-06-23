import Meta from '@alipay/gi-meta';
import { GIComponentsMeta } from '@alipay/graphinsight';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// const state = useSelector(state => state);
// const { config, id } = state;

const getComponentsByMap = componentMap => {
  const componentKeys = Object.keys(componentMap);
  return componentKeys.map(id => {
    const props = componentMap[id];
    const { giEnable } = props;
    return {
      id,
      props,
      enable: giEnable,
    };
  });
};
const getComponents = components => {
  const { analysis, interaction = {} } = components;
  /** 分析组件 */
  const analysisComponents = getComponentsByMap(analysis);
  /** 交互组件 */
  const interactionComponents = getComponentsByMap(interaction);
  return [...analysisComponents, ...interactionComponents];
};

const ConfigationPanel = props => {
  const dispatch = useDispatch();
  const { config } = useSelector(state => state);
  const onChange = evt => {
    console.log('ConfigationPanel onChange', evt);

    const { rootValue } = evt;
    const { components, layout } = rootValue;
    if (components) {
      /** 分析组件 */
      const comps = getComponents(components);
      dispatch({
        type: 'update:config',
        config: {
          ...config,
          components: comps,
        },
      });
    }

    if (layout) {
      /** 布局设置 */
      const { toggle } = layout;
      const layoutType = `${toggle}`;
      const layoutOptions = layout[layoutType];
      dispatch({
        type: 'update:config',
        config: {
          ...config,
          layout: {
            id: 'Layout',
            name: '官方内置布局',
            props: {
              type: toggle,
              options: layoutOptions,
            },
          },
        },
      });
    }
  };

  return (
    <div className="gi-config-pannel">
      <Meta {...props} onChange={onChange} meta={GIComponentsMeta} />
    </div>
  );
};

export default ConfigationPanel;
