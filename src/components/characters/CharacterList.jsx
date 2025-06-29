import CharacterCard from "./CharacterCard";
import PropTypes from "prop-types";

function CharacterList({ pcharactersList, psearchName }) {
  if (pcharactersList.length === 0) {
    return (
      <main>
        <p className="character__notfound">
          No hay ningún personaje que coincida con la palabra {psearchName}
        </p>
      </main>
    );
  }
  return (
    <main>
      <ul className="character__list">
        {pcharactersList.map((character, index) => (
          <CharacterCard key={index} pcharacter={character} />
        ))}
      </ul>
    </main>
  );
}

CharacterList.propTypes = {
  psearchName: PropTypes.string.isRequired,
};

export default CharacterList;
