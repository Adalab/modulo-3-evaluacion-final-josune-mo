import { useEffect, useState } from "react";
import { Routes, Route } from "react-router";
import Header from "./components/layout/Header";
import Filters from "./components/filters/Filters";
import CharacterList from "./components/characters/CharacterList";
import CharacterCard from "./components/characters/CharacterCard";
import CharacterDetail from "./components/characters/CharacterDetail";
import "./styles/App.scss";

function App() {
  return (
    <div className="page">
      <Header />
      <Routes>
        <Route
          index
          element={
            <>
              <Filters />
              <CharacterList />
              <CharacterCard />{" "}
            </>
          }
        />
        <Route path="/detail" element={<CharacterDetail />} />
      </Routes>
    </div>
  );
}

export default App;
