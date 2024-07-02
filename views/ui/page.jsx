export default function Page () {
  return (
    <>
      <div id='content' className='fixed top-0 left-0 w-full bg-red-50 h-full'>content </div>
      <div className='w-full flex bottom-0 fixed align-center justify-center pb-10 gap-10'>
        <button
          class='btn btn-neutral'
          hx-get='/foo'
          hx-trigger='click'
          hx-target='#content'
          hx-swap='innerHTML'
        >Foo
        </button>
        <button
          class='btn btn-primary'
          hx-get='/bar'
          hx-trigger='click'
          hx-target='#content'
          hx-swap='innerHTML'
        >Bar
        </button>
        <button
          class='btn btn-secondary'
          hx-get='/bazz'
          hx-trigger='click'
          hx-target='#content'
          hx-swap='innerHTML'
        >Bazz
        </button>
      </div>
    </>
  )
}
