import React from 'react';

function VideoGrid() {
  const videos = new Array(12).fill(null); // ตัวอย่าง Array สำหรับวิดีโอ

  return (
    <div style={styles.grid}>
      {videos.map((_, index) => (
        <div key={index} style={styles.videoCard}>
          <div style={styles.thumbnail}></div>
          <div style={styles.info}>
            <h4>Video Title {index + 1}</h4>
            <p>Channel Name</p>
            <p>Views • Time ago</p>
          </div>
        </div>
      ))}
    </div>
  );
}

const styles = {
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
    gap: '16px',
    padding: '20px',
  },
  videoCard: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#fff',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  },
  thumbnail: {
    backgroundColor: '#ddd',
    height: '140px',
  },
  info: {
    padding: '10px',
  },
};

export default VideoGrid;
