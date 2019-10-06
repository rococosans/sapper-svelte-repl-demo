(function () {
	'use strict';

	// This file is generated by Sapper — do not edit it!
	const timestamp = 1570323820716;

	const files = [
		"service-worker-index.html",
		"contributors.jpg",
		"examples/thumbnails/7guis-circles.jpg",
		"examples/thumbnails/7guis-counter.jpg",
		"examples/thumbnails/7guis-crud.jpg",
		"examples/thumbnails/7guis-flight-booker.jpg",
		"examples/thumbnails/7guis-temperature.jpg",
		"examples/thumbnails/7guis-timer.jpg",
		"examples/thumbnails/actions.jpg",
		"examples/thumbnails/adding-parameters-to-actions.jpg",
		"examples/thumbnails/adding-parameters-to-transitions.jpg",
		"examples/thumbnails/animate.jpg",
		"examples/thumbnails/area-chart.jpg",
		"examples/thumbnails/auto-subscriptions.jpg",
		"examples/thumbnails/await-blocks.jpg",
		"examples/thumbnails/bar-chart.jpg",
		"examples/thumbnails/bind-this.jpg",
		"examples/thumbnails/checkbox-inputs.jpg",
		"examples/thumbnails/class-shorthand.jpg",
		"examples/thumbnails/classes.jpg",
		"examples/thumbnails/clock.jpg",
		"examples/thumbnails/component-bindings.jpg",
		"examples/thumbnails/component-events.jpg",
		"examples/thumbnails/context-api.jpg",
		"examples/thumbnails/custom-css-transitions.jpg",
		"examples/thumbnails/custom-js-transitions.jpg",
		"examples/thumbnails/custom-stores.jpg",
		"examples/thumbnails/debug.jpg",
		"examples/thumbnails/declaring-props.jpg",
		"examples/thumbnails/default-values.jpg",
		"examples/thumbnails/deferred-transitions.jpg",
		"examples/thumbnails/derived-stores.jpg",
		"examples/thumbnails/dimensions.jpg",
		"examples/thumbnails/dom-event-forwarding.jpg",
		"examples/thumbnails/dom-events.jpg",
		"examples/thumbnails/dynamic-attributes.jpg",
		"examples/thumbnails/each-block-bindings.jpg",
		"examples/thumbnails/each-blocks.jpg",
		"examples/thumbnails/easing.jpg",
		"examples/thumbnails/else-blocks.jpg",
		"examples/thumbnails/else-if-blocks.jpg",
		"examples/thumbnails/event-forwarding.jpg",
		"examples/thumbnails/event-modifiers.jpg",
		"examples/thumbnails/group-inputs.jpg",
		"examples/thumbnails/hacker-news.jpg",
		"examples/thumbnails/hello-world.jpg",
		"examples/thumbnails/html-tags.jpg",
		"examples/thumbnails/if-blocks.jpg",
		"examples/thumbnails/immutable-data.jpg",
		"examples/thumbnails/in-and-out.jpg",
		"examples/thumbnails/inline-handlers.jpg",
		"examples/thumbnails/keyed-each-blocks.jpg",
		"examples/thumbnails/media-elements.jpg",
		"examples/thumbnails/modal.jpg",
		"examples/thumbnails/module-exports.jpg",
		"examples/thumbnails/multiple-select-bindings.jpg",
		"examples/thumbnails/named-slots.jpg",
		"examples/thumbnails/nested-components.jpg",
		"examples/thumbnails/numeric-inputs.jpg",
		"examples/thumbnails/ondestroy.jpg",
		"examples/thumbnails/onmount.jpg",
		"examples/thumbnails/reactive-assignments.jpg",
		"examples/thumbnails/reactive-declarations.jpg",
		"examples/thumbnails/reactive-statements.jpg",
		"examples/thumbnails/readable-stores.jpg",
		"examples/thumbnails/scatterplot.jpg",
		"examples/thumbnails/select-bindings.jpg",
		"examples/thumbnails/sharing-code.jpg",
		"examples/thumbnails/slot-fallbacks.jpg",
		"examples/thumbnails/slot-props.jpg",
		"examples/thumbnails/slots.jpg",
		"examples/thumbnails/spread-props.jpg",
		"examples/thumbnails/spring.jpg",
		"examples/thumbnails/styling.jpg",
		"examples/thumbnails/svelte-body.jpg",
		"examples/thumbnails/svelte-component.jpg",
		"examples/thumbnails/svelte-head.jpg",
		"examples/thumbnails/svelte-self.jpg",
		"examples/thumbnails/svelte-window-bindings.jpg",
		"examples/thumbnails/svelte-window.jpg",
		"examples/thumbnails/svg-transitions.jpg",
		"examples/thumbnails/text-inputs.jpg",
		"examples/thumbnails/textarea-inputs.jpg",
		"examples/thumbnails/tick.jpg",
		"examples/thumbnails/transition-events.jpg",
		"examples/thumbnails/transition.jpg",
		"examples/thumbnails/tweened.jpg",
		"examples/thumbnails/update.jpg",
		"examples/thumbnails/writable-stores.jpg",
		"favicon.ico",
		"favicon.png",
		"fonts/fira-mono/fira-mono-latin-400.woff2",
		"fonts/overpass/overpass-latin-100.woff2",
		"fonts/overpass/overpass-latin-300.woff2",
		"fonts/overpass/overpass-latin-400.woff2",
		"fonts/overpass/overpass-latin-600.woff2",
		"fonts/overpass/overpass-latin-700.woff2",
		"fonts/roboto/roboto-latin-400.woff2",
		"fonts/roboto/roboto-latin-400italic.woff2",
		"fonts/roboto/roboto-latin-500.woff2",
		"fonts/roboto/roboto-latin-500italic.woff2",
		"global.css",
		"icons/arrow-right.svg",
		"icons/check.svg",
		"icons/chevron.svg",
		"icons/collapse.svg",
		"icons/download.svg",
		"icons/dropdown.svg",
		"icons/edit.svg",
		"icons/expand.svg",
		"icons/flip.svg",
		"icons/fork.svg",
		"icons/link.svg",
		"icons/loading.svg",
		"icons/save.svg",
		"images/svelte-android-chrome-192.png",
		"images/svelte-android-chrome-512.png",
		"images/svelte-apple-touch-icon.png",
		"images/svelte-mstile-150.png",
		"images/twitter-card.png",
		"logo-mask.svg",
		"manifest.json",
		"media/rethinking-best-practices.jpg",
		"organisations/bekchy.png",
		"organisations/beyonk.svg",
		"organisations/buydotstar.svg",
		"organisations/chess.svg",
		"organisations/comigo.svg",
		"organisations/datawrapper.svg",
		"organisations/dbnomics.jpg",
		"organisations/dbnomics.webp",
		"organisations/deck.svg",
		"organisations/dextra.png",
		"organisations/entriwise.png",
		"organisations/from-now-on.png",
		"organisations/fusioncharts.svg",
		"organisations/godaddy.svg",
		"organisations/grainger.svg",
		"organisations/healthtree.png",
		"organisations/itslearning.svg",
		"organisations/metrovias.svg",
		"organisations/mustlab.png",
		"organisations/nesta.svg",
		"organisations/nonkosi.svg",
		"organisations/nyt.svg",
		"organisations/nzz.svg",
		"organisations/oberonspace.svg",
		"organisations/ofof.png",
		"organisations/open-state-foundation.svg",
		"organisations/panascais.svg",
		"organisations/pankod.svg",
		"organisations/razorpay.svg",
		"organisations/socialist-party.svg",
		"organisations/sqltribe.svg",
		"organisations/stone.svg",
		"organisations/strixcloud.svg",
		"organisations/sucuri.png",
		"organisations/thunderdome.svg",
		"organisations/tokopedia.svg",
		"organisations/webdesq.svg",
		"organisations/zevvle.svg",
		"prism.css",
		"svelte-app.json",
		"svelte-logo-horizontal.svg",
		"svelte-logo-mask.svg",
		"svelte-logo-outline.svg",
		"svelte-logo-vertical.svg",
		"svelte-logo.svg",
		"svelte-logotype.svg",
		"tutorial/dark-theme.css",
		"tutorial/icons/email.svg",
		"tutorial/icons/folder-open.svg",
		"tutorial/icons/folder.svg",
		"tutorial/icons/gif.svg",
		"tutorial/icons/map-marker.svg",
		"tutorial/icons/md.svg",
		"tutorial/icons/xlsx.svg",
		"tutorial/image.gif",
		"tutorial/kitten.png",
		"workers/bundler.js",
		"workers/compiler.js"
	];

	const shell = [
		"client/client.79f07f1e.js",
		"client/index.121aa0ed.js",
		"client/index.ab7b6b80.js",
		"client/app.688aaf8d.js",
		"client/Repl.d20fb43b.js",
		"client/examples.83e383fd.js",
		"client/InputOutputToggle.cf880272.js",
		"client/ReplWidget.21faec58.js",
		"client/index.cdfcf57c.js",
		"client/_layout.8314ed23.js",
		"client/index.5a89353a.js",
		"client/config.305e0082.js",
		"client/index.0a978f10.js",
		"client/navigation.84703ebc.js",
		"client/index.ca5ce752.js",
		"client/index.636d6a22.js",
		"client/index.c51ff286.js",
		"client/embed.889ba2f8.js",
		"client/index.54131cc1.js",
		"client/sapper-dev-client.89e34bae.js",
		"client/codemirror.5ce01cfa.js"
	];

	const ASSETS = `cache${timestamp}`;

	// `shell` is an array of all the files generated by Rollup,
	// `files` is an array of everything in the `static` directory
	const to_cache = shell.concat(files.filter(file => {
		const basename = file.split('/').pop();
		if (basename[0] === '.') return false; // .DS_Store and friends
		if (basename.endsWith('.mp3')) return false; // TODO others?
		return true;
	}));
	const cached = new Set(to_cache);

	self.addEventListener('install', event => {
		event.waitUntil(
			caches
				.open(ASSETS)
				.then(cache => cache.addAll(to_cache))
				.then(() => {
					self.skipWaiting();
				})
		);
	});

	self.addEventListener('activate', event => {
		event.waitUntil(
			caches.keys().then(async keys => {
				// delete old caches
				for (const key of keys) {
					if (key !== ASSETS) await caches.delete(key);
				}

				self.clients.claim();
			})
		);
	});

	self.addEventListener('fetch', event => {
		if (event.request.method !== 'GET' || event.request.headers.has('range')) return;

		const url = new URL(event.request.url);

		// don't try to handle e.g. data: URIs
		if (!url.protocol.startsWith('http')) return;

		// ignore dev server requests
		if (url.hostname === self.location.hostname && url.port !== self.location.port) return;

		// always serve static files and Rollup-generated assets from cache
		if (url.host === self.location.host && cached.has(url.pathname)) {
			event.respondWith(caches.match(event.request));
			return;
		}

		// for pages, you might want to serve a shell `index.html` file,
		// which Sapper has generated for you. It's not right for every
		// app, but if it's right for yours then uncomment this section
		/*
		if (url.origin === self.origin && routes.find(route => route.pattern.test(url.pathname))) {
			event.respondWith(caches.match('/index.html'));
			return;
		}
		*/

		if (event.request.cache === 'only-if-cached') return;

		// for everything else, try the network first, falling back to
		// cache if the user is offline. (If the pages never change, you
		// might prefer a cache-first approach to a network-first one.)
		event.respondWith(
			caches
				.open(`offline${timestamp}`)
				.then(async cache => {
					try {
						const response = await fetch(event.request);
						cache.put(event.request, response.clone());
						return response;
					} catch (err) {
						const response = await cache.match(event.request);
						if (response) return response;

						throw err;
					}
				})
		);
	});

}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZS13b3JrZXIuanMiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlX21vZHVsZXMvQHNhcHBlci9zZXJ2aWNlLXdvcmtlci5qcyIsIi4uLy4uL3NyYy9zZXJ2aWNlLXdvcmtlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGlzIGZpbGUgaXMgZ2VuZXJhdGVkIGJ5IFNhcHBlciDigJQgZG8gbm90IGVkaXQgaXQhXG5leHBvcnQgY29uc3QgdGltZXN0YW1wID0gMTU3MDMyMzgyMDcxNjtcblxuZXhwb3J0IGNvbnN0IGZpbGVzID0gW1xuXHRcInNlcnZpY2Utd29ya2VyLWluZGV4Lmh0bWxcIixcblx0XCJjb250cmlidXRvcnMuanBnXCIsXG5cdFwiZXhhbXBsZXMvdGh1bWJuYWlscy83Z3Vpcy1jaXJjbGVzLmpwZ1wiLFxuXHRcImV4YW1wbGVzL3RodW1ibmFpbHMvN2d1aXMtY291bnRlci5qcGdcIixcblx0XCJleGFtcGxlcy90aHVtYm5haWxzLzdndWlzLWNydWQuanBnXCIsXG5cdFwiZXhhbXBsZXMvdGh1bWJuYWlscy83Z3Vpcy1mbGlnaHQtYm9va2VyLmpwZ1wiLFxuXHRcImV4YW1wbGVzL3RodW1ibmFpbHMvN2d1aXMtdGVtcGVyYXR1cmUuanBnXCIsXG5cdFwiZXhhbXBsZXMvdGh1bWJuYWlscy83Z3Vpcy10aW1lci5qcGdcIixcblx0XCJleGFtcGxlcy90aHVtYm5haWxzL2FjdGlvbnMuanBnXCIsXG5cdFwiZXhhbXBsZXMvdGh1bWJuYWlscy9hZGRpbmctcGFyYW1ldGVycy10by1hY3Rpb25zLmpwZ1wiLFxuXHRcImV4YW1wbGVzL3RodW1ibmFpbHMvYWRkaW5nLXBhcmFtZXRlcnMtdG8tdHJhbnNpdGlvbnMuanBnXCIsXG5cdFwiZXhhbXBsZXMvdGh1bWJuYWlscy9hbmltYXRlLmpwZ1wiLFxuXHRcImV4YW1wbGVzL3RodW1ibmFpbHMvYXJlYS1jaGFydC5qcGdcIixcblx0XCJleGFtcGxlcy90aHVtYm5haWxzL2F1dG8tc3Vic2NyaXB0aW9ucy5qcGdcIixcblx0XCJleGFtcGxlcy90aHVtYm5haWxzL2F3YWl0LWJsb2Nrcy5qcGdcIixcblx0XCJleGFtcGxlcy90aHVtYm5haWxzL2Jhci1jaGFydC5qcGdcIixcblx0XCJleGFtcGxlcy90aHVtYm5haWxzL2JpbmQtdGhpcy5qcGdcIixcblx0XCJleGFtcGxlcy90aHVtYm5haWxzL2NoZWNrYm94LWlucHV0cy5qcGdcIixcblx0XCJleGFtcGxlcy90aHVtYm5haWxzL2NsYXNzLXNob3J0aGFuZC5qcGdcIixcblx0XCJleGFtcGxlcy90aHVtYm5haWxzL2NsYXNzZXMuanBnXCIsXG5cdFwiZXhhbXBsZXMvdGh1bWJuYWlscy9jbG9jay5qcGdcIixcblx0XCJleGFtcGxlcy90aHVtYm5haWxzL2NvbXBvbmVudC1iaW5kaW5ncy5qcGdcIixcblx0XCJleGFtcGxlcy90aHVtYm5haWxzL2NvbXBvbmVudC1ldmVudHMuanBnXCIsXG5cdFwiZXhhbXBsZXMvdGh1bWJuYWlscy9jb250ZXh0LWFwaS5qcGdcIixcblx0XCJleGFtcGxlcy90aHVtYm5haWxzL2N1c3RvbS1jc3MtdHJhbnNpdGlvbnMuanBnXCIsXG5cdFwiZXhhbXBsZXMvdGh1bWJuYWlscy9jdXN0b20tanMtdHJhbnNpdGlvbnMuanBnXCIsXG5cdFwiZXhhbXBsZXMvdGh1bWJuYWlscy9jdXN0b20tc3RvcmVzLmpwZ1wiLFxuXHRcImV4YW1wbGVzL3RodW1ibmFpbHMvZGVidWcuanBnXCIsXG5cdFwiZXhhbXBsZXMvdGh1bWJuYWlscy9kZWNsYXJpbmctcHJvcHMuanBnXCIsXG5cdFwiZXhhbXBsZXMvdGh1bWJuYWlscy9kZWZhdWx0LXZhbHVlcy5qcGdcIixcblx0XCJleGFtcGxlcy90aHVtYm5haWxzL2RlZmVycmVkLXRyYW5zaXRpb25zLmpwZ1wiLFxuXHRcImV4YW1wbGVzL3RodW1ibmFpbHMvZGVyaXZlZC1zdG9yZXMuanBnXCIsXG5cdFwiZXhhbXBsZXMvdGh1bWJuYWlscy9kaW1lbnNpb25zLmpwZ1wiLFxuXHRcImV4YW1wbGVzL3RodW1ibmFpbHMvZG9tLWV2ZW50LWZvcndhcmRpbmcuanBnXCIsXG5cdFwiZXhhbXBsZXMvdGh1bWJuYWlscy9kb20tZXZlbnRzLmpwZ1wiLFxuXHRcImV4YW1wbGVzL3RodW1ibmFpbHMvZHluYW1pYy1hdHRyaWJ1dGVzLmpwZ1wiLFxuXHRcImV4YW1wbGVzL3RodW1ibmFpbHMvZWFjaC1ibG9jay1iaW5kaW5ncy5qcGdcIixcblx0XCJleGFtcGxlcy90aHVtYm5haWxzL2VhY2gtYmxvY2tzLmpwZ1wiLFxuXHRcImV4YW1wbGVzL3RodW1ibmFpbHMvZWFzaW5nLmpwZ1wiLFxuXHRcImV4YW1wbGVzL3RodW1ibmFpbHMvZWxzZS1ibG9ja3MuanBnXCIsXG5cdFwiZXhhbXBsZXMvdGh1bWJuYWlscy9lbHNlLWlmLWJsb2Nrcy5qcGdcIixcblx0XCJleGFtcGxlcy90aHVtYm5haWxzL2V2ZW50LWZvcndhcmRpbmcuanBnXCIsXG5cdFwiZXhhbXBsZXMvdGh1bWJuYWlscy9ldmVudC1tb2RpZmllcnMuanBnXCIsXG5cdFwiZXhhbXBsZXMvdGh1bWJuYWlscy9ncm91cC1pbnB1dHMuanBnXCIsXG5cdFwiZXhhbXBsZXMvdGh1bWJuYWlscy9oYWNrZXItbmV3cy5qcGdcIixcblx0XCJleGFtcGxlcy90aHVtYm5haWxzL2hlbGxvLXdvcmxkLmpwZ1wiLFxuXHRcImV4YW1wbGVzL3RodW1ibmFpbHMvaHRtbC10YWdzLmpwZ1wiLFxuXHRcImV4YW1wbGVzL3RodW1ibmFpbHMvaWYtYmxvY2tzLmpwZ1wiLFxuXHRcImV4YW1wbGVzL3RodW1ibmFpbHMvaW1tdXRhYmxlLWRhdGEuanBnXCIsXG5cdFwiZXhhbXBsZXMvdGh1bWJuYWlscy9pbi1hbmQtb3V0LmpwZ1wiLFxuXHRcImV4YW1wbGVzL3RodW1ibmFpbHMvaW5saW5lLWhhbmRsZXJzLmpwZ1wiLFxuXHRcImV4YW1wbGVzL3RodW1ibmFpbHMva2V5ZWQtZWFjaC1ibG9ja3MuanBnXCIsXG5cdFwiZXhhbXBsZXMvdGh1bWJuYWlscy9tZWRpYS1lbGVtZW50cy5qcGdcIixcblx0XCJleGFtcGxlcy90aHVtYm5haWxzL21vZGFsLmpwZ1wiLFxuXHRcImV4YW1wbGVzL3RodW1ibmFpbHMvbW9kdWxlLWV4cG9ydHMuanBnXCIsXG5cdFwiZXhhbXBsZXMvdGh1bWJuYWlscy9tdWx0aXBsZS1zZWxlY3QtYmluZGluZ3MuanBnXCIsXG5cdFwiZXhhbXBsZXMvdGh1bWJuYWlscy9uYW1lZC1zbG90cy5qcGdcIixcblx0XCJleGFtcGxlcy90aHVtYm5haWxzL25lc3RlZC1jb21wb25lbnRzLmpwZ1wiLFxuXHRcImV4YW1wbGVzL3RodW1ibmFpbHMvbnVtZXJpYy1pbnB1dHMuanBnXCIsXG5cdFwiZXhhbXBsZXMvdGh1bWJuYWlscy9vbmRlc3Ryb3kuanBnXCIsXG5cdFwiZXhhbXBsZXMvdGh1bWJuYWlscy9vbm1vdW50LmpwZ1wiLFxuXHRcImV4YW1wbGVzL3RodW1ibmFpbHMvcmVhY3RpdmUtYXNzaWdubWVudHMuanBnXCIsXG5cdFwiZXhhbXBsZXMvdGh1bWJuYWlscy9yZWFjdGl2ZS1kZWNsYXJhdGlvbnMuanBnXCIsXG5cdFwiZXhhbXBsZXMvdGh1bWJuYWlscy9yZWFjdGl2ZS1zdGF0ZW1lbnRzLmpwZ1wiLFxuXHRcImV4YW1wbGVzL3RodW1ibmFpbHMvcmVhZGFibGUtc3RvcmVzLmpwZ1wiLFxuXHRcImV4YW1wbGVzL3RodW1ibmFpbHMvc2NhdHRlcnBsb3QuanBnXCIsXG5cdFwiZXhhbXBsZXMvdGh1bWJuYWlscy9zZWxlY3QtYmluZGluZ3MuanBnXCIsXG5cdFwiZXhhbXBsZXMvdGh1bWJuYWlscy9zaGFyaW5nLWNvZGUuanBnXCIsXG5cdFwiZXhhbXBsZXMvdGh1bWJuYWlscy9zbG90LWZhbGxiYWNrcy5qcGdcIixcblx0XCJleGFtcGxlcy90aHVtYm5haWxzL3Nsb3QtcHJvcHMuanBnXCIsXG5cdFwiZXhhbXBsZXMvdGh1bWJuYWlscy9zbG90cy5qcGdcIixcblx0XCJleGFtcGxlcy90aHVtYm5haWxzL3NwcmVhZC1wcm9wcy5qcGdcIixcblx0XCJleGFtcGxlcy90aHVtYm5haWxzL3NwcmluZy5qcGdcIixcblx0XCJleGFtcGxlcy90aHVtYm5haWxzL3N0eWxpbmcuanBnXCIsXG5cdFwiZXhhbXBsZXMvdGh1bWJuYWlscy9zdmVsdGUtYm9keS5qcGdcIixcblx0XCJleGFtcGxlcy90aHVtYm5haWxzL3N2ZWx0ZS1jb21wb25lbnQuanBnXCIsXG5cdFwiZXhhbXBsZXMvdGh1bWJuYWlscy9zdmVsdGUtaGVhZC5qcGdcIixcblx0XCJleGFtcGxlcy90aHVtYm5haWxzL3N2ZWx0ZS1zZWxmLmpwZ1wiLFxuXHRcImV4YW1wbGVzL3RodW1ibmFpbHMvc3ZlbHRlLXdpbmRvdy1iaW5kaW5ncy5qcGdcIixcblx0XCJleGFtcGxlcy90aHVtYm5haWxzL3N2ZWx0ZS13aW5kb3cuanBnXCIsXG5cdFwiZXhhbXBsZXMvdGh1bWJuYWlscy9zdmctdHJhbnNpdGlvbnMuanBnXCIsXG5cdFwiZXhhbXBsZXMvdGh1bWJuYWlscy90ZXh0LWlucHV0cy5qcGdcIixcblx0XCJleGFtcGxlcy90aHVtYm5haWxzL3RleHRhcmVhLWlucHV0cy5qcGdcIixcblx0XCJleGFtcGxlcy90aHVtYm5haWxzL3RpY2suanBnXCIsXG5cdFwiZXhhbXBsZXMvdGh1bWJuYWlscy90cmFuc2l0aW9uLWV2ZW50cy5qcGdcIixcblx0XCJleGFtcGxlcy90aHVtYm5haWxzL3RyYW5zaXRpb24uanBnXCIsXG5cdFwiZXhhbXBsZXMvdGh1bWJuYWlscy90d2VlbmVkLmpwZ1wiLFxuXHRcImV4YW1wbGVzL3RodW1ibmFpbHMvdXBkYXRlLmpwZ1wiLFxuXHRcImV4YW1wbGVzL3RodW1ibmFpbHMvd3JpdGFibGUtc3RvcmVzLmpwZ1wiLFxuXHRcImZhdmljb24uaWNvXCIsXG5cdFwiZmF2aWNvbi5wbmdcIixcblx0XCJmb250cy9maXJhLW1vbm8vZmlyYS1tb25vLWxhdGluLTQwMC53b2ZmMlwiLFxuXHRcImZvbnRzL292ZXJwYXNzL292ZXJwYXNzLWxhdGluLTEwMC53b2ZmMlwiLFxuXHRcImZvbnRzL292ZXJwYXNzL292ZXJwYXNzLWxhdGluLTMwMC53b2ZmMlwiLFxuXHRcImZvbnRzL292ZXJwYXNzL292ZXJwYXNzLWxhdGluLTQwMC53b2ZmMlwiLFxuXHRcImZvbnRzL292ZXJwYXNzL292ZXJwYXNzLWxhdGluLTYwMC53b2ZmMlwiLFxuXHRcImZvbnRzL292ZXJwYXNzL292ZXJwYXNzLWxhdGluLTcwMC53b2ZmMlwiLFxuXHRcImZvbnRzL3JvYm90by9yb2JvdG8tbGF0aW4tNDAwLndvZmYyXCIsXG5cdFwiZm9udHMvcm9ib3RvL3JvYm90by1sYXRpbi00MDBpdGFsaWMud29mZjJcIixcblx0XCJmb250cy9yb2JvdG8vcm9ib3RvLWxhdGluLTUwMC53b2ZmMlwiLFxuXHRcImZvbnRzL3JvYm90by9yb2JvdG8tbGF0aW4tNTAwaXRhbGljLndvZmYyXCIsXG5cdFwiZ2xvYmFsLmNzc1wiLFxuXHRcImljb25zL2Fycm93LXJpZ2h0LnN2Z1wiLFxuXHRcImljb25zL2NoZWNrLnN2Z1wiLFxuXHRcImljb25zL2NoZXZyb24uc3ZnXCIsXG5cdFwiaWNvbnMvY29sbGFwc2Uuc3ZnXCIsXG5cdFwiaWNvbnMvZG93bmxvYWQuc3ZnXCIsXG5cdFwiaWNvbnMvZHJvcGRvd24uc3ZnXCIsXG5cdFwiaWNvbnMvZWRpdC5zdmdcIixcblx0XCJpY29ucy9leHBhbmQuc3ZnXCIsXG5cdFwiaWNvbnMvZmxpcC5zdmdcIixcblx0XCJpY29ucy9mb3JrLnN2Z1wiLFxuXHRcImljb25zL2xpbmsuc3ZnXCIsXG5cdFwiaWNvbnMvbG9hZGluZy5zdmdcIixcblx0XCJpY29ucy9zYXZlLnN2Z1wiLFxuXHRcImltYWdlcy9zdmVsdGUtYW5kcm9pZC1jaHJvbWUtMTkyLnBuZ1wiLFxuXHRcImltYWdlcy9zdmVsdGUtYW5kcm9pZC1jaHJvbWUtNTEyLnBuZ1wiLFxuXHRcImltYWdlcy9zdmVsdGUtYXBwbGUtdG91Y2gtaWNvbi5wbmdcIixcblx0XCJpbWFnZXMvc3ZlbHRlLW1zdGlsZS0xNTAucG5nXCIsXG5cdFwiaW1hZ2VzL3R3aXR0ZXItY2FyZC5wbmdcIixcblx0XCJsb2dvLW1hc2suc3ZnXCIsXG5cdFwibWFuaWZlc3QuanNvblwiLFxuXHRcIm1lZGlhL3JldGhpbmtpbmctYmVzdC1wcmFjdGljZXMuanBnXCIsXG5cdFwib3JnYW5pc2F0aW9ucy9iZWtjaHkucG5nXCIsXG5cdFwib3JnYW5pc2F0aW9ucy9iZXlvbmsuc3ZnXCIsXG5cdFwib3JnYW5pc2F0aW9ucy9idXlkb3RzdGFyLnN2Z1wiLFxuXHRcIm9yZ2FuaXNhdGlvbnMvY2hlc3Muc3ZnXCIsXG5cdFwib3JnYW5pc2F0aW9ucy9jb21pZ28uc3ZnXCIsXG5cdFwib3JnYW5pc2F0aW9ucy9kYXRhd3JhcHBlci5zdmdcIixcblx0XCJvcmdhbmlzYXRpb25zL2Ribm9taWNzLmpwZ1wiLFxuXHRcIm9yZ2FuaXNhdGlvbnMvZGJub21pY3Mud2VicFwiLFxuXHRcIm9yZ2FuaXNhdGlvbnMvZGVjay5zdmdcIixcblx0XCJvcmdhbmlzYXRpb25zL2RleHRyYS5wbmdcIixcblx0XCJvcmdhbmlzYXRpb25zL2VudHJpd2lzZS5wbmdcIixcblx0XCJvcmdhbmlzYXRpb25zL2Zyb20tbm93LW9uLnBuZ1wiLFxuXHRcIm9yZ2FuaXNhdGlvbnMvZnVzaW9uY2hhcnRzLnN2Z1wiLFxuXHRcIm9yZ2FuaXNhdGlvbnMvZ29kYWRkeS5zdmdcIixcblx0XCJvcmdhbmlzYXRpb25zL2dyYWluZ2VyLnN2Z1wiLFxuXHRcIm9yZ2FuaXNhdGlvbnMvaGVhbHRodHJlZS5wbmdcIixcblx0XCJvcmdhbmlzYXRpb25zL2l0c2xlYXJuaW5nLnN2Z1wiLFxuXHRcIm9yZ2FuaXNhdGlvbnMvbWV0cm92aWFzLnN2Z1wiLFxuXHRcIm9yZ2FuaXNhdGlvbnMvbXVzdGxhYi5wbmdcIixcblx0XCJvcmdhbmlzYXRpb25zL25lc3RhLnN2Z1wiLFxuXHRcIm9yZ2FuaXNhdGlvbnMvbm9ua29zaS5zdmdcIixcblx0XCJvcmdhbmlzYXRpb25zL255dC5zdmdcIixcblx0XCJvcmdhbmlzYXRpb25zL256ei5zdmdcIixcblx0XCJvcmdhbmlzYXRpb25zL29iZXJvbnNwYWNlLnN2Z1wiLFxuXHRcIm9yZ2FuaXNhdGlvbnMvb2ZvZi5wbmdcIixcblx0XCJvcmdhbmlzYXRpb25zL29wZW4tc3RhdGUtZm91bmRhdGlvbi5zdmdcIixcblx0XCJvcmdhbmlzYXRpb25zL3BhbmFzY2Fpcy5zdmdcIixcblx0XCJvcmdhbmlzYXRpb25zL3BhbmtvZC5zdmdcIixcblx0XCJvcmdhbmlzYXRpb25zL3Jhem9ycGF5LnN2Z1wiLFxuXHRcIm9yZ2FuaXNhdGlvbnMvc29jaWFsaXN0LXBhcnR5LnN2Z1wiLFxuXHRcIm9yZ2FuaXNhdGlvbnMvc3FsdHJpYmUuc3ZnXCIsXG5cdFwib3JnYW5pc2F0aW9ucy9zdG9uZS5zdmdcIixcblx0XCJvcmdhbmlzYXRpb25zL3N0cml4Y2xvdWQuc3ZnXCIsXG5cdFwib3JnYW5pc2F0aW9ucy9zdWN1cmkucG5nXCIsXG5cdFwib3JnYW5pc2F0aW9ucy90aHVuZGVyZG9tZS5zdmdcIixcblx0XCJvcmdhbmlzYXRpb25zL3Rva29wZWRpYS5zdmdcIixcblx0XCJvcmdhbmlzYXRpb25zL3dlYmRlc3Euc3ZnXCIsXG5cdFwib3JnYW5pc2F0aW9ucy96ZXZ2bGUuc3ZnXCIsXG5cdFwicHJpc20uY3NzXCIsXG5cdFwic3ZlbHRlLWFwcC5qc29uXCIsXG5cdFwic3ZlbHRlLWxvZ28taG9yaXpvbnRhbC5zdmdcIixcblx0XCJzdmVsdGUtbG9nby1tYXNrLnN2Z1wiLFxuXHRcInN2ZWx0ZS1sb2dvLW91dGxpbmUuc3ZnXCIsXG5cdFwic3ZlbHRlLWxvZ28tdmVydGljYWwuc3ZnXCIsXG5cdFwic3ZlbHRlLWxvZ28uc3ZnXCIsXG5cdFwic3ZlbHRlLWxvZ290eXBlLnN2Z1wiLFxuXHRcInR1dG9yaWFsL2RhcmstdGhlbWUuY3NzXCIsXG5cdFwidHV0b3JpYWwvaWNvbnMvZW1haWwuc3ZnXCIsXG5cdFwidHV0b3JpYWwvaWNvbnMvZm9sZGVyLW9wZW4uc3ZnXCIsXG5cdFwidHV0b3JpYWwvaWNvbnMvZm9sZGVyLnN2Z1wiLFxuXHRcInR1dG9yaWFsL2ljb25zL2dpZi5zdmdcIixcblx0XCJ0dXRvcmlhbC9pY29ucy9tYXAtbWFya2VyLnN2Z1wiLFxuXHRcInR1dG9yaWFsL2ljb25zL21kLnN2Z1wiLFxuXHRcInR1dG9yaWFsL2ljb25zL3hsc3guc3ZnXCIsXG5cdFwidHV0b3JpYWwvaW1hZ2UuZ2lmXCIsXG5cdFwidHV0b3JpYWwva2l0dGVuLnBuZ1wiLFxuXHRcIndvcmtlcnMvYnVuZGxlci5qc1wiLFxuXHRcIndvcmtlcnMvY29tcGlsZXIuanNcIlxuXTtcbmV4cG9ydCB7IGZpbGVzIGFzIGFzc2V0cyB9OyAvLyBsZWdhY3lcblxuZXhwb3J0IGNvbnN0IHNoZWxsID0gW1xuXHRcImNsaWVudC9jbGllbnQuNzlmMDdmMWUuanNcIixcblx0XCJjbGllbnQvaW5kZXguMTIxYWEwZWQuanNcIixcblx0XCJjbGllbnQvaW5kZXguYWI3YjZiODAuanNcIixcblx0XCJjbGllbnQvYXBwLjY4OGFhZjhkLmpzXCIsXG5cdFwiY2xpZW50L1JlcGwuZDIwZmI0M2IuanNcIixcblx0XCJjbGllbnQvZXhhbXBsZXMuODNlMzgzZmQuanNcIixcblx0XCJjbGllbnQvSW5wdXRPdXRwdXRUb2dnbGUuY2Y4ODAyNzIuanNcIixcblx0XCJjbGllbnQvUmVwbFdpZGdldC4yMWZhZWM1OC5qc1wiLFxuXHRcImNsaWVudC9pbmRleC5jZGZjZjU3Yy5qc1wiLFxuXHRcImNsaWVudC9fbGF5b3V0LjgzMTRlZDIzLmpzXCIsXG5cdFwiY2xpZW50L2luZGV4LjVhODkzNTNhLmpzXCIsXG5cdFwiY2xpZW50L2NvbmZpZy4zMDVlMDA4Mi5qc1wiLFxuXHRcImNsaWVudC9pbmRleC4wYTk3OGYxMC5qc1wiLFxuXHRcImNsaWVudC9uYXZpZ2F0aW9uLjg0NzAzZWJjLmpzXCIsXG5cdFwiY2xpZW50L2luZGV4LmNhNWNlNzUyLmpzXCIsXG5cdFwiY2xpZW50L2luZGV4LjYzNmQ2YTIyLmpzXCIsXG5cdFwiY2xpZW50L2luZGV4LmM1MWZmMjg2LmpzXCIsXG5cdFwiY2xpZW50L2VtYmVkLjg4OWJhMmY4LmpzXCIsXG5cdFwiY2xpZW50L2luZGV4LjU0MTMxY2MxLmpzXCIsXG5cdFwiY2xpZW50L3NhcHBlci1kZXYtY2xpZW50Ljg5ZTM0YmFlLmpzXCIsXG5cdFwiY2xpZW50L2NvZGVtaXJyb3IuNWNlMDFjZmEuanNcIlxuXTtcblxuZXhwb3J0IGNvbnN0IHJvdXRlcyA9IFtcblx0eyBwYXR0ZXJuOiAvXlxcLyQvIH0sXG5cdHsgcGF0dGVybjogL15cXC9kZWwtdHV0b3JpYWxcXC8/JC8gfSxcblx0eyBwYXR0ZXJuOiAvXlxcL2RlbC10dXRvcmlhbFxcLyhbXlxcL10rPylcXC8/JC8gfSxcblx0eyBwYXR0ZXJuOiAvXlxcL2V4YW1wbGVzXFwvPyQvIH0sXG5cdHsgcGF0dGVybjogL15cXC9yZXBsXFwvPyQvIH0sXG5cdHsgcGF0dGVybjogL15cXC9yZXBsXFwvZW1iZWRcXC8/JC8gfSxcblx0eyBwYXR0ZXJuOiAvXlxcL3JlcGxcXC8oW15cXC9dKz8pXFwvPyQvIH1cbl07IiwiaW1wb3J0IHsgdGltZXN0YW1wLCBmaWxlcywgc2hlbGwgfSBmcm9tICdAc2FwcGVyL3NlcnZpY2Utd29ya2VyJztcblxuY29uc3QgQVNTRVRTID0gYGNhY2hlJHt0aW1lc3RhbXB9YDtcblxuLy8gYHNoZWxsYCBpcyBhbiBhcnJheSBvZiBhbGwgdGhlIGZpbGVzIGdlbmVyYXRlZCBieSBSb2xsdXAsXG4vLyBgZmlsZXNgIGlzIGFuIGFycmF5IG9mIGV2ZXJ5dGhpbmcgaW4gdGhlIGBzdGF0aWNgIGRpcmVjdG9yeVxuY29uc3QgdG9fY2FjaGUgPSBzaGVsbC5jb25jYXQoZmlsZXMuZmlsdGVyKGZpbGUgPT4ge1xuXHRjb25zdCBiYXNlbmFtZSA9IGZpbGUuc3BsaXQoJy8nKS5wb3AoKTtcblx0aWYgKGJhc2VuYW1lWzBdID09PSAnLicpIHJldHVybiBmYWxzZTsgLy8gLkRTX1N0b3JlIGFuZCBmcmllbmRzXG5cdGlmIChiYXNlbmFtZS5lbmRzV2l0aCgnLm1wMycpKSByZXR1cm4gZmFsc2U7IC8vIFRPRE8gb3RoZXJzP1xuXHRyZXR1cm4gdHJ1ZTtcbn0pKTtcbmNvbnN0IGNhY2hlZCA9IG5ldyBTZXQodG9fY2FjaGUpO1xuXG5zZWxmLmFkZEV2ZW50TGlzdGVuZXIoJ2luc3RhbGwnLCBldmVudCA9PiB7XG5cdGV2ZW50LndhaXRVbnRpbChcblx0XHRjYWNoZXNcblx0XHRcdC5vcGVuKEFTU0VUUylcblx0XHRcdC50aGVuKGNhY2hlID0+IGNhY2hlLmFkZEFsbCh0b19jYWNoZSkpXG5cdFx0XHQudGhlbigoKSA9PiB7XG5cdFx0XHRcdHNlbGYuc2tpcFdhaXRpbmcoKTtcblx0XHRcdH0pXG5cdCk7XG59KTtcblxuc2VsZi5hZGRFdmVudExpc3RlbmVyKCdhY3RpdmF0ZScsIGV2ZW50ID0+IHtcblx0ZXZlbnQud2FpdFVudGlsKFxuXHRcdGNhY2hlcy5rZXlzKCkudGhlbihhc3luYyBrZXlzID0+IHtcblx0XHRcdC8vIGRlbGV0ZSBvbGQgY2FjaGVzXG5cdFx0XHRmb3IgKGNvbnN0IGtleSBvZiBrZXlzKSB7XG5cdFx0XHRcdGlmIChrZXkgIT09IEFTU0VUUykgYXdhaXQgY2FjaGVzLmRlbGV0ZShrZXkpO1xuXHRcdFx0fVxuXG5cdFx0XHRzZWxmLmNsaWVudHMuY2xhaW0oKTtcblx0XHR9KVxuXHQpO1xufSk7XG5cbnNlbGYuYWRkRXZlbnRMaXN0ZW5lcignZmV0Y2gnLCBldmVudCA9PiB7XG5cdGlmIChldmVudC5yZXF1ZXN0Lm1ldGhvZCAhPT0gJ0dFVCcgfHwgZXZlbnQucmVxdWVzdC5oZWFkZXJzLmhhcygncmFuZ2UnKSkgcmV0dXJuO1xuXG5cdGNvbnN0IHVybCA9IG5ldyBVUkwoZXZlbnQucmVxdWVzdC51cmwpO1xuXG5cdC8vIGRvbid0IHRyeSB0byBoYW5kbGUgZS5nLiBkYXRhOiBVUklzXG5cdGlmICghdXJsLnByb3RvY29sLnN0YXJ0c1dpdGgoJ2h0dHAnKSkgcmV0dXJuO1xuXG5cdC8vIGlnbm9yZSBkZXYgc2VydmVyIHJlcXVlc3RzXG5cdGlmICh1cmwuaG9zdG5hbWUgPT09IHNlbGYubG9jYXRpb24uaG9zdG5hbWUgJiYgdXJsLnBvcnQgIT09IHNlbGYubG9jYXRpb24ucG9ydCkgcmV0dXJuO1xuXG5cdC8vIGFsd2F5cyBzZXJ2ZSBzdGF0aWMgZmlsZXMgYW5kIFJvbGx1cC1nZW5lcmF0ZWQgYXNzZXRzIGZyb20gY2FjaGVcblx0aWYgKHVybC5ob3N0ID09PSBzZWxmLmxvY2F0aW9uLmhvc3QgJiYgY2FjaGVkLmhhcyh1cmwucGF0aG5hbWUpKSB7XG5cdFx0ZXZlbnQucmVzcG9uZFdpdGgoY2FjaGVzLm1hdGNoKGV2ZW50LnJlcXVlc3QpKTtcblx0XHRyZXR1cm47XG5cdH1cblxuXHQvLyBmb3IgcGFnZXMsIHlvdSBtaWdodCB3YW50IHRvIHNlcnZlIGEgc2hlbGwgYGluZGV4Lmh0bWxgIGZpbGUsXG5cdC8vIHdoaWNoIFNhcHBlciBoYXMgZ2VuZXJhdGVkIGZvciB5b3UuIEl0J3Mgbm90IHJpZ2h0IGZvciBldmVyeVxuXHQvLyBhcHAsIGJ1dCBpZiBpdCdzIHJpZ2h0IGZvciB5b3VycyB0aGVuIHVuY29tbWVudCB0aGlzIHNlY3Rpb25cblx0Lypcblx0aWYgKHVybC5vcmlnaW4gPT09IHNlbGYub3JpZ2luICYmIHJvdXRlcy5maW5kKHJvdXRlID0+IHJvdXRlLnBhdHRlcm4udGVzdCh1cmwucGF0aG5hbWUpKSkge1xuXHRcdGV2ZW50LnJlc3BvbmRXaXRoKGNhY2hlcy5tYXRjaCgnL2luZGV4Lmh0bWwnKSk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdCovXG5cblx0aWYgKGV2ZW50LnJlcXVlc3QuY2FjaGUgPT09ICdvbmx5LWlmLWNhY2hlZCcpIHJldHVybjtcblxuXHQvLyBmb3IgZXZlcnl0aGluZyBlbHNlLCB0cnkgdGhlIG5ldHdvcmsgZmlyc3QsIGZhbGxpbmcgYmFjayB0b1xuXHQvLyBjYWNoZSBpZiB0aGUgdXNlciBpcyBvZmZsaW5lLiAoSWYgdGhlIHBhZ2VzIG5ldmVyIGNoYW5nZSwgeW91XG5cdC8vIG1pZ2h0IHByZWZlciBhIGNhY2hlLWZpcnN0IGFwcHJvYWNoIHRvIGEgbmV0d29yay1maXJzdCBvbmUuKVxuXHRldmVudC5yZXNwb25kV2l0aChcblx0XHRjYWNoZXNcblx0XHRcdC5vcGVuKGBvZmZsaW5lJHt0aW1lc3RhbXB9YClcblx0XHRcdC50aGVuKGFzeW5jIGNhY2hlID0+IHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGV2ZW50LnJlcXVlc3QpO1xuXHRcdFx0XHRcdGNhY2hlLnB1dChldmVudC5yZXF1ZXN0LCByZXNwb25zZS5jbG9uZSgpKTtcblx0XHRcdFx0XHRyZXR1cm4gcmVzcG9uc2U7XG5cdFx0XHRcdH0gY2F0Y2ggKGVycikge1xuXHRcdFx0XHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgY2FjaGUubWF0Y2goZXZlbnQucmVxdWVzdCk7XG5cdFx0XHRcdFx0aWYgKHJlc3BvbnNlKSByZXR1cm4gcmVzcG9uc2U7XG5cblx0XHRcdFx0XHR0aHJvdyBlcnI7XG5cdFx0XHRcdH1cblx0XHRcdH0pXG5cdCk7XG59KTtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Q0FBQTtBQUNBLENBQU8sTUFBTSxTQUFTLEdBQUcsYUFBYSxDQUFDOztBQUV2QyxDQUFPLE1BQU0sS0FBSyxHQUFHO0NBQ3JCLENBQUMsMkJBQTJCO0NBQzVCLENBQUMsa0JBQWtCO0NBQ25CLENBQUMsdUNBQXVDO0NBQ3hDLENBQUMsdUNBQXVDO0NBQ3hDLENBQUMsb0NBQW9DO0NBQ3JDLENBQUMsNkNBQTZDO0NBQzlDLENBQUMsMkNBQTJDO0NBQzVDLENBQUMscUNBQXFDO0NBQ3RDLENBQUMsaUNBQWlDO0NBQ2xDLENBQUMsc0RBQXNEO0NBQ3ZELENBQUMsMERBQTBEO0NBQzNELENBQUMsaUNBQWlDO0NBQ2xDLENBQUMsb0NBQW9DO0NBQ3JDLENBQUMsNENBQTRDO0NBQzdDLENBQUMsc0NBQXNDO0NBQ3ZDLENBQUMsbUNBQW1DO0NBQ3BDLENBQUMsbUNBQW1DO0NBQ3BDLENBQUMseUNBQXlDO0NBQzFDLENB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
