export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "sveltekit-github-pages/_app",
	assets: new Set([".nojekyll","favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.Bv0A_LFF.js","app":"_app/immutable/entry/app.xMXd6Tku.js","imports":["_app/immutable/entry/start.Bv0A_LFF.js","_app/immutable/chunks/entry.39aVIWKf.js","_app/immutable/chunks/runtime.BxbSig_V.js","_app/immutable/entry/app.xMXd6Tku.js","_app/immutable/chunks/runtime.BxbSig_V.js","_app/immutable/chunks/render.DrVRgwF8.js","_app/immutable/chunks/events.CQKBbnPS.js","_app/immutable/chunks/disclose-version.5-VYsvCH.js","_app/immutable/chunks/if.Ds_vIugX.js","_app/immutable/chunks/proxy.B0E7sdpk.js","_app/immutable/chunks/store.BH3xCYiC.js","_app/immutable/chunks/index-client.CMFo1SHA.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/apropos",
				pattern: /^\/apropos\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/corps",
				pattern: /^\/corps\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/credits",
				pattern: /^\/credits\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
