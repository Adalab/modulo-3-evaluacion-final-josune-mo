function Filters({
  psearchName,
  psetSearchName,
  phouses,
  pfilterHouse,
  psetFilterHouse,
}) {
  const handleName = (ev) => {
    ev.preventDefault();
    psetSearchName(ev.target.value);
  };

  const handleHouse = (ev) => {
    ev.preventDefault();
    psetFilterHouse(ev.target.value);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  return (
    <form className="form__search" onSubmit={handleSubmit}>
      <label htmlFor="search">Buscar por personaje: </label>
      <input
        id="search"
        className="input__search"
        autoComplete="off"
        type="search"
        name="search"
        placeholder="Escribe su nombre o apellido"
        value={psearchName}
        onChange={handleName}
      />

      <label htmlFor="house">Selecciona la casa: </label>
      <select
        name="house"
        id="house"
        value={pfilterHouse}
        onChange={handleHouse}
      >
        {phouses.map((house, index) => (
          <option key={index} value={house}>
            {" "}
            {house}
          </option>
        ))}
      </select>
    </form>
  );
}

export default Filters;
