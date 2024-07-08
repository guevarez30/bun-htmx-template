export default function Layout ({ children }) {
  return (
    <html>
      <head>
        <title>App</title>
        <link href='/public/style.css' rel='stylesheet' />
        <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css' />
        <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css' />
        <script src='https://unpkg.com/htmx.org@1.9.9' />
        <script src='https://cdn.jsdelivr.net/npm/flatpickr' />
      </head>
      <main className='flex flex-col bg-base-100'>
        <div id='popup' />
        {children}
      </main>
    </html>
  )
}
