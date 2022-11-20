

import { BrowserRouter, Route,Routes} from 'react-router-dom'
import List from './componentes/List';
import CreateUser from './componentes/CreateUser';
import CreateFecha from './componentes/CreateFecha';
import Navigation from './componentes/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <BrowserRouter>
        <Navigation/>
        
        <Routes>
          <Route path="/" element={<List/>}/>
          <Route path="/edit/:id" element={<CreateFecha/>}/>
          <Route path="/create" element={<CreateFecha/>}/>
          <Route path="/user" element={<CreateUser/>}/>
        </Routes>
        

      </BrowserRouter>
  );
}

export default App;
