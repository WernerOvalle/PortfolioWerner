import nextCoreWebVitals from "eslint-config-next/core-web-vitals";

const config = [
  ...nextCoreWebVitals,
  {
    rules: {
      "react/no-unescaped-entities": "error",
      "import/no-anonymous-default-export": "warn",
      "@next/next/no-img-element": "warn",
    },
  },
  {
    ignores: [".next/**", "out/**", "node_modules/**"],
  },
];

export default config;
