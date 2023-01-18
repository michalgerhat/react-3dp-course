import React from 'react';

export default function ChapterTile({ title, image }) {
  return (
    <div className="chapter-tile-container">
      <div className="chapter-tile-background" style={{backgroundImage: `url(${image})`}} />
      <div className="chapter-tile">
        <div className="chapter-label">
          <h2>{title}</h2>
        </div>
      </div>
    </div>
  );
}