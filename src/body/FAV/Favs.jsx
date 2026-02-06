import { useState } from "react";
import { useFavorites } from "./Fav";
import Navbar from "../navbar/Navb";

const Favorites = () => {
  const { favorites } = useFavorites();
  const [search] = useState("");

  const filteredFavorites = favorites.filter((item) =>
    item.content.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="fav">
      <Navbar/>
      <h2>RWENDO</h2>

     
      {filteredFavorites.length === 0 ? (
        <p>Hatiri wendete.</p>
      ) : (
        filteredFavorites.map((item) => (
          <div key={item.id} className="favs">
            <h3>{item.content}</h3>
            <p>{item.name}</p>
            
          </div>
        ))
      )}
    </div>
  );
};

export default Favorites;
