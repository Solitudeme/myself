module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
    "@babel/preset-react", ["@babel/preset-env"]
  ],
  plugins: ["@babel/plugin-transform-runtime"],
  env: {
    test: {
      presets: ["@babel/preset-env"],
      plugins: ["istanbul"]
    }
  }
}
