import { resolve } from "path";
import { defineConfig } from "rollup";

type ResourceExtType = "html" | "ts";

function getPathToResource(name: string, ext: ResourceExtType = "html") {
  return resolve("src", "pages", name, `index.${ext}`);
}

export default defineConfig({
  input: {
    popup: getPathToResource("popup"),
    options: getPathToResource("options"),
    standalone: getPathToResource("standalone"),
    author: getPathToResource("author", "ts"),
    background: getPathToResource("background", "ts"),
    createWfAemTools: getPathToResource("create-wf-aem-tools", "ts"),
    damAdmin: getPathToResource("dam-admin", "ts"),
    findReplace: getPathToResource("find-replace", "ts"),
    jira: getPathToResource("jira", "ts"),
    livePerf: getPathToResource("live-perf", "ts"),
    wfPage: getPathToResource("wf-page", "ts"),
  },
  output: {
    entryFileNames: `assets/[name].js`,
    chunkFileNames: `assets/[name].js`,
    assetFileNames: `assets/[name].[ext]`,
  },
});
