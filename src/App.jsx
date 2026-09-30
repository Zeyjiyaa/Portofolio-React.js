import { HashRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import ScrollHandler from "./components/ScrollHandler";
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";

function NotFound() {
  return (
    <section className="section">
      <h2>Halaman tidak ditemukan</h2>
      <Link to="/">Kembali ke beranda</Link>
    </section>
  );
}

export default function App() {
  return (
    <HashRouter>
      <ScrollHandler />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/proyek/:slug" element={<ProjectDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
}