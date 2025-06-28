import CharacterCard from "./CharacterCard";

function CharacterList({ pcharactersList }) {
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

export default CharacterList;
