import "./globals.css";
import ParticleField from "../components/ParticleField";
import Header from "../components/Header";

export const metadata = {
  title: "Tiansong | Portfolio",
  description: "A sleek personal portfolio with particle background and motion.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-black">
      {/* 关键：flex + min-h-screen + flex-col */}
      <body className="flex min-h-screen flex-col text-white">
        <ParticleField />
        {/* 如果你已把左上角品牌改为“岸上歌”，这里可以不传 siteName */}
        <Header /* siteName="Tiansong Wang" */ />

        {/* 关键：flex-1 撑开中间空间；pt-24 让内容避开固定导航 */}
        <main className="flex-1 pt-24">{children}</main>

        {/* 贴底页脚：不再被内容推到中间 */}
        <footer className="py-6 text-center text-xs text-white/50">
          © {new Date().getFullYear()} Tiansong Wang. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
