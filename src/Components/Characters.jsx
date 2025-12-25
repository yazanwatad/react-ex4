import React from "react";
import { characters } from "../data/data";
import { Link } from "react-router-dom";

export default function Characters() {
  return (
    <div>
      <h1>Characters</h1>
      <ul>
        {characters.map((character) => (
          <li key={character.id}>
            <Link
              to={`/characters/${character.id}`}
              style={{ color: "black" }}
            >
              {character.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
