function Filters( { psearchName, psetSearchName, phouses, pfilterHouse, psetFilterHouse }) {

const handleName = (ev) => {
    ev.preventDefault();
    psetSearchName(ev.target.value);

}

const handleHouse = (ev) => {
    ev.preventDefault();
    psetFilterHouse(ev.target.value);
    
}

    return (
        <form className="form__search">
            <label htmlFor="search">Buscar por personaje: </label>
            <input
                className="input__search"
                autoComplete="off"
                type="search"
                name="search"
                placeholder="Indica su nombre o apellido"
                value={psearchName}
                onChange={handleName}
            />

            <label htmlFor="house">Selecciona la casa: </label>
            <select
                name="house" 
                id="house"
                value={pfilterHouse}
                onChange={handleHouse}>
                {phouses.map((house, index) =>
                    <option key={index} value={house}> {house}</option>
                )}
            </select>


        </form>
    )
}

export default Filters; 