
import { useState } from "react";
import './Accor.css'
import { useFavorites } from "./Fav";

const AccordionItem = ({ item }) => {
  
  const { favorites } = useFavorites();
  const isFav = favorites.some((f) => f.id === item.id);
  const [activeId, setActiveId] = useState(null);
  const { toggleFavorite } = useFavorites();
  

  return (
    <div>
  <div
  className={`accordion ${
    activeId === item.id ? "active" : ""
  }`}
>
  <div className="accordion-item">
   <button className="buton">
    <h3
      className="accordion-header"
      onClick={() =>
        setActiveId(activeId === item.id ? null : item.id)
      }
    >
      {item.content}
    </h3>
    </button>

<button
      className="right"
      onClick={(e) => {
        e.stopPropagation(); // IMPORTANT
        toggleFavorite(item);
      }}
    >
      {isFav ? "" : ""}
    </button> 
    
    
  </div>

  {activeId === item.id && (
    <div className="accordion-content">
      <p>{item.name}</p>
    </div>
  )}
</div>
</div>

  )
};

export default AccordionItem;
