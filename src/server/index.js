import Koa from 'koa'
import koaStatic from 'koa-static';
import favicon from 'koa-favicon'
import reactSsr from './middlewares/react-ssr'

const app = new Koa();

app.use(favicon(__dirname + '../../favicon.ico'))
app.use(koaStatic('./dist/static'));

app.use(reactSsr);

app.listen(3000, () => console.log('server is running at port 3000'));