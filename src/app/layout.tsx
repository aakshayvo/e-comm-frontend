import type { Metadata } from "next";
import { ApolloWrapper } from "@/lib/apollo-wrapper";
import "./globals.css";
import HeaderComponent from "@/components/header/HeaderComponent";
import FooterComponent from "@/components/footer/FooterComponent";
import "slick-carousel/slick/slick.css";
import "@radix-ui/themes/styles.css";
import "slick-carousel/slick/slick-theme.css";

export const metadata: Metadata = {
  title: {
    default: "Shop the Best Products Online | E-Comm",
    template: "%s | E-Comm",
  },
  description:
    "Discover top-quality products at unbeatable prices. Shop now and enjoy fast shipping and great deals on your favorite items.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ApolloWrapper>
          <div className="min-h-screen flex flex-col">
            <HeaderComponent />
            <main className="flex-grow">{children}</main>
            <FooterComponent />
          </div>
        </ApolloWrapper>
      </body>
    </html>
  );
}
