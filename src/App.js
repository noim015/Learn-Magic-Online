import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Row } from 'react-bootstrap';
import Header from './Components/Header/Header';
import Body from './Components/Body/Body';

function App() {
  return (
    <div className="App">
      <Header></Header> 
      <Body></Body>  
    </div>
  );
}

export default App;
