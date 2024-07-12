export default function Navigation() {
  return (
    <div class="bg-base-100  text-base-content min-h-full w-80 p-4">
      <div className="flex-1 sm:hidden lg:flex">
        <a
          className="btn btn-ghost text-xl"
          hx-get="/dashboard"
          hx-trigger="click"
          hx-target="#content"
          hx-swap="innerHTML"
        >
          DaisyUI
        </a>
      </div>

      <div className="flex-1  lg:hidden">
        <label
          for="drawer"
          hx-get="/dashboard"
          hx-trigger="click"
          hx-target="#content"
          hx-swap="innerHTML"
          class="btn btn-square btn-ghost drawer-button lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="inline-block h-5 w-5 stroke-current"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2-2-2m-1 11V9m-5 11V9m-5 11V9"
            />
          </svg>
        </label>
      </div>

      <ul class="menu">
        <li
          hx-get="/foo"
          hx-trigger="click"
          hx-target="#content"
          hx-swap="innerHTML"
        >
          <a>Foo</a>
        </li>
        <li>
          <details close>
            <summary>Bar Bazz</summary>
            <ul>
              <li
                hx-get="/bar"
                hx-trigger="click"
                hx-target="#content"
                hx-swap="innerHTML"
              >
                <a>Bar</a>
              </li>
              <li
                hx-get="/bazz"
                hx-trigger="click"
                hx-target="#content"
                hx-swap="innerHTML"
              >
                <a>Bazz</a>
              </li>
            </ul>
          </details>
        </li>
      </ul>
    </div>
  );
}
