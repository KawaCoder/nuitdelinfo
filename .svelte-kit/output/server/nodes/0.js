import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.8WIRemb3.js","_app/immutable/chunks/disclose-version.5-VYsvCH.js","_app/immutable/chunks/runtime.BxbSig_V.js","_app/immutable/chunks/events.CQKBbnPS.js","_app/immutable/chunks/if.Ds_vIugX.js","_app/immutable/chunks/attributes.ChmpTACJ.js","_app/immutable/chunks/legacy.3D2G9Lpc.js","_app/immutable/chunks/lifecycle.DbI5IsWb.js","_app/immutable/chunks/index.DjKJqAo0.js","_app/immutable/chunks/entry.39aVIWKf.js","_app/immutable/chunks/render.DrVRgwF8.js"];
export const stylesheets = ["_app/immutable/assets/0.CSraeo4W.css"];
export const fonts = [];
