import { useEffect, useState } from "react";
import { Routes, Route } from "react-router";
import Header from "./components/layout/Header";
import Filters from "./components/filters/Filters";
import CharacterList from "./components/characters/CharacterList";
import CharacterDetail from "./components/characters/CharacterDetail";
import "./styles/App.scss";

function App() {
  const [charactersList, setCharactersList] = useState([]);
  const [searchName, setSearchName] = useState("");
  const [filterHouse, setFilterHouse] = useState("Gryffindor");

  useEffect(() => {
    fetch("https://hp-api.onrender.com/api/characters")
      .then((response) => response.json())
      .then((data) => {
        const newData = data.map(character => ({...character, house: character.house === "" ? "Sin casa" : character.house}))
        setCharactersList(newData);
      });
  }, []);

  const houses = [
    ...new Set(charactersList.map((character) => character.house)),
  ];

  const filteredList = charactersList
    .filter((character) =>
      character.name.toLowerCase().includes(searchName.toLowerCase())
    )
    .filter((character) => character.house === filterHouse);

  return (
    <div className="page">
      <Header />
      <Routes>
        <Route
          index
          element={
            <>
              <Filters
                psearchName={searchName}
                psetSearchName={setSearchName}
                phouses={houses}
                pfilterHouse={filterHouse}
                psetFilterHouse={setFilterHouse}
              />
              <CharacterList pcharactersList={filteredList} />
            </>
          }
        />
        <Route path="/detail/:id" element={<CharacterDetail pcharactersList={charactersList}/>} />
      </Routes>
    </div>
  );
}

export default App;
