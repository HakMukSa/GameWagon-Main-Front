import "./globals.css";
import Nav from "./nav";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "게임왜건",
  description: "뭘적어야하지",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="kr">
      <body className={inter.className}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
