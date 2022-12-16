import { TextLintEngine } from "npm:textlint";
import _ from "npm:textlint-rule-preset-ja-technical-writing";
const engine = new TextLintEngine();
const results = await engine.executeOnFiles(Deno.args);
if (engine.isErrorResults(results)) console.log(engine.formatResults(results));
