import { Elysia } from 'elysia'
import { html } from '@elysiajs/html'

import Layout from "./views/ui/layout"
import Page from "./views/ui/page"

import NoopController from "./views/controllers/noop"
import BarController from "./views/controllers/bar"
import BazzController from "./views/controllers/bazz"
import FooController from "./views/controllers/foo"
import LoginController from './views/controllers/login'

const port = process.env.PORT ?? 3000

try{
	new Elysia()
    	.use(html())
    	.get('/ping', () => Response('pong'))
    	.get('/public/style.css', () => Bun.file('public/style.css'))
    	.get('/', () => (
    		<Layout>
    		 <Page/>
    		</Layout>
    	))
    	.get('/login', LoginController)
    	.get('/foo', FooController)
    	.get('/bar', BarController)
    	.get('/bazz', BazzController)
		.get('/noop', () =>  NoopController)
    	.listen(port)
}catch(err){
	console.error(err)
}

console.log("App started on port: ",port)
