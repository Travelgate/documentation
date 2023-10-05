module.exports = {
  presets: [
    require.resolve('@docusaurus/core/lib/babel/preset'),
    require.resolve('@babel/preset-env'),
    require.resolve('@babel/preset-react')
  ],
  plugins: [
    [
      "module-resolver",
      {
        "alias": {
          "@tgx": "./src"
        }
      }
    ]
  ]
};
