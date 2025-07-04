'use client';

import { usePathname } from 'next/navigation';
import Navbar from './navbar';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const hideNavbar = pathname.startsWith('/dashboard');

  return (
    <>
      {!hideNavbar && <Navbar />}
      {children}
    </>
  );
}
