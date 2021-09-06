export default {
  // esm: { type: 'rollup', file: 'index', importLibToEs: true },
  // lessInRollupMode: {},
  // extractCSS: true,
  entry: './src/index.tsx',
  esm: 'babel',
  cjs: 'babel',
  umd: {
    name: 'GIAssets',
    minFile: true,
  },
  lessInBabelMode: true,
};
