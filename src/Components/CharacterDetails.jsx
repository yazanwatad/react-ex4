import React from "react";
import { useParams } from "react-router-dom";
import { characters } from "../data/data";

export default function CharacterDetails() {
    
  const { id } = useParams(); 

  const character = characters.find((char) => char.id === Number(id)); 

  if (!character) {
    return (
      <div>
        <h2>Character Not Found</h2>
        <button onClick={() => window.history.back()}>Back</button>
      </div>
    );
  }

  const sideColor =
    character.side === "Dark"
      ? { color: "red" }
      : character.side === "Light"
      ? { color: "blue" }
      : {};

  return (
    <div>
      <h2 style={sideColor}>{character.name}</h2>
      <p>Role: {character.role}</p>
      <p style={sideColor}>Side: {character.side}</p>
      <button onClick={() => window.history.back()}>Back</button>
    </div>
  );
}
