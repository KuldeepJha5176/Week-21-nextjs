export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <h1>Header</h1>
        {children}
        <h1>
            Footer
        </h1>
       
      </body>
    </html>
  );
}