import Header from './header'

export default function Page () {
  return (
    <>
      <Header />
      <div class='drawer lg:drawer-open'>
        <input id='my-drawer-2' type='checkbox' class='drawer-toggle' />
        <div id='content' class='drawer-content flex flex-col items-center justify-center'>
          content
        </div>
        <div class='drawer-side'>
          <label for='my-drawer-2' aria-label='close sidebar' class='drawer-overlay' />
          <ul class='menu bg-base-100 text-base-content min-h-full w-80 p-4'>
            <li
              hx-get='/foo'
              hx-trigger='click'
              hx-target='#content'
              hx-swap='innerHTML'
            ><a>Foo</a>
            </li>
            <li>
              <details close>
                <summary>Bar Bazz</summary>
                <ul>
                  <li
                    hx-get='/bar'
                    hx-trigger='click'
                    hx-target='#content'
                    hx-swap='innerHTML'
                  ><a>Bar</a>
                  </li>
                  <li
                    hx-get='/bazz'
                    hx-trigger='click'
                    hx-target='#content'
                    hx-swap='innerHTML'
                  ><a>Bazz</a>
                  </li>
                </ul>
              </details>
            </li>

          </ul>
        </div>
      </div>
    </>
  )
}
