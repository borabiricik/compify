import babel from "rollup-plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import external from "rollup-plugin-peer-deps-external";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import styles from "rollup-plugin-styles";
import scss from "rollup-plugin-scss";
import postcss from "rollup-plugin-postcss";

const packageJson = require("./package.json");

export default [
  {
    input: "src/main.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
        exports: "named",
      },
    ],
    plugins: [
      styles({
        mode: "inject",
      }),
      babel({
        exclude: "node_modules/**",
        presets: ["@bable/preset-react"],
      }),
      external(),
      resolve(),
      typescript({
        sourceMap: true,
        inlineSources: true,
        tsconfig: "./tsconfig.json",
      }),
    ],
  },
  {
    input: "dist/esm/types/main.d.ts",
    output: [{ file: "dist/main.d.ts", format: "esm" }],
    plugins: [dts()],
    external: [/\.scss$/],
  },
];
