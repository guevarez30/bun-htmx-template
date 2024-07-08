import Layout from '../../ui/layout'
import Page from '../../ui/page'
import Login from './ui'

export async function LoginForm ({ body, set, jwt, cookie: { auth }}) {
	if(body.email == 'mail@mail.com'){
		console.log(body.email)
        auth.set({
            value: await jwt.sign(body.email),
            httpOnly: true,
            maxAge: 86400,
        })

  		return new Response(null, {
  		  status: 204,
  		  statusText: 'No Content',
  		  headers: {
  		    'HX-Redirect': '/',
  		  },
  		})
	}

	set.status = 401
	return "Unauthorized"
}

export function LoginPage () {
  return (
    <Layout>
      <Login />
    </Layout>
  )
}
