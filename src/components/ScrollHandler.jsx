import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/* Scroll ke bagian (state.section) atau ke atas saat pindah halaman */
export default function ScrollHandler() {
  const { pathname, state } = useLocation();
  useEffect(() => {
    if (state?.section) {
      document.getElementById(state.section)?.scrollIntoView();
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, state]);
  return null;
}