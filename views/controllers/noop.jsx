import { renderToReadableStream } from 'react-dom/server'

function Noop () {
  return (<></>)
}

async function NoopController () {
  const stream = await renderToReadableStream(<Noop />)
  return new Response(stream, {
    headers: { 'Content-Type': 'text/html' }
  })
}

export default NoopController
