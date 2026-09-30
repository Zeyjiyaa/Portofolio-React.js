import { Link } from "react-router-dom";
import Avatar from "../components/Avatar";
import { profile, experiences, skills, projects } from "../data";

export default function Home() {
  return (
    <>
      <header className="hero">
        <div>
          <h1>{profile.role}</h1>
          <p className="lead">{profile.intro}</p>
          <div className="actions">
            <Link className="btn primary" to="/" state={{ section: "proyek" }}>Lihat proyek</Link>
            <Link className="btn" to="/" state={{ section: "kontak" }}>Hubungi saya</Link>
          </div>
        </div>
        <Avatar />
      </header>

      <section id="tentang" className="section">
        <h2>Tentang saya</h2>
        <div className="about">
          <p className="lead">{profile.about}</p>
          <dl className="details">
            {profile.details.map((d) => (
              <div key={d.label}>
                <dt>{d.label}</dt>
                <dd>{d.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section id="pengalaman" className="section">
        <h2>Pengalaman</h2>
        {experiences.map((e) => (
          <article key={e.role + e.org} className="experience">
            <div className="exp-head">
              <h3>{e.role}, {e.org}</h3>
              <span>{e.period}</span>
            </div>
            <ul>
              {e.points.map((p) => <li key={p}>{p}</li>)}
            </ul>
          </article>
        ))}
      </section>

      <section id="proyek" className="section">
        <h2>Proyek</h2>
        <ul className="projects">
          {projects.map((p) => (
            <li key={p.slug} className="project">
              <div>
                <h3><Link to={`/proyek/${p.slug}`}>{p.title}</Link></h3>
                <p>{p.summary}</p>
              </div>
              <div className="project-side">
                <ul className="tags">{p.tech.map((t) => <li key={t}>{t}</li>)}</ul>
                <Link to={`/proyek/${p.slug}`}>Lihat detail</Link>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="section">
        <h2>Keahlian</h2>
        <dl className="skills">
          {Object.entries(skills).map(([g, items]) => (
            <div key={g}>
              <dt>{g}</dt>
              <dd>{items.join(", ")}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section id="kontak" className="section">
        <h2>Kontak</h2>
        <p className="lead">Ingin berdiskusi? Kirim pesan.</p>
        <ul className="contacts">
          {profile.contacts.map((c) => (
            <li key={c.label}><span>{c.label}</span><a href={c.href}>{c.text}</a></li>
          ))}
        </ul>
      </section>
    </>
  );
}