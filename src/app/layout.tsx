import type { Metadata } from "next";
import { ApolloWrapper } from "@/lib/apollo-wrapper";
import "./globals.css";
import HeaderComponent from "@/components/header/HeaderComponent";
import FooterComponent from "@/components/footer/FooterComponent";
import "slick-carousel/slick/slick.css";
import "@radix-ui/themes/styles.css";
import "slick-carousel/slick/slick-theme.css";
import { ThemeProvider } from "@/components/theme-provider";

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
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ApolloWrapper>
            <div className="min-h-screen flex flex-col">
              <HeaderComponent />
              <main className="flex-grow">{children}</main>
              <FooterComponent />
            </div>
          </ApolloWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}

//when i add dark and light thene it was showing hydration error so to avoid it i haved added suppressHydrationWarning
