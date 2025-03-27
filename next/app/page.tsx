export default function Home() {
  return (
    <main style={{
      padding: '0',
      backgroundColor: '#f9fafb'
    }}>
      {/* Hero Section */}
      <section style={{
        backgroundColor: '#1f2937',
        color: 'white',
        padding: '4rem 1rem',
        textAlign: 'center'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <h1 style={{ 
            fontSize: '3rem', 
            fontWeight: 'bold',
            marginBottom: '1rem'
          }}>
            Welcome to Our E-Commerce Store
          </h1>
          
          <p style={{ 
            fontSize: '1.25rem',
            marginBottom: '2rem',
            color: '#d1d5db',
            maxWidth: '800px',
            margin: '0 auto 2rem'
          }}>
            Discover amazing products for your lifestyle at unbeatable prices. Shop with confidence with our 30-day money-back guarantee.
          </p>
          
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
            marginBottom: '2rem',
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
              backgroundColor: 'transparent',
              color: 'white',
              padding: '0.75rem 1.5rem',
              borderRadius: '0.375rem',
              fontWeight: 'bold',
              border: '1px solid white',
              cursor: 'pointer'
            }}>
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section style={{
        padding: '4rem 1rem',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <h2 style={{
          fontSize: '2rem',
          fontWeight: 'bold',
          marginBottom: '2rem',
          textAlign: 'center'
        }}>
          Shop by Category
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem'
        }}>
          {['Electronics', 'Clothing', 'Home & Kitchen', 'Books'].map((category) => (
            <div key={category} style={{
              backgroundColor: 'white',
              borderRadius: '0.5rem',
              overflow: 'hidden',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              cursor: 'pointer',
              textAlign: 'center',
              transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
              padding: '2rem 1rem'
            }}>
              <h3 style={{ 
                fontSize: '1.5rem', 
                fontWeight: 'bold',
                marginBottom: '0.5rem'
              }}>
                {category}
              </h3>
              <p style={{
                color: '#6b7280',
                marginBottom: '1rem'
              }}>
                Explore our {category.toLowerCase()} collection
              </p>
              <button style={{
                backgroundColor: '#f3f4f6',
                color: '#1f2937',
                padding: '0.5rem 1rem',
                borderRadius: '0.375rem',
                fontWeight: 'bold',
                border: 'none',
                cursor: 'pointer'
              }}>
                View Products
              </button>
            </div>
          ))}
        </div>
      </section>
      
      {/* Featured Products Section */}
      <section style={{
        padding: '4rem 1rem',
        maxWidth: '1200px',
        margin: '0 auto',
        backgroundColor: 'white'
      }}>
        <h2 style={{
          fontSize: '2rem',
          fontWeight: 'bold',
          marginBottom: '2rem',
          textAlign: 'center'
        }}>
          Featured Products
        </h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
          gap: '2rem'
        }}>
          {[
            {id: 1, name: 'Premium Headphones', price: 129.99, discount: true},
            {id: 2, name: 'Smart Watch', price: 199.99, discount: false},
            {id: 3, name: 'Wireless Charger', price: 49.99, discount: true},
            {id: 4, name: 'Bluetooth Speaker', price: 89.99, discount: false}
          ].map((product) => (
            <div key={product.id} style={{
              backgroundColor: 'white',
              borderRadius: '0.5rem',
              overflow: 'hidden',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.2s',
              cursor: 'pointer',
              border: '1px solid #e5e7eb'
            }}>
              <div style={{
                height: '200px',
                backgroundColor: '#f3f4f6',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {product.discount && (
                  <div style={{
                    position: 'absolute',
                    top: '10px',
                    left: '10px',
                    backgroundColor: '#ef4444',
                    color: 'white',
                    padding: '0.25rem 0.5rem',
                    borderRadius: '0.25rem',
                    fontSize: '0.75rem',
                    fontWeight: 'bold'
                  }}>
                    SALE
                  </div>
                )}
                <div style={{
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
                  {product.name}
                </h3>
                <p style={{ 
                  color: '#6b7280',
                  marginBottom: '1rem'
                }}>
                  High-quality product with amazing features.
                </p>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <p style={{ 
                    fontWeight: 'bold',
                    color: '#1f2937',
                    fontSize: '1.25rem'
                  }}>
                    ${product.price.toFixed(2)}
                  </p>
                  <button style={{
                    backgroundColor: '#3b82f6',
                    color: 'white',
                    padding: '0.5rem 0.75rem',
                    borderRadius: '0.375rem',
                    fontWeight: 'bold',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '0.875rem'
                  }}>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div style={{
          textAlign: 'center',
          marginTop: '3rem'
        }}>
          <button style={{
            backgroundColor: 'transparent',
            color: '#3b82f6',
            padding: '0.75rem 1.5rem',
            borderRadius: '0.375rem',
            fontWeight: 'bold',
            border: '1px solid #3b82f6',
            cursor: 'pointer'
          }}>
            View All Products
          </button>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section style={{
        padding: '4rem 1rem',
        backgroundColor: '#f3f4f6'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <h2 style={{
            fontSize: '2rem',
            fontWeight: 'bold',
            marginBottom: '2rem',
            textAlign: 'center'
          }}>
            What Our Customers Say
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            {[
              {name: 'Sarah Johnson', role: 'Verified Buyer'},
              {name: 'Michael Brown', role: 'Verified Buyer'},
              {name: 'Emily Davis', role: 'Verified Buyer'}
            ].map((testimonial, index) => (
              <div key={index} style={{
                backgroundColor: 'white',
                borderRadius: '0.5rem',
                padding: '2rem',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
              }}>
                <div style={{
                  color: '#f59e0b',
                  display: 'flex',
                  gap: '0.25rem',
                  marginBottom: '1rem'
                }}>
                  {'★★★★★'}
                </div>
                <p style={{
                  color: '#4b5563',
                  marginBottom: '1.5rem',
                  lineHeight: 1.6
                }}>
                  "The quality of products and service provided by this store is exceptional. I've been a loyal customer for years and have never been disappointed."
                </p>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem'
                }}>
                  <div style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    backgroundColor: '#e5e7eb',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#9ca3af'
                  }}>
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p style={{
                      fontWeight: 'bold',
                      color: '#1f2937'
                    }}>
                      {testimonial.name}
                    </p>
                    <p style={{
                      color: '#6b7280',
                      fontSize: '0.875rem'
                    }}>
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}