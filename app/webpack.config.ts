import path from "path";
import { Configuration} from "webpack";

const configuration: Configuration = {
    mode: "development",
    entry: {
      content_scripts: path.join(__dirname, "src", "index.ts"),
    },
    output: {
      path: path.join(__dirname, "dist"),
      filename: "[name].js",
    },
    module: {
      rules: [
        {
          use: "ts-loader",
          exclude: [/node_modules/],
        },
      ],
    },
    resolve: {
      extensions: [".ts", ".js"],
      alias: {
        "@": path.join(__dirname, "src"),
      },
    },
};

export default configuration;