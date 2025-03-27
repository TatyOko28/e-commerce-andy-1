export default function Home() {
  return (
    <main style={{
      display: 'flex',
      minHeight: '100vh',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '24px'
    }}>
      <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>E-Commerce Shop</h1>
      <p style={{ marginTop: '1rem', fontSize: '1.25rem' }}>Welcome to our online store!</p>
    </main>
  )
}