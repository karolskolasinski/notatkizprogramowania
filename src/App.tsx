import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Category from "./Category";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:categoryId" element={<Category />} />
        <Route path="/:categoryId/:articleId" element={<div>Artykuł</div>} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
