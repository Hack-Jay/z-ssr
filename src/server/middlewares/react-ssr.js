import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter, Switch, Route } from "react-router-dom";
import { matchRoutes, renderRoutes } from "react-router-config";
import { Provider, connect } from "react-redux";
import StyleContext from "isomorphic-style-loader/StyleContext";
import routes from "../../client/router";
import { getStore } from "../../client/store";


const renderContent = async (ctx, context) => {
	const css = new Set() // CSS for all rendered React components
	const insertCss = (...styles) => styles.forEach(style => css.add(style._getCss()))
	const store = getStore(ctx);

	const promises = [];

	const matchedRoutes = matchRoutes(routes, ctx.url);

	matchedRoutes.forEach((item) => {
		if (item.route.loadData) {
			const promise = new Promise((resolve, reject) => {
				item.route.loadData(store).then(resolve).catch(resolve);
			});
			promises.push(promise);
		}
	});

	await Promise.all(promises);
	console.log("server store", store.getState());
	const content = renderToString(
		<StyleContext.Provider value={{ insertCss }}>
			<Provider store={store}>
				<StaticRouter location={ctx.url} context={context}>
					<Switch>{renderRoutes(routes)}</Switch>
				</StaticRouter>
			</Provider>
		</StyleContext.Provider>
	);

	return {
		content,
		store,
		css
	};
};

const renderHtml = (ctx, content, store, css) => {
	ctx.body = `
	<!DOCTYPE html>
	<html lang="en">
	<head>
	   <meta charset="UTF-8">
	   <meta name="viewport" content="width=device-width, initial-scale=1.0">
	   <title>z-ssr</title>
	   <style>${[...css].join('')}</style>
	</head>
	<body>
	   <div id="root">${content}</div>
	   <script>window.__initialData=${JSON.stringify(store.getState())}</script>
	   <script type="text/javascript" src="//localhost:9000/index.js"></script>
	   
	</body>
	</html>
	`;
};

export default async (ctx, next) => {
	const context = { name: "z" };
	const { content, store, css } = await renderContent(ctx, context);

	console.log("context", context);
	if (context.url) {
		ctx.status = 301;
		renderHtml(ctx, content, store, css);
	} else if (context.status == 404) {
		ctx.status = 404;
		renderHtml(ctx, content, store, css);
	} else {
		renderHtml(ctx, content, store, css);
	}

	await next();
};
