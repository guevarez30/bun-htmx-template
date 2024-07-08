import Header from './header'
import Navigation from './nav'
import Dashboard from '../pages/dashboard/ui'

export default function Page () {
  return (
    <>
      <Header />
      <div class='drawer lg:drawer-open'>
        <input id='my-drawer-2' type='checkbox' class='drawer-toggle' />
        <div id='content' class='drawer-content flex flex-col items-center justify-center'>
          <Dashboard />
        </div>
        <div class='drawer-side'>
          <label for='my-drawer-2' aria-label='close sidebar' class='drawer-overlay' />
          <Navigation />
        </div>
      </div>
    </>
  )
}
