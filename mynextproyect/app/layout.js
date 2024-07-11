export const metadata = {
  title: 'Project',
  description: 'Creacion de project',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <nav> 
       <h1>Menu</h1>

       <ul>

          <li>About</li>
          <li>Tienda</li>
       </ul>

      </nav>
      <body>{children}</body>
    </html>
  )
}
