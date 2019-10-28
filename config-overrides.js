const { override, fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),

  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      '@primary-color': '#2e904e',
      '@btn-default-bg': '#ececec',
      '@btn-default-border': '#ececec',
      '@btn-padding-base': '0 25px',
      '@btn-height-base': '38px',
      '@label-color': '#9b9b9b',
      '@input-height-base': '40px',
      '@form-item-margin-bottom': '18px',
      '@form-vertical-label-padding': '0 0 6px',
      '@icon-color': '#2e904e',
    },
  })
);
