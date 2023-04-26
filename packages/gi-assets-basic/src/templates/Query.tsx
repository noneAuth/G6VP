import { template } from '@antv/gi-sdk';

// 页面布局容器
const pageLayout = {
  id: 'UadLayout',
  type: 'GICC_LAYOUT',
  name: '上下布局',
  props: {
    containers: [
      {
        id: 'GI_CONTAINER_TOP',
        GI_CONTAINER: ['GremlinQuery'],
        height: 251,
        padding: '0px 0px',
      },
      {
        id: 'GI_CONTAINER_SIDE',
        GI_CONTAINER: ['JSONMode'],
        tabPosition: 'right',
      },
    ],
  },
};
const addComponents = [
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

const { nodes, edges, layout, components } = template;
export const config = {
  nodes,
  edges,
  layout,
  components: [...components, ...addComponents, pageLayout],
};

export const activeAssetsKeys = {
  elements: [...config.nodes.map(n => n.id), ...config.edges.map(e => e.id)],
  components: [...components.map(c => c.id)],
  layouts: ['Force2', 'Concentric', 'Dagre', 'FundForce', 'GraphinForce'],
};

export default {
  name: '查询模版',
  id: 'TP_QUERY',
  image: `/image/tp_query.png`,
  desc: `以查询语句为主体的模版，包含 ${activeAssetsKeys.components.length} 个分析资产，页面布局呈上下分布，最上方集成「Gremlin」或者「Cypher」查询语句，常用于数据库查询场景。`,
  activeAssetsKeys,
  ...config,
};
