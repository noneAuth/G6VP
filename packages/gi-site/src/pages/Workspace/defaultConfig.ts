const baseNodeConfig = {
  id: 'GraphinNode',
  name: '官方内置节点',
  props: {},
};
const baseEdgeConfig = {
  id: 'GraphinEdge',
  name: '官方内置边',
  props: {},
};
const baseComponentsConfig = [
  {
    id: 'NodeLegend',
    props: {},
    enable: true,
  },
  {
    id: 'CanvasSetting',
    props: {},
    enable: true,
  },
  {
    id: 'NodeAttrs',
    props: {},
    enable: true,
  },
];
const baseLayoutConfig = {
  id: 'Layout',
  name: '官方内置布局',
  props: {
    type: 'concentric',
    options: {},
  },
};

const baseConfig = {
  node: baseNodeConfig,
  edge: baseEdgeConfig,
  layout: baseLayoutConfig,
  components: baseComponentsConfig,
};

/** 官方提供的解决方案 模版 */

export const defaultConfig = {
  /** 燎原计划 */
  knowledgeGraph: {
    ...baseConfig,
  },
  /** 　网商图谱 */
  riskControl: {
    ...baseConfig,
  },
  /** 前端大学图谱 */
  GIConfig: {
    ...baseConfig,
  },
  /** 空白模版 */
  Empty: {
    ...baseConfig,
  },
};
