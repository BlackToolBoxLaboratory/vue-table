module.exports = {
  root: true,
  env: {
    node: true
  },
  "extends": [
    "plugin:vue/essential",
    "@vue/standard"
  ],
  rules: {
    "camelcase": "off",
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "valid-typeof": "off"
  },
  parserOptions: {
    parser: "babel-eslint"
  }
}
