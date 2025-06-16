import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pam Pinheiro | Publicidade Digita",
  description:
    "Descubra os serviços da Pam Pinheiro: conteúdo digital, mídias sociais e campanhas estratégicas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
