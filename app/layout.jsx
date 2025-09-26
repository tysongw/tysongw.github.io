import "./globals.css";

export const metadata = {
  title: "Tiansong | Portfolio",
  description: "A sleek personal portfolio with particle background and motion.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-black">
      <body>{children}</body>
    </html>
  );
}
