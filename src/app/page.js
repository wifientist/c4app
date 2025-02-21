import React from 'react';

export default function Home() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      margin: 0,
      padding: 0,
      background: '#f5f5f5'
    }}>
      <h1 style={{
        fontSize: '4rem',
        textAlign: 'center',
        margin: 0,
        padding: '0 20px'
      }}>
        CryptoCoinCoachCollective
      </h1>
      <Link href="/blog">
        <a style={{
          marginTop: '20px',
          fontSize: '1.2rem',
          color: '#0070f3',
          textDecoration: 'none'
        }}>
          Visit our Blog
        </a>
      </Link>
    </div>
  );
}
