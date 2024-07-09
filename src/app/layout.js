import { Teko } from "next/font/google";
import "./globals.css";

const teko = Teko({ subsets: ["latin"] });

export const metadata = {
  title: "cryptocurrency",
  description: "Learn about cryptocurrencies quickly and easily",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={teko.className}>{children}</body>
    </html>
  );
}
