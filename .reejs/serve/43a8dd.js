 function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }import { defineConfig } from "../cache/b9d525.js";
import presetAutoprefix from "../cache/e4548e.js";
import presetTailwind from "../cache/f7fdbf.js";
import presetTypography from "../cache/5c8170.js";
import config from "./ddc106.js";
config.presets = _optionalChain([config, 'optionalAccess', _ => _.presets])?[..._optionalChain([config, 'optionalAccess', _2 => _2.presets]),presetTailwind, presetAutoprefix,presetTypography] : [presetTailwind, presetAutoprefix,presetTypography];
export default defineConfig(config);
//# sourceURL=twind.config.js