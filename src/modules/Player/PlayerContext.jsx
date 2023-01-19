import React, { useState, useContext, createContext } from "react";
import { playlist } from "./playlist";

const defaultValues = {
  showPlayer: false,
  playlist: playlist,
};

const PlayerContext = createContext(defaultValues);

export const usePlayer = () => useContext(PlayerContext);

export const PlayerProvider = ({ children }) => {
  const [showPlayer, setShowPlayer] = useState(false);
  const [activeVideo, setActiveVideo] = useState(null);

  const togglePlayer = () => {
    const player = document.querySelector(".player-container");
    player.scrollIntoView({ behavior: "smooth", inline: "start" });
    setShowPlayer(!showPlayer);
  };

  const changeVideo = (video) => {
    const player = document.querySelector(".player-container");
    const playerVideo = document.querySelector(".player-video");
    playerVideo && playerVideo.pause();
    setActiveVideo(null);
    setActiveVideo(video);
    player && player.scrollIntoView({ behavior: "smooth", inline: "start" });
    setShowPlayer(!true);
    playerVideo && playerVideo.load();
    playerVideo && playerVideo.play();
  };

  return (
    <PlayerContext.Provider
      value={{
        showPlayer,
        setShowPlayer,
        togglePlayer,
        activeVideo,
        setActiveVideo,
        changeVideo,
        playlist,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};
