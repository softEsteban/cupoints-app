import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '../components/Navbar/Navbar';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <title>Cupoints</title>
      <Navbar />
      <div style={{ marginTop: '120px' }}>{children}</div>
    </div>
  );
}
