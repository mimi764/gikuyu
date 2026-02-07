
import { useState } from "react";
import './Accor.css'
import { useFavorites } from "./Fav";

const AccordionItem = ({ item }) => {
  
  const { favorites } = useFavorites();
  const isFav = favorites.some((f) => f.id === item.id);
  const [activeId, setActiveId] = useState(null);
  const { toggleFavorite } = useFavorites();
  

  return (<div
  className={`accordion ${
    activeId === item.id ? "active" : ""
  }`}
>
  <div className="accordion-item">
    <h3
      className="accordion-header"
      onClick={() =>
        setActiveId(activeId === item.id ? null : item.id)
      }
    >
      {item.content}
    </h3>

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

  )
};

export default AccordionItem;
