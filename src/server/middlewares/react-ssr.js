import React from 'react'
import {
    renderToString
} from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import routes from '../../client/router'

const renderHtml = (ctx) => {

    const content = renderToString(
        <StaticRouter location={ctx.url} context={{}}>
            {routes}
        </StaticRouter>
    )

    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>z-ssr</title>
    </head>
    <body>
       <div id="root">${content}</div>
       <script type="text/javascript" src="//localhost:9000/index.js"></script>
    </body>
    </html>
    `
}

export default async (ctx, next)=> {
    ctx.body = renderHtml(ctx)
}