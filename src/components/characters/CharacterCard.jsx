import { Link } from "react-router";
import defaultImage from "/harry-potter.png";

function CharacterCard({ pcharacter }) {
  const image = pcharacter.image === "" ? defaultImage : pcharacter.image;

  return (
    <Link to={`/detail/${pcharacter.id}`}>
      <li className="character__card">
        <img src={image} alt={pcharacter.name} className="character__image" />
        <p className="character__name">
          <label className="character__label"></label> {pcharacter.name}
        </p>
        <p className="character__species">
          <label className="character__label"></label>
          {pcharacter.species}
        </p>
      </li>
    </Link>
  );
}

export default CharacterCard;
