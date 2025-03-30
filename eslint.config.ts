import tseslint from "typescript-eslint";
import VenlocRecommended, { allTypescriptFiles, setIgnoreFiles, setParserOptions } from "@venloc-tech/typelint";
import { join } from "path";

const root = process.cwd();

export default tseslint.config({
  extends: VenlocRecommended,
  files: allTypescriptFiles,
  ...setParserOptions({ project: "./tsconfig.eslint.json" }),
  ...setIgnoreFiles(join(root, ".gitignore")),
});