module.exports = {
  "root": true,
  "env": {
    "commonjs": true,
    "node": true,
    "es6": true
  },
  "extends": "eslint:recommended",
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2017
  },
  "rules": {
    "accessor-pairs": "warn",
    "arrow-body-style": "warn",
    "arrow-parens": [
      "warn",
      "as-needed"
    ],
    "arrow-spacing": "warn",
    "comma-dangle": [
      "warn",
      "only-multiline"
    ],
    "comma-style": [
      "warn",
      "last"
    ],
    "computed-property-spacing": [
      "warn",
      "never"
    ],
    "consistent-this": "warn",
    "curly": [
      "warn",
      "multi-line"
    ],
    "default-case": "warn",
    "dot-location": [
      "warn",
      "property"
    ],
    "eqeqeq": "warn",
    "generator-star-spacing": "warn",
    "id-blacklist": "warn",
    "id-match": "warn",
    "jsx-quotes": "warn",
    "linebreak-style": [
      "warn",
      "unix"
    ],
    "max-nested-callbacks": "warn",
    "no-array-constructor": "warn",
    "no-caller": "warn",
    "no-catch-shadow": "warn",
    "no-console": "off",
    "no-continue": "warn",
    "no-div-regex": "warn",
    "no-duplicate-imports": "warn",
    "no-extra-label": "warn",
    "no-extra-semi": "warn",
    "no-floating-decimal": "warn",
    "no-implicit-coercion": [
      "warn",
      {
        "boolean": false,
        "number": false,
        "string": false
      }
    ],
    "no-implied-eval": "warn",
    "no-inner-declarations": [
      "warn",
      "functions"
    ],
    "no-invalid-this": "warn",
    "no-iterator": "warn",
    "no-label-var": "warn",
    "no-labels": "warn",
    "no-lone-blocks": "warn",
    "no-mixed-requires": "warn",
    "no-mixed-spaces-and-tabs": "warn",
    "no-multi-str": "warn",
    "no-new": "warn",
    "no-new-func": "warn",
    "no-new-object": "warn",
    "no-new-require": "warn",
    "no-new-wrappers": "warn",
    "no-octal-escape": "warn",
    "no-process-exit": "warn",
    "no-proto": "warn",
    "no-redeclare": "warn",
    "no-restricted-globals": "warn",
    "no-restricted-imports": "warn",
    "no-restricted-modules": "warn",
    "no-restricted-syntax": "warn",
    "no-script-url": "warn",
    "no-self-compare": "warn",
    "no-shadow-restricted-names": "warn",
    "no-spaced-func": "warn",
    "no-undef": "warn",
    "no-undef-init": "warn",
    "no-unexpected-multiline": "warn",
    "no-unmodified-loop-condition": "warn",
    "no-unneeded-ternary": [
      "warn",
      {
        "defaultAssignment": true
      }
    ],
    "no-unreachable": "warn",
    "no-unused-vars": [
      "warn",
      {
        "argsIgnorePattern": "^_", // Allow unused arguments starting with an underscore
        "varsIgnorePattern": "^_" // Allow unused variables starting with an underscore
      }
    ],
    "no-useless-call": "warn",
    "no-useless-concat": "warn",
    "no-useless-constructor": "warn",
    "no-useless-escape": "warn",
    "no-var": "warn",
    "no-void": "warn",
    "no-whitespace-before-property": "warn",
    "no-with": "warn",
    "prefer-arrow-callback": "warn",
    "prefer-const": "warn",
    "prefer-template": "warn",
    "require-yield": "warn",
    "semi": ["warn", "never"],
    "sort-imports": "warn",
    "template-curly-spacing": "warn",
    "wrap-regex": "warn",
    "yield-star-spacing": "warn",
    "yoda": [
      "warn",
      "never"
    ]
  }
};
