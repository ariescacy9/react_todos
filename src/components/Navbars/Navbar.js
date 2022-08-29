
import './Navbar.css';
import Burgerbutton from "./Burgerbutton";
import  { Route }  from 'wouter';
import Cards from '../ApiCurses/Cards';
import ShowBox from '../Callback/ShowBox';
import Contact from '../Contact/Contact';
import Home from '../Home/Home';

function Navbar() {

  return(
    <div>
      <header>
      <h3>logo</h3>
      <nav>
        <a href="/">Home</a>
        <a href="/Curses">Curses</a>
        <a href="/Boxs">Boxs</a>
        <a href="/Contact">Contact</a>
      </nav>
      <Burgerbutton />
    </header>
    <Route path="/" component={Home}/>
    <Route path="/Curses" component={Cards}/>
    <Route path="/Boxs" component={ShowBox}/>
    <Route path="/Contact" component={Contact}/>
    </div>
  );
}

export default Navbar;