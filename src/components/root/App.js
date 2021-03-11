/* Annova Software

File:App.js

Contents: oluşturulan navbar mimarisi  ve dashboard ana sayfaya çağrıldı

History: 11.03.2021 FatihK
*/ 
import {Container} from "reactstrap";
import Navi from "../navi/Navi";
import Dashboard from "./Dashboard";

function App() {
  return (
    
      <Container>
        <Navi/>
        <Dashboard/>
      </Container>
    
  );
}

export default App;
