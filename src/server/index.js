import Koa from 'koa'
import React from 'react'
import {
    renderToString
} from 'react-dom/server'
import koaStatic from 'koa-static';
import cors from 'koa-cors'
import Home from '../client/page/Home'

const app = new Koa();

// app.use(cors());
app.use(koaStatic('./dist/static'));

const content = renderToString( < Home /> )
console.log('reload', content)
const htmlTemplete = `
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

app.use(async ctx => {
    ctx.body = htmlTemplete;
});

app.listen(3000, () => console.log('server is running at port 3000'));