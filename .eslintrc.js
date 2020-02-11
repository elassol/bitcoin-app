module.exports = {
  "settings": {
      "react": {
          "version": "detect"
      }
  },
  "env": {
      "browser": true,
      "node": true,
      "es6": true,
      "jest": true
  },
  "plugins": ["react", "prettier"],
  "extends": ["airbnb", "prettier", "prettier/react"],
  "parser": "babel-eslint",
  "rules": {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
  }
};