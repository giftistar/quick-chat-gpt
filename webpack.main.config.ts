import type { Configuration } from "webpack";

import { rules } from "./webpack.rules";
const CopyPlugin = require("copy-webpack-plugin");
import * as path from "path";
export const mainConfig: Configuration = {
  /**
   * This is the main entry point for your application, it's the first file
   * that runs in the main process.
   */
  entry: "./src/index.ts",
  // Put your normal webpack config below here
  module: {
    rules
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: "src/assets",
          to: "assets"
        }
      ]
    })
  ],
  resolve: {
    extensions: [".png", ".jpeg", ".js", ".ts", ".jsx", ".tsx", ".css", ".json"]
  }
};
