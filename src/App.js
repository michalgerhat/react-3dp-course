import React from "react";
import "./App.css";
import Title from "./modules/Title/Title";
import Player from "./modules/Player/Player";
import ChapterList from "./modules/Chapters/ChapterList";
import Footer from "./modules/Footer/Footer";
import { PlayerProvider } from "./modules/Player/PlayerContext";

function App() {
  return (
    <div className="App">
      <PlayerProvider>
        <Title />
        <Player />
        <ChapterList />
        <Footer />
      </PlayerProvider>
    </div>
  );
}

export default App;
