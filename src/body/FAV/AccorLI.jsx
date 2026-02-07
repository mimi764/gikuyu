import { useState } from "react";
import AccordionItem from "./AccorIT";
import data from "./DATA";
import './Accor.css'

const AccordionList = () => {
  const [search, setSearch] = useState("");

  const filteredData = data.filter((item) =>
    item.content.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="input">
      {/* Search Bar */}
      <input
      id="content"
        type="text"
        className="sach"
        placeholder="Cana thimo..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
       
      />
<p className="p">
  Ngwíhoka wí thaayú, ngehoya angíkorwo no úthimúre thimo, gerera 
   <a href="https://chat.whatsapp.com/JmUBjjzRG0H1h74Zxa7jT5">WhatsApp</a> níguo túkínorane na úgí úyú wa nyene.
</p>
      {/* Accordion Items */}
      {filteredData.length > 0 ? (
        filteredData.map((item) => (
          <AccordionItem key={item.id} item={item} />
        ))
      ) : (
        <p>
          Hatirí, cana kúgerera 
  <a href="https://chat.whatsapp.com/JmUBjjzRG0H1h74Zxa7jT5">WhatsApp</a>.
        </p>
      )}
    </div>
  );
};

export default AccordionList;
