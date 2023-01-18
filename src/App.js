import React from 'react';
import './App.css';
import Title from './modules/Title/Title';
import ChapterList from './modules/Chapters/ChapterList';
import Footer from './modules/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Title />
      <ChapterList 
        chapters={[
          {title: "Technologie 3D tisku", image: "/img/chapter1.jpg"},
          {title: "Výběr FDM tiskárny", image: "/img/chapter2.jpg"},
          {title: "Výběr filamentu", image: "/img/chapter3.jpeg"},
          {title: "Příslušenství pro\n3D tisk", image: "/img/chapter4.jpg"},
          {title: "Software pro 3D modelování", image: "/img/chapter5.png"},
          {title: "Fusion 360\nskečování", image: "/img/chapter6.webp"},
          {title: "Fusion 360\nextruze", image: "/img/chapter7.jpg"},
          {title: "Fusion 360\núpravy modelu", image: "/img/chapter8.webp"},
          {title: "Fusion 360\nspojování modelů", image: "/img/chapter9.png"},
          {title: "Fusion 360\nexport STL", image: "/img/chapter10.jpg"},
          {title: "Slicer\nnastavení tisku STL", image: "/img/chapter11.png"},
          {title: "Slicer\núpravy modelu", image: "/img/chapter12.jpg"},
          {title: "Slicer\npokročilé funkce", image: "/img/chapter13.webp"},
          {title: "Post-procesování výtisku", image: "/img/chapter14.webp"},
          {title: "Online repozitáře\n3D modelů", image: "/img/chapter15.webp"},
          {title: "Upgrade 3D tiskáren", image: "/img/chapter16.webp"},
          {title: "Octoprint", image: "/img/chapter17.webp"}
        ]}
      />
      <Footer />
    </div>
  );
}

export default App;
