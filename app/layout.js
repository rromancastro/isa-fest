import localFont from "next/font/local";
import "./globals.css";

const inter = localFont({
  src: "../public/Inter.ttf",
  variable: "--font-inter",
  display: "block",
});

const robotoSerif = localFont({
  src: "../public/RobotoSerif.ttf",
  variable: "--font-roboto-serif",
  display: "block",
});

export const metadata = {
  title: "Isa Fest | 15 años",
  description: "Invitacion digital para festejar los 15 de Isa.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${inter.variable} ${robotoSerif.variable}`}>
      <body>{children}</body>
    </html>
  );
}
