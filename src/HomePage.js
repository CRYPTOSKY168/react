import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import VideoGrid from './VideoGrid';

function HomePage() {
  return (
    <div>
      <Header />
      <div style={styles.container}>
        <Sidebar />
        <VideoGrid />
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
  },
};

export default HomePage;
