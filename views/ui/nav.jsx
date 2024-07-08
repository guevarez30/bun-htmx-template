export default function Navigation () {
  return (
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
  )
}
