import Koa from 'koa'
import koaStatic from 'koa-static';
import cors from 'koa-cors'
import reactSsr from './middlewares/react-ssr'

const app = new Koa();

app.use(cors());
app.use(koaStatic('./dist/static'));

app.use(reactSsr);

app.listen(3000, () => console.log('server is running at port 3000'));