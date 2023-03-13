import { baseEdgesConfig, baseLayoutConfig, baseNodesConfig } from './default.template';
const components = [
  {
    id: 'ZoomIn',
    type: 'GIAC',
    name: '放大',
    props: {
      GI_CONTAINER_INDEX: 2,
      GIAC: {
        visible: false,
        disabled: false,
        isShowTitle: false,
        title: '放大',
        isShowIcon: true,
        icon: 'icon-zoomin',
        isShowTooltip: true,
        tooltip: '',
        tooltipColor: '#3056e3',
        tooltipPlacement: 'right',
        hasDivider: false,
        height: '46px',
        isVertical: true,
      },
    },
  },
  {
    id: 'ZoomOut',
    type: 'GIAC',
    name: '缩小',
    props: {
      GI_CONTAINER_INDEX: 2,
      GIAC: {
        visible: false,
        disabled: false,
        isShowTitle: false,
        title: '缩小',
        isShowIcon: true,
        icon: 'icon-zoomout',
        isShowTooltip: true,
        tooltip: '',
        tooltipColor: '#3056e3',
        tooltipPlacement: 'right',
        hasDivider: false,
        height: '46px',
        isVertical: true,
      },
    },
  },
  {
    id: 'FitView',
    type: 'GIAC',
    name: '自适应',
    props: {
      GI_CONTAINER_INDEX: 2,
      GIAC: {
        visible: false,
        disabled: false,
        isShowTitle: false,
        title: '自适应',
        isShowIcon: true,
        icon: 'icon-fit-view',
        isShowTooltip: true,
        tooltip: '',
        tooltipColor: '#3056e3',
        tooltipPlacement: 'right',
        hasDivider: false,
        height: '46px',
        isVertical: true,
      },
    },
  },
  {
    id: 'FitCenter',
    type: 'GIAC',
    name: '视图居中',
    props: {
      GI_CONTAINER_INDEX: 2,
      GIAC: {
        visible: false,
        disabled: false,
        isShowTitle: false,
        title: '视图居中',
        isShowIcon: true,
        icon: 'icon-fit-center',
        isShowTooltip: true,
        tooltip: '',
        tooltipColor: '#3056e3',
        tooltipPlacement: 'right',
        hasDivider: false,
        height: '46px',
        isVertical: true,
      },
    },
  },
  {
    id: 'LassoSelect',
    type: 'GIAC',
    name: '自由圈选',
    props: {
      GI_CONTAINER_INDEX: 2,
      GIAC: {
        visible: false,
        disabled: false,
        isShowTitle: false,
        title: '自由圈选',
        isShowIcon: true,
        icon: 'icon-lasso',
        isShowTooltip: true,
        tooltip: '按住Shift，点击画布即可自由圈选',
        tooltipColor: '#3056e3',
        tooltipPlacement: 'right',
        hasDivider: false,
        height: '46px',
        isVertical: true,
      },
    },
  },
  {
    id: 'PropertiesPanel',
    type: 'AUTO',
    name: '属性面板',
    props: {
      serviceId: 'GraphScope/PropertiesPanel',
      title: '属性面板',
      placement: 'RT',
      width: '356px',
      height: 'calc(100% - 0px)',
      offset: [10, 10],
      animate: false,
      defaultiStatistic: false,
    },
  },
  {
    id: 'ActivateRelations',
    type: 'AUTO',
    name: '元素高亮',
    props: {
      enableNodeHover: true,
      enableEdgeHover: true,
      enable: true,
      trigger: 'click',
      upstreamDegree: 1,
      downstreamDegree: 1,
    },
  },
  {
    id: 'CanvasSetting',
    type: 'AUTO',
    name: '画布设置',
    props: {
      styleCanvas: {
        backgroundColor: '#fff',
        backgroundImage: 'https://gw.alipayobjects.com/mdn/rms_0d75e8/afts/img/A*k9t4QamMuQ4AAAAAAAAAAAAAARQnAQ',
      },
      dragCanvas: {
        disabled: false,
        direction: 'both',
        enableOptimize: true,
      },
      zoomCanvas: {
        disabled: false,
        enableOptimize: true,
      },
      clearStatus: true,
      doubleClick: true,
    },
  },
  {
    id: 'NodeLegend',
    type: 'AUTO',
    name: '节点图例',
    props: {
      sortKey: 'type',
      textColor: '#ddd',
      placement: 'LB',
      offset: [100, 20],
    },
  },
  {
    id: 'Placeholder',
    type: 'AUTO',
    name: '画布占位符',
    props: {
      img: 'https://gw.alipayobjects.com/zos/bmw-prod/db278704-6158-432e-99d2-cc5db457585d.svg',
      text: '当前画布为空，请先试试「数据/图数据源/导入/示例数据」',
      width: 380,
    },
  },
  {
    id: 'FilterPanel',
    type: 'GIAC_CONTENT',
    name: '筛选面板',
    props: {
      filterKeys: [],
      isFilterIsolatedNodes: true,
      highlightMode: true,
      filterLogic: 'and',
      histogramOptions: {
        isCustom: false,
      },
      GI_CONTAINER_INDEX: 2,
      GIAC_CONTENT: {
        visible: false,
        disabled: false,
        isShowTitle: false,
        isShowIcon: true,
        icon: 'icon-filter',
        isShowTooltip: true,
        tooltip: '通过属性筛选画布信息，可自定义',
        tooltipColor: '#3056e3',
        tooltipPlacement: 'right',
        hasDivider: false,
        height: '46px',
        isVertical: true,
        containerType: 'div',
        containerAnimate: false,
        containerPlacement: 'RT',
        offset: [0, 0],
        containerWidth: '400px',
        containerHeight: 'calc(100% - 100px)',
        contaienrMask: false,
      },
      histogramColor: '#3056E3',
    },
  },
  {
    id: 'MapMode',
    type: 'GIAC',
    name: '地图模式',
    props: {
      visible: false,
      type: 'amap',
      theme: 'light',
      minSize: '50%',
      maxSize: '100%',
      placement: 'RB',
      offset: [0, 0],
      longitudeKey: 'longitude',
      latitudeKey: 'latitude',
      GI_CONTAINER_INDEX: 2,
      GIAC: {
        visible: false,
        disabled: false,
        isShowTitle: false,
        title: '地图模式',
        isShowIcon: true,
        icon: 'icon-global',
        isShowTooltip: true,
        tooltip: '',
        tooltipColor: '#3056e3',
        tooltipPlacement: 'right',
        hasDivider: false,
        height: '46px',
        isVertical: true,
      },
    },
  },
  {
    id: 'SnapshotGallery',
    type: 'GIAC',
    name: '快照画廊',
    props: {
      background: '#fff',
      direction: 'horizontal',
      placement: 'LT',
      offset: [20, 20],
      GI_CONTAINER_INDEX: 2,
      GIAC: {
        visible: false,
        disabled: false,
        isShowTitle: false,
        title: '快照画廊',
        isShowIcon: true,
        icon: 'icon-camera',
        isShowTooltip: true,
        tooltip: '快照画廊(快捷键ctrl+x)',
        tooltipColor: '#3056e3',
        tooltipPlacement: 'right',
        hasDivider: false,
        height: '46px',
        isVertical: true,
      },
    },
  },
  {
    id: 'ContextMenu',
    type: 'GICC_MENU',
    name: '右键菜单',
    props: {
      GI_CONTAINER: ['NeighborsQuery', 'ToggleClusterWithMenu', 'PinNodeWithMenu'],
      nodeMenuComponents: ['NeighborsQuery', 'ToggleClusterWithMenu', 'PinNodeWithMenu'],
      bindTypes: ['node'],
      edgeMenuComponents: [],
      canvasMenuComponents: [],
      comboMenuComponents: [],
    },
  },
  {
    id: 'ToggleClusterWithMenu',
    type: 'GIAC_MENU',
    name: '展开/收起',
    props: {
      isReLayout: false,
      degree: 1,
    },
  },
  {
    id: 'NeighborsQuery',
    type: 'GIAC_MENU',
    name: '邻居查询',
    props: {
      serviceId: 'GraphScope/NeighborsQuery',
      degree: '1',
      isFocus: true,
    },
  },
  {
    id: 'Copyright',
    type: 'AUTO',
    name: '版权',
    props: {
      imageUrl: 'https://gw.alipayobjects.com/zos/bmw-prod/c2d4b2f5-2a34-4ae5-86c4-df97f7136105.svg',
      width: 200,
      height: 30,
      placement: 'RB',
      offset: [10, 10],
    },
  },
  {
    id: 'Loading',
    type: 'AUTO',
    name: '加载动画',
    props: {},
  },
  {
    id: 'PinNodeWithMenu',
    type: 'GIAC_MENU',
    name: '固定节点(MENU)',
    props: {
      color: '#fff',
      fill: '#262626',
    },
  },
  {
    id: 'ForceSimulation',
    type: 'GIAC',
    name: '力导布局控制器',
    props: {
      autoPin: true,
      dragNodeMass: 10000000,
      GI_CONTAINER_INDEX: 2,
      GIAC: {
        visible: false,
        disabled: false,
        isShowTitle: false,
        title: '力导布局控制器',
        isShowIcon: true,
        icon: 'icon-layout-force',
        isShowTooltip: true,
        tooltip: '',
        tooltipColor: '#3056e3',
        tooltipPlacement: 'right',
        hasDivider: false,
        height: '46px',
        isVertical: true,
      },
    },
  },
  {
    id: 'Initializer',
    type: 'INITIALIZER',
    name: '初始化器',
    props: {
      serviceId: 'GraphScope/GI_SERVICE_INTIAL_GRAPH',
      schemaServiceId: 'GraphScope/GI_SERVICE_SCHEMA',
      GI_INITIALIZER: true,
      aggregate: false,
    },
  },
  {
    id: 'LayoutSwitch',
    type: 'GIAC',
    name: '布局切换',
    props: {
      GI_CONTAINER_INDEX: 2,
      GIAC: {
        visible: false,
        disabled: false,
        isShowTitle: false,
        title: '布局切换',
        isShowIcon: true,
        icon: 'icon-layout',
        isShowTooltip: false,
        tooltip: '一键切换画布布局',
        tooltipColor: '#3056e3',
        tooltipPlacement: 'right',
        hasDivider: false,
        height: '46px',
        isVertical: true,
      },
    },
  },
  {
    id: 'Toolbar',
    type: 'GICC',
    name: '工具栏',
    props: {
      GI_CONTAINER: [
        'ZoomIn',
        'ZoomOut',
        'FitView',
        'FitCenter',
        'LargeGraph',
        'MapMode',
        'ForceSimulation',
        'LayoutSwitch',
        'Export',
      ],
      direction: 'vertical',
      placement: 'LT',
      offset: [24, 64],
    },
  },
  {
    id: 'Export',
    type: 'GIAC',
    name: '导出',
    props: {
      GI_CONTAINER_INDEX: 2,
      GIAC: {
        visible: false,
        disabled: false,
        isShowTitle: false,
        title: '导出',
        isShowIcon: true,
        icon: 'icon-export',
        isShowTooltip: true,
        tooltip: '导出CSV,PNG,JSON数据',
        tooltipColor: '#3056e3',
        tooltipPlacement: 'right',
        hasDivider: false,
        height: '46px',
        isVertical: true,
      },
    },
  },
  {
    id: 'Overview',
    type: 'GIAC_CONTENT',
    name: '大图概览',
    props: {
      limit: 600,
      filterLogic: 'and',
      GI_CONTAINER_INDEX: 2,
      GIAC_CONTENT: {
        visible: false,
        disabled: false,
        isShowTitle: true,
        title: '大图概览',
        isShowIcon: true,
        icon: 'icon-dashboard',
        isShowTooltip: true,
        tooltip: '',
        tooltipColor: '#3056e3',
        tooltipPlacement: 'right',
        hasDivider: false,
        height: '46px',
        isVertical: true,
        containerType: 'div',
        containerAnimate: false,
        containerPlacement: 'RT',
        offset: [0, 0],
        containerWidth: '400px',
        containerHeight: 'calc(100% - 100px)',
        contaienrMask: false,
      },
    },
  },
  {
    id: 'GremlinQuery',
    type: 'GIAC_CONTENT',
    name: 'Gremlin 查询',
    props: {
      serviceId: 'GraphScope/GremlinQuery',
      isShowPublishButton: false,
      saveTemplateServceId: 'GI/PublishTemplate',
      initialValue: 'g.V().limit(10)',
      height: 200,
      GI_CONTAINER_INDEX: 2,
      GIAC_CONTENT: {
        visible: false,
        disabled: false,
        isShowTitle: true,
        title: 'Gremlin',
        isShowIcon: true,
        icon: 'icon-query',
        isShowTooltip: true,
        tooltip: '',
        tooltipColor: '#3056e3',
        tooltipPlacement: 'right',
        hasDivider: false,
        height: '60px',
        isVertical: true,
        containerType: 'div',
        containerAnimate: false,
        containerPlacement: 'RT',
        offset: [0, 0],
        containerWidth: '350px',
        containerHeight: 'calc(100% - 100px)',
        contaienrMask: false,
      },
    },
  },
  {
    id: 'UadLayout',
    type: 'GICC_LAYOUT',
    name: '上下布局',
    props: {
      topItems: ['GremlinQuery'],
      height: 251,
      padding: '0px 0px',
      sideItems: ['JSONMode'],
      tabPosition: 'right',
    },
  },
  {
    id: 'TableMode',
    type: 'GIAC_CONTENT',
    name: '表格模式',
    props: {
      enableCopy: true,
      isSelectedActive: true,
      GI_CONTAINER_INDEX: 2,
      GIAC_CONTENT: {
        visible: false,
        disabled: false,
        isShowTitle: true,
        title: '表格模式',
        isShowIcon: true,
        icon: 'icon-table',
        isShowTooltip: true,
        tooltip: '将画布中的节点和边以表格形式展示',
        tooltipColor: '#3056e3',
        tooltipPlacement: 'right',
        hasDivider: false,
        height: '60px',
        isVertical: true,
        containerType: 'div',
        containerAnimate: false,
        containerPlacement: 'RT',
        offset: [0, 0],
        containerWidth: '400px',
        containerHeight: 'calc(100% - 100px)',
        contaienrMask: false,
      },
    },
  },
  {
    id: 'JSONMode',
    type: 'GIAC_CONTENT',
    name: '代码模式',
    props: {
      theme: 'rjv-default',
      GI_CONTAINER_INDEX: 2,
      GIAC_CONTENT: {
        visible: false,
        disabled: false,
        isShowTitle: true,
        title: '代码模式',
        isShowIcon: true,
        icon: 'icon-table',
        isShowTooltip: true,
        tooltip: '将数据以代码形式展示',
        tooltipColor: '#3056e3',
        tooltipPlacement: 'right',
        hasDivider: false,
        height: '60px',
        isVertical: true,
        containerType: 'div',
        containerAnimate: false,
        containerPlacement: 'RT',
        offset: [0, 0],
        containerWidth: '400px',
        containerHeight: 'calc(100% - 100px)',
        contaienrMask: false,
      },
    },
  },
  {
    id: 'SideTabs',
    type: 'GICC',
    name: '侧边栏',
    props: {
      GI_CONTAINER: ['FilterPanel', 'NodeImportance', 'CommunityDetection', 'PatternMatch'],
      outSideFromCanvas: true,
      tabPosition: 'left',
      defaultVisible: true,
      placement: 'LB',
      offset: [0, 0],
      height: '400px',
      width: '400px',
    },
  },
  {
    id: 'StructAnalysis',
    type: 'GIAC_CONTENT',
    name: '路径结构分析',
    props: {
      GI_CONTAINER_INDEX: 2,
      GIAC_CONTENT: {
        visible: false,
        disabled: false,
        isShowTitle: true,
        title: '路径结构分析',
        isShowIcon: true,
        icon: 'icon-layout-tree',
        isShowTooltip: true,
        tooltip: '自动解析画布所有路径，做聚合分析',
        tooltipColor: '#3056e3',
        tooltipPlacement: 'right',
        hasDivider: false,
        height: '60px',
        isVertical: true,
        containerType: 'div',
        containerAnimate: false,
        containerPlacement: 'RT',
        offset: [0, 0],
        containerWidth: '400px',
        containerHeight: 'calc(100% - 100px)',
        contaienrMask: false,
      },
    },
  },
  {
    id: 'InfoDetection',
    type: 'GIAC_CONTENT',
    name: '信息检测',
    props: {
      GI_CONTAINER_INDEX: 2,
      GIAC_CONTENT: {
        visible: false,
        disabled: false,
        isShowTitle: false,
        title: '信息检测',
        isShowIcon: true,
        icon: 'icon-infomation',
        isShowTooltip: true,
        tooltip: '检测画布中孤立点、环等',
        tooltipColor: '#3056e3',
        tooltipPlacement: 'right',
        hasDivider: false,
        height: '60px',
        isVertical: true,
        containerType: 'div',
        containerAnimate: false,
        containerPlacement: 'RT',
        offset: [0, 0],
        containerWidth: '400px',
        containerHeight: 'calc(100% - 100px)',
        contaienrMask: false,
      },
    },
  },
  {
    id: 'NodeImportance',
    type: 'GIAC_CONTENT',
    name: '节点重要性',
    props: {
      GI_CONTAINER_INDEX: 2,
      GIAC_CONTENT: {
        visible: false,
        disabled: false,
        isShowTitle: false,
        title: '节点重要性',
        isShowIcon: true,
        icon: 'icon-rules',
        isShowTooltip: true,
        tooltip: '',
        tooltipColor: '#3056e3',
        tooltipPlacement: 'right',
        hasDivider: false,
        height: '60px',
        isVertical: true,
        containerType: 'div',
        containerAnimate: false,
        containerPlacement: 'RT',
        offset: [0, 0],
        containerWidth: '350px',
        containerHeight: 'calc(100% - 100px)',
        contaienrMask: false,
      },
    },
  },
  {
    id: 'CommunityDetection',
    type: 'GIAC_CONTENT',
    name: '社区发现',
    props: {
      GI_CONTAINER_INDEX: 2,
      GIAC_CONTENT: {
        visible: false,
        disabled: false,
        isShowTitle: false,
        title: '社区发现',
        isShowIcon: true,
        icon: 'icon-associate',
        isShowTooltip: true,
        tooltip: '',
        tooltipColor: '#3056e3',
        tooltipPlacement: 'right',
        hasDivider: false,
        height: '60px',
        isVertical: true,
        containerType: 'div',
        containerAnimate: false,
        containerPlacement: 'RT',
        offset: [0, 0],
        containerWidth: '350px',
        containerHeight: 'calc(100% - 100px)',
        contaienrMask: false,
      },
    },
  },
  {
    id: 'PatternMatch',
    type: 'GIAC_CONTENT',
    name: '模式匹配',
    props: {
      GI_CONTAINER_INDEX: 2,
      GIAC_CONTENT: {
        visible: false,
        disabled: false,
        isShowTitle: false,
        title: '模式匹配',
        isShowIcon: true,
        icon: 'icon-query-path',
        isShowTooltip: true,
        tooltip: '',
        tooltipColor: '#3056e3',
        tooltipPlacement: 'right',
        hasDivider: false,
        height: '60px',
        isVertical: true,
        containerType: 'div',
        containerAnimate: false,
        containerPlacement: 'RT',
        offset: [0, 0],
        containerWidth: '350px',
        containerHeight: 'calc(100% - 100px)',
        contaienrMask: false,
      },
    },
  },
  {
    id: 'CypherQuery',
    type: 'GIAC_CONTENT',
    name: 'Cypher 语句查询',
    props: {
      serviceId: 'TuGraph/CypherQuery',
      isShowPublishButton: false,
      saveCypherTemplateServceId: 'GI/PublishTemplate',
      initialValue: 'MATCH n RETURN LIMIT 100',
      GI_CONTAINER_INDEX: 2,
      GIAC_CONTENT: {
        visible: false,
        disabled: false,
        isShowTitle: true,
        title: 'Cypher 语句查询',
        isShowIcon: true,
        icon: 'icon-query',
        isShowTooltip: true,
        tooltip: '',
        tooltipColor: '#3056e3',
        tooltipPlacement: 'right',
        hasDivider: false,
        height: '60px',
        isVertical: true,
        containerType: 'div',
        containerAnimate: false,
        containerPlacement: 'RT',
        offset: [0, 0],
        containerWidth: '350px',
        containerHeight: 'calc(100% - 100px)',
        contaienrMask: false,
      },
    },
  },
];

export const baseConfig = {
  nodes: baseNodesConfig,
  edges: baseEdgesConfig,
  layout: baseLayoutConfig,
  components: components,
};

export const activeAssetsKeys = {
  elements: [...baseNodesConfig.map(n => n.id), ...baseEdgesConfig.map(e => e.id)],
  components: [...components.map(c => c.id)],
  layouts: ['GraphinForce', 'Concentric', 'Dagre', 'FundForce'],
};

export const getConfigByEngineId = engineId => {
  let componentConfig = [...components];
  const isGremlin = engineId === 'GraphScope' || engineId === 'GeaFlow';
  const isCypher = engineId === 'TuGraph' || engineId === 'Neo4j';
  const id = isGremlin ? 'tp_query_gremlin' : 'tp_query_cypher';
  const name = isGremlin ? 'Gremlin 查询模版' : 'Cypher 查询模版';
  componentConfig.forEach(item => {
    if (item.id === 'UadLayout') {
      item.props.topItems = isGremlin ? ['GremlinQuery'] : ['CypherQuery'];
    }
  });

  const config = {
    nodes: baseNodesConfig,
    edges: baseEdgesConfig,
    layout: baseLayoutConfig,
    components: componentConfig,
  };
  const activeAssetsKeys = {
    elements: [...baseNodesConfig.map(n => n.id), ...baseEdgesConfig.map(e => e.id)],
    components: [...config.components.map(c => c.id)],
    layouts: ['GraphinForce', 'Concentric', 'Dagre', 'FundForce'],
  };
  return {
    id,
    name,
    ...config,
    activeAssetsKeys,
  };
};

export const TEMPALTE_GREMLIN_QUERY = getConfigByEngineId('TuGraph');
export const TEMPALTE_CYPHER_QUERY = getConfigByEngineId('GraphScope');
