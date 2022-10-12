import { Route, Routes } from "react-router-dom";
import Header from "./Pages/Header";
import Home from "./Pages/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
