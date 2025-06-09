import type { Metadata } from "next";
import "./globals.css";
import { Provider } from "@/components/ui/provider"
import Nav from "@/components/nav/nav";

export const metadata: Metadata = {
  title: "Jhon Doe",
  description: "Personal portfolio of Jhon Doe, a Full Stack Developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Provider>
          <header>
            <Nav />
          </header>
          {children}
        </Provider>
      </body>
    </html>
  );
}
