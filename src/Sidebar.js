import React from 'react';

function Sidebar() {
  return (
    <aside style={styles.sidebar}>
      <div>Home</div>
      <div>Trending</div>
      <div>Subscriptions</div>
      <div>Library</div>
      <div>History</div>
    </aside>
  );
}

const styles = {
  sidebar: {
    width: '200px',
    padding: '10px',
    backgroundColor: '#f9f9f9',
    height: '100vh',
    boxSizing: 'border-box',
  },
};

export default Sidebar;
