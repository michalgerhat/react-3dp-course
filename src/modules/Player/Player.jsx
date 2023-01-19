import React from "react";
import { usePlayer } from "./PlayerContext";
import "./_player.css";

export default function Player() {
  const { activeVideo } = usePlayer();

  console.log(activeVideo);

  return (
    <div
      className={`player-container ${activeVideo && "player-container-active"}`}
    >
      {activeVideo && (
        <video className="player-video" controls>
          <source src={activeVideo} type="video/mp4" />
        </video>
      )}
    </div>
  );
}
