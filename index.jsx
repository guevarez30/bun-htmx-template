import { Elysia } from 'elysia'
import { html } from '@elysiajs/html'
import {jwt} from '@elysiajs/jwt'

import Layout from "./views/ui/layout"
import Page from "./views/ui/page"

import NoopController from "./views/pages/noop"
import BarController from "./views/pages/bar/controller"
import BazzController from "./views/pages/bazz/controller"
import FooController from "./views/pages/foo/controller"
import {LoginForm, LoginPage} from './views/pages/login/controller'
import DashboardController from './views/pages/dashboard/controller'

const port = process.env.PORT ?? 3000;

const auth = async ({ jwt, cookie: { auth } }) => {
	const profile = await jwt.verify(auth.value)
	console.log(profile)
	if (!profile) {
		return new Response(null, {
		  status: 204,
		  statusText: 'No Content',
		  headers: {
		    'HX-Redirect': '/login',
		  },
		})
	}
}

try{
	new Elysia()
    	.use(html())
        .use(
        	jwt({
        	    name: 'jwt',
        	    secret: 'Fischl von Luftschloss Narfidort'
        	})
        )
    	.get('/ping', () => Response('pong'))
    	.get('/public/style.css', () => Bun.file('public/style.css'))
    	.get('/', async () => {
				return (
    				<Layout>
    				 <Page/>
    				</Layout>
				)
    		}, {
    			beforeHandle: auth
    		}
    	)
    	.get('/login', LoginPage )
        .post('/login', LoginForm )
    	.get('/foo', FooController ,{ beforeHandle:auth })
    	.get('/bar', BarController ,{ beforeHandle:auth })
    	.get('/bazz', BazzController ,{ beforeHandle:auth})
		.get('/noop',  NoopController ,{ beforeHandle:auth})
		.get('/dashboard', DashboardController, {beforeHandle: auth})
    	.listen(port)
}catch(err){
	console.error(err)
}

console.log("App started on port: ",port)
