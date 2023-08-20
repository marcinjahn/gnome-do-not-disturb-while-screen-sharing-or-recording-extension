import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import cleanup from "rollup-plugin-cleanup";
import copy from "rollup-plugin-copy";

const buildPath = "dist";

const commonPaths = {
  "@gi-ts/adw1": "gi://Adw",
  "@gi-ts/gtk4": "gi://Gtk?version=4.0",
  "@gi-types/gvc1": "gi://Gvc",
  "@gi-ts/glib2": "gi://GLib",
  "@gi-ts/gio2": "gi://Gio",
  "@gi-types/meta10": "gi://Meta",
};

const extensionPaths = {
  ...commonPaths,
  "gnomejs://extension.js":
    "resource:///org/gnome/shell/extensions/extension.js",
  "gnomejs://main.js": "resource:///org/gnome/shell/ui/main.js",
  "gnomejs://volume.js": "resource:///org/gnome/shell/ui/status/volume.js",
};

const prefsPaths = {
  ...commonPaths,
  "gnomejs://prefs.js":
    "resource:///org/gnome/Shell/Extensions/js/extensions/prefs.js",
  "gnomejs://main.js": "resource:///org/gnome/Shell/Extensions/js/ui/main.js",
  "gnomejs://volume.js":
    "resource:///org/gnome/Shell/Extensions/js/ui/status/volume.js",
};

export default [
  {
    input: "src/extension.ts",
    treeshake: {
      moduleSideEffects: "no-external",
    },
    output: {
      file: `${buildPath}/extension.js`,
      format: "es",
      name: "init",
      exports: "default",
      paths: extensionPaths,
      assetFileNames: "[name][extname]",
    },
    plugins: [
      commonjs(),
      nodeResolve({
        preferBuiltins: false,
      }),
      typescript({
        tsconfig: "./tsconfig.json",
      }),
      // styles({
      //   mode: ["extract", `stylesheet.css`],
      // }),
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
      format: "es",
      exports: "default",
      name: "prefs",
      paths: prefsPaths,
    },
    treeshake: {
      moduleSideEffects: "no-external",
    },
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
