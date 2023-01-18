import React from 'react';
import Logo from './Logo';
import TitleArrowDown from './TitleArrowDown';
import './_title.css';

export default function Title() {
  return (
    <div className="title">
      <div className="title-image" />
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
      </div>
      <TitleArrowDown />
    </div>
  );
}