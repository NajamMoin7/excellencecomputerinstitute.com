import { FaWhatsapp } from "react-icons/fa";
import { site } from "../lib/site";

export function FloatingWhatsApp() {
  return (
    <a
      href={site.whatsapp}
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 left-5 z-[60] inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-2xl shadow-emerald-950/30 transition duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-emerald-400 focus:outline-none focus:ring-4 focus:ring-emerald-300/40"
    >
      <FaWhatsapp size={30} aria-hidden />
    </a>
  );
}
