import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import { terser } from "rollup-plugin-terser";
import sass from "rollup-plugin-sass";
import copy from "rollup-plugin-copy";

import pkg from "./package.json";

const minifyExtension = (pathToFile) => pathToFile.replace(/\.js$/, ".min.js");

export default {
  input: "src/index.ts",
  output: [
    {
      file: pkg.main,
      format: "cjs",
      sourcemap: true,
    },
    {
      file: minifyExtension(pkg.main),
      format: "cjs",
      sourcemap: false,
    },
    {
      file: pkg.module,
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [
    terser({
      include: [/^.+\.min\.js$/],
    }),
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({ useTsconfigDeclarationDir: true }),
    sass({
      insert: true,
    }),
    copy({
      targets: [
        {
          src: "src/variables.scss",
          dest: "build",
          rename: "variables.scss",
        },
        {
          src: "src/typography.scss",
          dest: "build",
          rename: "typography.scss",
        },
      ],
    }),
  ],
};
