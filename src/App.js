
import './App.css';
import {BrowserRouter} from 'react-router-dom'
import Header from'./mycomponents/header';
import Mid from './mycomponents/mid';
//import Home from './mycomponents/home';
import Footer from './mycomponents/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './mycomponents/home';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Header></Header>
      <Mid> 
        {/* <label> Hello world</label> */}
      </Mid>
      <Home></Home>
      
      </BrowserRouter>
      <Footer></Footer>
    </div>
    
  );
}

export default App;
