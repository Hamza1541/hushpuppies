import NavBar from "../NavBar/NavBar";
import Cart from "./Cart";
import Fav from "./Fav";
import Items from "./items";
import Route from "../components/Route";
import Home from "./Home";
import Search from "./Search";

function Homapage() {


    return <div >
        <div className="relative"><NavBar /> </div>
  <div className="">
  <Route Path= 'cart'> <Cart /> </Route>
    <Route Path= 'items'> <Items /> </Route>
    <Route Path= 'fav'> <Fav /> </Route>
    <Route Path = 'home'><Home /></Route>
  
    </div>
    </div>
         
}

export default  Homapage;
// // <Route Path = 'search'><Search /></Route>