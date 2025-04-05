import { Providers } from './_common/components/Providers';

export default function RootLayout({ children }: { children: React.ReactNode }): React.ReactNode {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
