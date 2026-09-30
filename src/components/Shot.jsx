import { useState } from "react";
import { asset } from "../asset";

/* Screenshot; disembunyikan otomatis jika file tidak ditemukan */
export default function Shot({ src, caption }) {
  const [failed, setFailed] = useState(false);
  if (failed) return null;
  const url = asset(src);
  return (
    <figure className="shot">
      <a href={url} target="_blank" rel="noreferrer">
        <img src={url} alt={caption} loading="lazy" onError={() => setFailed(true)} />
      </a>
      <figcaption>{caption}</figcaption>
    </figure>
  );
}