import React from "react";
import "./Pokecard.css";

const Pokecard = (props) => {
  const pokeLink = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`;
  return (
    <div className="Pokecard">
      <h3 style={{ color: "blue", fontSize: "20px", fontWeight: "bold" }}>
        {props.name}
      </h3>
      <img width="200px" height="200px" src={pokeLink} />
      <p>Type: {props.type}</p>
      <p> EXP: {props.base_experience}</p>
    </div>
  );
};

export default Pokecard;
