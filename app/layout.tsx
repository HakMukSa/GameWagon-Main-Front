import "./globals.css";
import Nav from "./nav";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "게임왜건",
  description: "게임 플랫폼 정보 사이트",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    /**
     * @todo 추후에 SEO 고려, next/head 사용
     */
    <html lang="kr">
      <body className={inter.className}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
