export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","laron.svg"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml"},
	_: {
		entry: {"file":"_app/immutable/start-72864c2a.js","imports":["_app/immutable/start-72864c2a.js","_app/immutable/chunks/index-ed8f02f0.js","_app/immutable/chunks/singletons-c54f10c6.js"],"stylesheets":[]},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js'),
			() => import('../output/server/nodes/2.js'),
			() => import('../output/server/nodes/3.js'),
			() => import('../output/server/nodes/4.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/[lang]/[...page]",
				pattern: /^\/([^/]+?)(?:\/(.*))?\/?$/,
				names: ["lang","page"],
				types: [null,null],
				optional: [false,false],
				page: { layouts: [0,2], errors: [1,,], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
