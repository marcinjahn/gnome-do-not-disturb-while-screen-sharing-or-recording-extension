import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import cleanup from "rollup-plugin-cleanup";
import copy from "rollup-plugin-copy";
import styles from "rollup-plugin-styles";

const buildPath = "dist";

const globals = {
  "@gi-types/gtk4": "imports.gi.Gtk",
  "@gi-types/adw1": "imports.gi.Adw",
  "@gi-types/gio2": "imports.gi.Gio",
};

const external = [...Object.keys(globals)];

const prefsFooter = [
  "var init = prefs.init;",
  "var fillPreferencesWindow = prefs.fillPreferencesWindow;",
].join("\n");

export default [
  {
    input: "src/extension.ts",
    treeshake: {
      moduleSideEffects: "no-external",
    },
    output: {
      file: `${buildPath}/extension.js`,
      format: "iife",
      name: "init",
      exports: "default",
      globals,
      assetFileNames: "[name][extname]",
    },
    external,
    plugins: [
      commonjs(),
      nodeResolve({
        preferBuiltins: false,
      }),
      typescript({
        tsconfig: "./tsconfig.json",
      }),
      styles({
        mode: ["extract", `stylesheet.css`],
      }),
      copy({
        targets: [
          { src: "./resources/metadata.json", dest: `${buildPath}` },
          { src: "./resources/schemas", dest: `${buildPath}` },
        ],
      }),
      cleanup({
        comments: "none",
      }),
    ],
  },
  {
    input: "src/prefs.ts",
    output: {
      file: `${buildPath}/prefs.js`,
      format: "iife",
      exports: "default",
      name: "prefs",
      globals,
      footer: prefsFooter,
    },
    treeshake: {
      moduleSideEffects: "no-external",
    },
    external,
    plugins: [
      commonjs(),
      nodeResolve({
        preferBuiltins: false,
      }),
      typescript({
        tsconfig: "./tsconfig.json",
      }),
      cleanup({
        comments: "none",
      }),
    ],
  },
];
