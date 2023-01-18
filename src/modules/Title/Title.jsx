import React from 'react';
import Logo from './Logo';
import TitleArrowDown from './TitleArrowDown';
import './_title.css';

export default function Title() {
  return (
    <div className="title">
      <div className="title-background-overlay" />
      <div className="title-background">
        <video autoPlay="autoplay" muted playsInline loop>
          <source src="/video/3dp_timelapse.webm" type="video/webm" /> 
        </video>
      </div>
      <div className="title-content">
        <div className="title-logo">
          <Logo />
        </div>
        <h1>Interaktivní kurz 3D tisku</h1>
        <h2>
          V tomto kurzu naleznete vše potřebné k tomu, abyste se stali součástí komunity 3D tisku.
          <br />
          Kurz si projdete vlastním tempem, ve vámi zvoleném pořadí a v libovolném čase.
        </h2> 
      <TitleArrowDown />
      </div>
    </div>
  );
}