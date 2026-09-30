import { useState } from "react";
import { profile } from "../data";
import { asset } from "../asset";

/* Foto profil; jika file belum ada, tampil inisial */
export default function Avatar() {
  const [failed, setFailed] = useState(false);
  return failed ? (
    <div className="avatar fallback" aria-label="Foto belum ditambahkan">
      {profile.name.slice(0, 2)}
    </div>
  ) : (
    <img className="avatar" src={asset(profile.photo)} alt={`Foto ${profile.name}`} onError={() => setFailed(true)} />
  );
}