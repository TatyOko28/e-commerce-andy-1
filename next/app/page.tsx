import Image from 'next/image';

export default function Home() {
  return (
    <main style={{
      display: 'flex',
      minHeight: '100vh',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '24px',
      backgroundColor: '#f9fafb'
    }}>
      <div style={{
        maxWidth: '1200px',
        width: '100%',
        textAlign: 'center'
      }}>
        <h1 style={{ 
          fontSize: '3rem', 
          fontWeight: 'bold',
          marginBottom: '1rem',
          color: '#1f2937'
        }}>
          Welcome to Our E-Commerce Store
        </h1>
        
        <p style={{ 
          fontSize: '1.25rem',
          marginBottom: '2rem',
          color: '#4b5563'
        }}>
          Discover amazing products for your lifestyle
        </p>
        
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '1rem',
          marginBottom: '3rem',
          flexWrap: 'wrap'
        }}>
          <button style={{
            backgroundColor: '#3b82f6',
            color: 'white',
            padding: '0.75rem 1.5rem',
            borderRadius: '0.375rem',
            fontWeight: 'bold',
            border: 'none',
            cursor: 'pointer'
          }}>
            Shop Now
          </button>
          
          <button style={{
            backgroundColor: 'white',
            color: '#3b82f6',
            padding: '0.75rem 1.5rem',
            borderRadius: '0.375rem',
            fontWeight: 'bold',
            border: '1px solid #3b82f6',
            cursor: 'pointer'
          }}>
            Learn More
          </button>
        </div>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
          gap: '2rem',
          marginTop: '2rem'
        }}>
          {[1, 2, 3, 4].map((item) => (
            <div key={item} style={{
              backgroundColor: 'white',
              borderRadius: '0.5rem',
              overflow: 'hidden',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.2s',
              cursor: 'pointer'
            }}>
              <div style={{
                height: '200px',
                backgroundColor: '#e5e7eb',
                position: 'relative'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  color: '#9ca3af',
                  fontSize: '1rem'
                }}>
                  Product Image
                </div>
              </div>
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{ 
                  fontSize: '1.25rem', 
                  fontWeight: 'bold',
                  marginBottom: '0.5rem',
                  color: '#1f2937'
                }}>
                  Product {item}
                </h3>
                <p style={{ 
                  color: '#6b7280',
                  marginBottom: '1rem'
                }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <p style={{ 
                  fontWeight: 'bold',
                  color: '#1f2937',
                  fontSize: '1.25rem'
                }}>
                  ${(item * 19.99).toFixed(2)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}