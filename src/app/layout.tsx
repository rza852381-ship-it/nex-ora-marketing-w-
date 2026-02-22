export const metadata = {
  title: "Nexora AI",
  description: "منصة تسويق ذكية مدعومة بالذكاء الاصطناعي",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar">
      <body>{children}</body>
    </html>
  );
}
