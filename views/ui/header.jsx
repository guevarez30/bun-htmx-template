export default function Header () {
  return (
    <div className='navbar bg-base-100'>
      <div className='flex-none'>
        <label for='my-drawer-2' class='btn btn-square btn-ghost drawer-button lg:hidden'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            className='inline-block h-5 w-5 stroke-current'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </label>
      </div>
      <div className='flex-1'>
        <a
          className='btn btn-ghost text-xl'
          hx-get='/dashboard'
          hx-trigger='click'
          hx-target='#content'
          hx-swap='innerHTML'
        >DaisyUI
        </a>
      </div>
      <div className='flex-none dropdown dropdown-end'>
        <div tabindex='0' role='button' className='btn btn-square btn-ghost'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            className='inline-block h-5 w-5 stroke-current'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z'
            />
          </svg>
        </div>
        <ul tabindex='0' class='dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow'>
          <li><a>Item 1</a></li>
          <li><a>Item 2</a></li>
        </ul>
      </div>
    </div>
  )
}
