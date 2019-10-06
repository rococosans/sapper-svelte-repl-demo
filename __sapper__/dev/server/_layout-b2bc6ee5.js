'use strict';

var index = require('./index-10a4cc17.js');

/* src\routes\del-tutorial\_layout.svelte generated by Svelte v3.12.0 */

async function preload() {
	const sections = await this.fetch(`tutorial.json`).then(r => r.json());
	return { sections };
}

const Layout = index.create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { sections } = $$props;
	index.setContext('tutorial', { sections });

	if ($$props.sections === void 0 && $$bindings.sections && sections !== void 0) $$bindings.sections(sections);

	return `${$$slots.default ? $$slots.default({}) : ``}`;
});

exports.default = Layout;
exports.preload = preload;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX2xheW91dC1iMmJjNmVlNS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3JvdXRlcy9kZWwtdHV0b3JpYWwvX2xheW91dC5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdCBjb250ZXh0PVwibW9kdWxlXCI+XG5cdGV4cG9ydCBhc3luYyBmdW5jdGlvbiBwcmVsb2FkKCkge1xuXHRcdGNvbnN0IHNlY3Rpb25zID0gYXdhaXQgdGhpcy5mZXRjaChgdHV0b3JpYWwuanNvbmApLnRoZW4ociA9PiByLmpzb24oKSk7XG5cdFx0cmV0dXJuIHsgc2VjdGlvbnMgfTtcblx0fVxuPC9zY3JpcHQ+XG5cbjxzY3JpcHQ+XG5cdGltcG9ydCB7IHNldENvbnRleHQgfSBmcm9tICdzdmVsdGUnO1xuXG5cdGV4cG9ydCBsZXQgc2VjdGlvbnM7XG5cdHNldENvbnRleHQoJ3R1dG9yaWFsJywgeyBzZWN0aW9ucyB9KTtcbjwvc2NyaXB0PlxuXG48c2xvdD48L3Nsb3Q+Il0sIm5hbWVzIjpbInNldENvbnRleHQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNRLGVBQWUsT0FBTyxHQUFHO0NBQy9CLE1BQU0sUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztDQUN2RSxPQUFPLEVBQUUsUUFBUSxFQUFFLENBQUM7Q0FDcEI7OztDQU1NLE1BQUksb0JBQVEsQ0FBQztDQUNwQkEsZ0JBQVUsQ0FBQyxVQUFVLEVBQUUsRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDOzs7Ozs7Ozs7OyJ9
