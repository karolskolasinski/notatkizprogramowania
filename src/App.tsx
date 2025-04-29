import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Category from "./pages/Category.tsx";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import Article from "./pages/Article.tsx";

const App = () => (
  <Router>
    <Header />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:categoryId" element={<Category />} />
      <Route path="/:categoryId/:articleId" element={<Article />} />
      {/*<Route path="/old" element={<DesignPatterns />} />*/}
    </Routes>

    <Footer />
  </Router>
);

export default App;
