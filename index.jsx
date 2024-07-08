import { Elysia } from 'elysia'
import { html } from '@elysiajs/html'

import Layout from "./views/ui/layout"
import Page from "./views/ui/page"

import NoopController from "./views/pages/noop"
import BarController from "./views/pages/bar/controller"
import BazzController from "./views/pages/bazz/controller"
import FooController from "./views/pages/foo/controller"
import LoginController from './views/pages/login/controller'
import DashboardController from './views/pages/dashboard/controller'

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
		.get('/noop',  NoopController)
		.get('/dashboard', DashboardController)
    	.listen(port)
}catch(err){
	console.error(err)
}

console.log("App started on port: ",port)
