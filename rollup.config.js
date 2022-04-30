import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import postcss from "rollup-plugin-postcss";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import autoprefixer from "autoprefixer";
import path from "path"

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
      },
    ],
    plugins: [
      peerDepsExternal(),
      postcss({
        plugins: [autoprefixer()],
        sourceMap: false,
        extract: true,
        minimize: true,
        use: [
          [
            "sass",
            {
              includePaths: [path.resolve("node_modules")],
            },
          ],
        ],
      }),

      resolve(),
      commonjs(),
      typescript({
        tsconfig: "./tsconfig.json",
        sourceMap: true,
        inlineSources: true,
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
