import Nav from "@/components/Nav";
import { ThemeProvider } from "@/components/theme/theme-provider";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "In Loving Memory of Chief Dennis – A Memorial Tribute",
  description:
    "A heartfelt memorial website honoring the life and legacy of Chief Dennis. Explore biographies, tributes, condolence messages, and more as we celebrate a remarkable life.",
  keywords:
    "memorial, tribute, obituary, condolence, in loving memory, Chief Egbo, Chief Dennis Okeke Anih, Egbo Nwafor Ogo",
  authors: [{ name: "Matthew Chukwu" }],
  openGraph: {
    title: "In Loving Memory of Chief Dennis – A Memorial Tribute",
    description:
      "A heartfelt memorial website honoring the life and legacy of Chief Dennis. Explore biographies, tributes, condolence messages, and more as we celebrate a remarkable life.",
    url: "https://chief-egbo.com.ng",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/mctony17/image/upload/v1739536079/logos/seo_logo.webp",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "In Loving Memory of Chief Dennis – A Memorial Tribute",
    description:
      "A heartfelt memorial website honoring the life and legacy of Chief Dennis. Explore biographies, tributes, condolence messages, and more as we celebrate a remarkable life.",
    images: [
      "https://res.cloudinary.com/mctony17/image/upload/v1739536079/logos/seo_logo.webp",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange>
          <Nav />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
