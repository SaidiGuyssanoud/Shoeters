import React from "react";
import NavBar from "./components/navbar/NavBar";
import Accueil from "./components/Accueil/Accueil";
import Shoes from "./components/Accueil/Shoes";





function App() {
  return (
    <div>
      <NavBar />
      <Accueil />
      <main>
        <Shoes />
      </main>

    </div>
  );
}

export default App;
