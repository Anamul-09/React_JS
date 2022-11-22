
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Header from './header';
import Sidebar from './sidebar'
import Home from './home';
import Footer from './footer';



function App() {
  return (
    <>

<Header brand="Anam tech" slogan="This is my first website"/>

<div className="container mt-5">
  <div className="row">
    <Sidebar/>
    < Home />
    
  </div>
</div>


< Footer />
      
    
    </>
  );
}

export default App;
