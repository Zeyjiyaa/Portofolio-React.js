import { Link } from "react-router-dom";
import { profile } from "../data";

export default function Layout({ children }) {
  return (
    <>
      <nav className="nav">
        <Link to="/" className="brand">{profile.name}</Link>
        <div>
          <Link to="/" state={{ section: "tentang" }}>Tentang</Link>
          <Link to="/" state={{ section: "pengalaman" }}>Pengalaman</Link>
          <Link to="/" state={{ section: "proyek" }}>Proyek</Link>
          <Link to="/" state={{ section: "kontak" }}>Kontak</Link>
        </div>
      </nav>
      <main>{children}</main>
      <footer className="footer">© {new Date().getFullYear()} {profile.name}</footer>
    </>
  );
}