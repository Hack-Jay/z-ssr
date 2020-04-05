import Koa from "koa";
import koaStatic from "koa-static";
import favicon from "koa-favicon";
import proxy from "koa2-proxy-middleware";
import reactSsr from "./middlewares/react-ssr";
const app = new Koa();

const options = {
	targets: {
		"/api/(.*)": {
			target: "https://player.soundario.com/",
			changeOrigin: true,
			// pathRewrite: {
			// 	"/api": "/mPassenger/ee", // rewrite path
			// },
		},
	},
};

app.use(favicon(__dirname + "../../favicon.ico"));
app.use(koaStatic("./dist/static"));

app.use(proxy(options));
app.use(async (ctx, next) => {
	const start = Date.now();
	console.log(1);
	await next();
	const ms = Date.now() - start;
	console.log(2, ms);
	ctx.set("X-Response-Time", `${ms}ms`);
});

app.use(reactSsr);

app.listen(3000, () => console.log("server is running at port 3000"));
