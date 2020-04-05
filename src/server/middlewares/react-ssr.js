import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter, Switch, Route } from "react-router-dom";
import { matchRoutes, renderRoutes } from "react-router-config";
import { Provider, connect } from "react-redux";
import routes from "../../client/router";
import { getStore } from "../../client/store";

export default async (ctx, next) => {
	console.log('ctx.cookie', ctx)
	const store = getStore(ctx);

	const promises = [];

	const matchedRoutes = matchRoutes(routes, ctx.url);

	matchedRoutes.forEach(item => {
		if (item.route.loadData) {
			promises.push(item.route.loadData(store));
		}
	});

	await Promise.all(promises);
	console.log("server store", store.getState());
	const content = renderToString(
		<Provider store={store}>
			<StaticRouter location={ctx.url} context={{}}>
				<Switch>
					{renderRoutes(routes)}
				</Switch>
			</StaticRouter>
		</Provider>
	);

	console.log("content", content);
	ctx.body = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
           <meta charset="UTF-8">
           <meta name="viewport" content="width=device-width, initial-scale=1.0">
           <title>z-ssr</title>
        </head>
        <body>
           <div id="root">${content}</div>
		   <script>window.__initialData=${JSON.stringify(store.getState())}</script>
		   <script type="text/javascript" src="//localhost:9000/index.js"></script>
		   
        </body>
        </html>
        `;

	await next();
};
