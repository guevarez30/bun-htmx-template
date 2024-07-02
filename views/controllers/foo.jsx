import { renderToReadableStream } from 'react-dom/server'

let fooCounter = 0;
function Foo ({data}) {
  return (<>{data}</>)
}

async function FooController (req) {
  console.log(req)
  fooCounter+=1;
  return <Foo data={fooCounter}/>
}


export default FooController
