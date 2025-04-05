import './global.css';
import { Providers } from './_common/components/Providers';

export const metadata = {
  title: 'Welcome to BAM',
  description: 'BAM is a web application',
};

export default function RootLayout({ children }: { children: React.ReactNode }): React.ReactNode {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
