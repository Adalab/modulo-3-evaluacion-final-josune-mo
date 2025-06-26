function CharacterCard({ pcharacter }) {
  return (
    <li className="character__card">
        <img src={pcharacter.image} alt={"texto"} className="character__image"/>
      <p className="character__name">
        <label className="character__label">Nombre: </label> {pcharacter.name}
      </p>
            <p className="character__species">
        <label className="character__label">Especie: </label>
        {pcharacter.species}
      
      </p>
    </li>
  );
}

export default CharacterCard;
