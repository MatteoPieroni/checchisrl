module.exports = {
  "env": {
      "browser": true,
      "es6": true,
      "node": true,
      "commonjs": true,
  },
  "extends": [
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:import/warnings"
  ],
  "globals": {
      "Atomics": "readonly",
      "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
      "ecmaFeatures": {
          "jsx": true
      },
      "ecmaVersion": 2018,
      "sourceType": "module"
  },
  "plugins": [
      "react",
      "import",
      "jsx-a11y"
  ],
  "rules": {
      "indent": [
          "error",
          "tab"
      ],
      "linebreak-style": [
          "error",
          "unix"
      ],
      "quotes": [
          "error",
          "single"
      ],
      "semi": [
          "error",
          "always"
      ],
      "array-bracket-spacing": ["error", "never"],
      "object-curly-spacing": ["error", "always"],
      "react/prop-types": ["off"]
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  }
};