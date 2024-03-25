"use strict";

// From https://github.com/xojs/eslint-config-xo-react/releases v0.27.0
// All rules in biome have been removed

module.exports = {
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["react"],
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "react/boolean-prop-naming": [
      "error",
      {
        validateNested: true,
      },
    ],
    "react/jsx-child-element-spacing": "error",
    "react/default-props-match-prop-types": "error",
    "react/function-component-definition": [
      "error",
      {
        namedComponents: "function-declaration",
        unnamedComponents: "arrow-function",
      },
    ],
    "react/hook-use-state": "error",
    "react/iframe-missing-sandbox": "error",
    "react/no-access-state-in-setstate": "error",
    "react/no-arrow-function-lifecycle": "error",
    "react/no-deprecated": "error",
    "react/no-did-update-set-state": "error",
    "react/no-direct-mutation-state": "error",
    "react/no-find-dom-node": "error",
    "react/no-invalid-html-attribute": "error",
    "react/no-is-mounted": "error",
    "react/no-namespace": "error",
    "react/no-redundant-should-component-update": "error",
    "react/no-render-return-value": "error",
    "react/no-typos": "error",
    "react/no-string-refs": [
      "error",
      {
        noTemplateLiterals: true,
      },
    ],
    "react/no-this-in-sfc": "error",
    "react/no-unknown-property": "error",
    "react/no-unsafe": "error",
    "react/no-unused-prop-types": "error",
    "react/no-unused-state": "error",
    "react/prop-types": "error",
    "react/require-default-props": [
      "error",
      {
        forbidDefaultForRequired: true,
        ignoreFunctionalComponents: true,
      },
    ],
    "react/state-in-constructor": ["error", "never"],
    "react/static-property-placement": "error",
    "react/style-prop-object": [
      "error",
      {
        allow: [
          // This allows react-intl’s `<FormattedNumber value={0.42} style='percent'/>`.
          "FormattedNumber",
        ],
      },
    ],
    "react/jsx-closing-bracket-location": [
      "error",
      {
        nonEmpty: "tag-aligned",
        selfClosing: false,
      },
    ],
    "react/jsx-closing-tag-location": "error",
    "react/jsx-curly-spacing": ["error", "never"],
    "react/jsx-equals-spacing": ["error", "never"],
    "react/jsx-first-prop-new-line": "error",
    "react/jsx-key": [
      "error",
      {
        checkFragmentShorthand: true,
        checkKeyMustBeforeSpread: true,
        warnOnDuplicates: true,
      },
    ],
    "react/jsx-max-props-per-line": [
      "error",
      {
        maximum: 3,
        when: "multiline",
      },
    ],
    "react/jsx-no-bind": [
      "error",
      {
        allowArrowFunctions: true,
      },
    ],
    "react/jsx-no-constructed-context-values": "error",
    "react/jsx-no-script-url": "error",
    "react/jsx-no-undef": "error",
    // Disabled for now as it produces too many errors
    // 'react/jsx-one-expression-per-line': ['error', {allow: 'single-child'}],
    "react/jsx-curly-brace-presence": [
      "error",
      {
        props: "never",
        children: "never",
        propElementValues: "always",
      },
    ],
    "react/jsx-fragments": ["error", "syntax"],
    "react/jsx-pascal-case": "error",
    "react/jsx-props-no-multi-spaces": "error",
    "react/jsx-sort-props": [
      "error",
      {
        callbacksLast: true,
        shorthandFirst: true,
        noSortAlphabetically: true,
        reservedFirst: true,
      },
    ],
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "react/jsx-wrap-multilines": [
      "error",
      {
        declaration: "parens-new-line",
        assignment: "parens-new-line",
        return: "parens-new-line",
        arrow: "parens-new-line",
        condition: "ignore",
        logical: "ignore",
        prop: "ignore",
      },
    ],
  },
};
