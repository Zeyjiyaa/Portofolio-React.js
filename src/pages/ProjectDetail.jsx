import { Link, useParams } from "react-router-dom";
import PhoneChat from "../components/PhoneChat";
import Shot from "../components/Shot";
import { projects } from "../data";

export default function ProjectDetail() {
  const { slug } = useParams();
  const p = projects.find((x) => x.slug === slug);

  if (!p) {
    return (
      <section className="section">
        <h2>Proyek tidak ditemukan</h2>
        <Link to="/" state={{ section: "proyek" }}>Kembali ke daftar proyek</Link>
      </section>
    );
  }

  return (
    <article className="detail">
      <Link to="/" state={{ section: "proyek" }} className="back">Kembali ke proyek</Link>
      <h1>{p.title}</h1>
      <p className="lead">{p.summary}</p>

      <dl className="facts">
        <div><dt>Peran</dt><dd>{p.role}</dd></div>
        <div><dt>Periode</dt><dd>{p.period}</dd></div>
        <div><dt>Teknologi</dt><dd>{p.tech.join(", ")}</dd></div>
      </dl>

      {p.chat && <PhoneChat messages={p.chat} />}

      <h2>Gambaran</h2>
      <p>{p.overview}</p>
      <h2>Cara kerja</h2>
      <p>{p.how}</p>
      <h2>Fitur</h2>
      <ul className="bullets">{p.features.map((f) => <li key={f}>{f}</li>)}</ul>
      {p.results.length > 0 && (
        <>
          <h2>Hasil</h2>
          <ul className="bullets">{p.results.map((r) => <li key={r}>{r}</li>)}</ul>
        </>
      )}

      <h2>Screenshot</h2>
      <div className="shots">
        {p.screenshots.map((s) => <Shot key={s.src} {...s} />)}
      </div>

      {(p.links.demo || p.links.repo) && (
        <div className="actions">
          {p.links.demo && <a className="btn primary" href={p.links.demo}>Buka demo</a>}
          {p.links.repo && <a className="btn" href={p.links.repo}>Lihat kode</a>}
        </div>
      )}
    </article>
  );
}