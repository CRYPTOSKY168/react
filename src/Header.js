import React from 'react';

function Header() {
  return (
    <header style={styles.header}>
      <div style={styles.logo}>YouTube</div>
      <input type="text" placeholder="Search" style={styles.searchBox} />
      <button style={styles.searchButton}>🔍</button>
    </header>
  );
}

const styles = {
  header: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px',
    backgroundColor: '#282828',
    color: 'white',
  },
  logo: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginRight: '20px',
  },
  searchBox: {
    flex: 1,
    padding: '8px',
    borderRadius: '2px',
    border: 'none',
  },
  searchButton: {
    padding: '8px',
    marginLeft: '10px',
    backgroundColor: '#555',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
  },
};

export default Header;
