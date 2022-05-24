import {BrowserRouter} from "react-router-dom";
import {Route, Routes} from "react-router";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import PageNotFound from "./Pages/PageNotFound";
import Navbar from "./Components/Navbar";
import Login from "./Pages/Login/Login";



export default function App() {
     return (
         <>
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path={"/"} element={<Home/>} ></Route>
                    <Route path={"/about"} element={<About/>} ></Route>
                    <Route path={"/contact"} element={<Contact/>} ></Route>
                    <Route path={"/login"} element={<Login/>} ></Route>
                    <Route path={""} element={<PageNotFound/>} ></Route>

                </Routes>
            </BrowserRouter>
         </>
     );
 }