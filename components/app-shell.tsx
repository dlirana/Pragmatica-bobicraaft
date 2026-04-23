'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Brain, Map, ShieldCheck } from 'lucide-react';

const links = [
  { href: '/', label: 'Inicio', icon: Brain },
  { href: '/paciente/niveles', label: 'Niveles', icon: Map },
  { href: '/terapeuta', label: 'Panel terapeuta', icon: ShieldCheck }
];

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="mx-auto min-h-screen max-w-6xl px-4 py-6 md:px-8">
      <header className="mb-8 card p-4 md:p-5">
        <nav className="flex flex-wrap items-center gap-2 md:gap-3" aria-label="Navegación principal">
          {links.map((link) => {
            const active = pathname === link.href || pathname.startsWith(`${link.href}/`);
            const Icon = link.icon;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`cta ${active ? 'bg-sage' : 'bg-white'} border border-cloud`}
              >
                <Icon className="mr-2 h-4 w-4" aria-hidden="true" />
                {link.label}
              </Link>
            );
          })}
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
}
