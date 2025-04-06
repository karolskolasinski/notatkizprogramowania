import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
// import Category from "./Category";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/*<Route path="/:categoryId" element={<Category />} />*/}
        <Route path="/:categoryId/:articleId" element={<div>Artykuł</div>} />
      </Routes>
    </Router>
  );
}

export default App;
