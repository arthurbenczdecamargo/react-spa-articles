import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import AboutMe from "./pages/AboutMe"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import DefaultPage from "./components/DefaultPage"
import Post from "./pages/Post"
import NotFound from "./pages/NotFound"
import ScrollToTop from "./components/ScrollToTop"

function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<DefaultPage />}>
          <Route path="/" element={<Home />} />
          <Route path="/aboutme" element={<AboutMe />} />
        </Route>

        <Route path="/post/:id" element={<Post />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;
