import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'E-Commerce Store',
  description: 'E-Commerce store built with Next.js and Sanity',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body style={{ 
        margin: 0, 
        padding: 0, 
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
        backgroundColor: '#f9fafb',
        color: '#1f2937'
      }}>
        <header style={{
          padding: '1rem',
          backgroundColor: 'white',
          borderBottom: '1px solid #e5e7eb',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div style={{ 
            fontWeight: 'bold', 
            fontSize: '1.5rem',
            color: '#3b82f6'
          }}>
            ECom Store
          </div>
          <nav>
            <ul style={{
              display: 'flex',
              listStyle: 'none',
              gap: '1.5rem',
              margin: 0,
              padding: 0
            }}>
              <li><a href="#" style={{ color: '#1f2937', textDecoration: 'none' }}>Home</a></li>
              <li><a href="#" style={{ color: '#1f2937', textDecoration: 'none' }}>Products</a></li>
              <li><a href="#" style={{ color: '#1f2937', textDecoration: 'none' }}>Categories</a></li>
              <li><a href="#" style={{ color: '#1f2937', textDecoration: 'none' }}>About</a></li>
              <li><a href="#" style={{ color: '#1f2937', textDecoration: 'none' }}>Contact</a></li>
            </ul>
          </nav>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem'
          }}>
            <button style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: '#4b5563',
              fontSize: '1rem'
            }}>
              Search
            </button>
            <button style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: '#4b5563',
              fontSize: '1rem',
              position: 'relative'
            }}>
              Cart
              <span style={{
                position: 'absolute',
                top: '-8px',
                right: '-8px',
                backgroundColor: '#3b82f6',
                color: 'white',
                borderRadius: '50%',
                width: '18px',
                height: '18px',
                fontSize: '0.75rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>0</span>
            </button>
          </div>
        </header>
        
        <div>{children}</div>
        
        <footer style={{
          backgroundColor: '#1f2937',
          color: 'white',
          padding: '2rem',
          marginTop: '3rem'
        }}>
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem'
          }}>
            <div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>ECom Store</h3>
              <p style={{ color: '#9ca3af', lineHeight: 1.6 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Links</h3>
              <ul style={{ 
                listStyle: 'none', 
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem'
              }}>
                <li><a href="#" style={{ color: '#9ca3af', textDecoration: 'none' }}>Home</a></li>
                <li><a href="#" style={{ color: '#9ca3af', textDecoration: 'none' }}>Products</a></li>
                <li><a href="#" style={{ color: '#9ca3af', textDecoration: 'none' }}>Categories</a></li>
                <li><a href="#" style={{ color: '#9ca3af', textDecoration: 'none' }}>About</a></li>
                <li><a href="#" style={{ color: '#9ca3af', textDecoration: 'none' }}>Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Contact</h3>
              <p style={{ color: '#9ca3af', marginBottom: '0.5rem' }}>123 Street Name, City</p>
              <p style={{ color: '#9ca3af', marginBottom: '0.5rem' }}>info@example.com</p>
              <p style={{ color: '#9ca3af', marginBottom: '0.5rem' }}>+1 234 567 890</p>
            </div>
          </div>
          <div style={{
            borderTop: '1px solid #374151',
            marginTop: '2rem',
            paddingTop: '1rem',
            textAlign: 'center',
            color: '#9ca3af'
          }}>
            © {new Date().getFullYear()} ECom Store. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  )
}