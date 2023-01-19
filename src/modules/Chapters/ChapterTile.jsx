import React from "react";
import { usePlayer } from "../../modules/Player/PlayerContext";

export default function ChapterTile({ title, image, video }) {
  const { changeVideo } = usePlayer();

  return (
    <div
      className="chapter-tile-container"
      onClick={() => {
        !!video && changeVideo(video);
      }}
    >
      <div
        className={`chapter-tile-background ${!video &&
          "chapter-tile-background-disabled"}`}
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="chapter-tile">
        <div className="chapter-label">
          <h2>{title}</h2>
        </div>
      </div>
    </div>
  );
}
