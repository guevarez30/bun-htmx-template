import Foo from './ui'

let fooCounter = 0
async function FooController (req) {
  fooCounter += 1
  return <Foo data={fooCounter} />
}

export default FooController
