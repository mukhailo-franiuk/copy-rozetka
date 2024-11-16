import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
import { Header } from "./components/header/Header";
import { Home } from "./components/pages/home/Home";
import { Products } from "./components/pages/products/Products";

function App() {
  return (
    <div className="w-full">
        <Router future={{v7_startTransition : true,v7_relativeSplatPath : true}}>
            <Header />
            <Routes>
                <Route path="" element={<Home />} />
                <Route path="products/:category" element={<Products />} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
