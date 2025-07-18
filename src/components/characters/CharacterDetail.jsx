import { useParams } from "react-router";
import defaultImage from "/harry-potter.png";

function CharacterDetail({ pcharactersList }) {
  const params = useParams();
  const id = params.id;
  const character = pcharactersList.find((character) => character.id === id);

  if (!character) {
    return (
      <main>
        <p className="character__notfound">El personaje que buscas no existe</p>
      </main>
    );
  }

  const image = character.image === "" ? defaultImage : character.image;

  return (
    <div className="character__detail-wrapper">
      <li className="character__card">
        <img src={image} alt={"texto"} className="character__image" />

        <p className="character__name">
          <label className="character__label"></label> {character.name}
        </p>

        <p className="character__info">
          <label className="character__label">Estatus: </label>{" "}
          {character.alive ? "Vivo/a ❤️" : "Muerto/a 🖤"}
        </p>

        <p className="character__info">
          <label className="character__label">Especie: </label>
          {character.species}
        </p>

        <p className="character__info">
          <label className="character__label">Género: </label>{" "}
          {character.gender}
        </p>

        <p className="character__info">
          <label className="character__label">Casa: </label> {character.house}
        </p>

        <p className="character__info">
          <label className="character__label">Nombres alternativos: </label>
          {character.alternate_names && character.alternate_names.length > 0
            ? character.alternate_names.join(", ")
            : "No tiene"}
        </p>
      </li>
    </div>
  );
}

export default CharacterDetail;
