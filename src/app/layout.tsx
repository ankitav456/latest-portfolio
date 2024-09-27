import "./globals.css";

export const metadata = {
  title: "Ankita Vishwakarma - Web Developer Portfolio",
  description:
    "Explore Ankita Vishwakarma's projects, skills, and experience in web development, specializing in React and Next.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
