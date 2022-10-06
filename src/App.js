import './App.css';
import {Navbar} from "./Components";
import {Home, Mint, MyProfile, CreateNft, SendNft} from "./Pages";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
      <Route path="/" element={<Home></Home>} />
      <Route path="/Mint" element={<Mint></Mint>} />
      <Route path="/MyProfile" element={<MyProfile></MyProfile>} />
      <Route path="/CreateNft" element={<CreateNft></CreateNft>}></Route>
      <Route path="/SendNft" element={<SendNft></SendNft>} />
      <Route path="*" element={<div>Not Found</div>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
