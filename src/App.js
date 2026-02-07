import { BrowserRouter, Routes, Route } from "react-router-dom";
import Favorites from "./body/FAV/Favs";
import About from "./body/navbar/About";
import Navv from "./body/navbar/Navv";
import Name from "./lib/Name";
import Ngemi from "./NGemi/Ngemi";
import Email from "./lib/Email";

const App = () => {
  return (
<div>


      <BrowserRouter>
        
   
        <Routes>
      
        <Route path="/123" element={<Name/>} />
        <Route path="/email" element={<Email />} />
        <Route path="/" element={<Navv />} />
          <Route path="/favorites" element={<Favorites />} />
        <Route path="/about" element={<About />} />
         <Route path="/ngemi" element={<Ngemi />} />
          <Route path="/navv" element={<Navv />} />
        
      
        </Routes>
    </BrowserRouter>
</div>    
  );
};

export default App;
