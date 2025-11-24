'use client';

import {
  Sidebar,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarContent,
  SidebarTrigger,
  SidebarInset,
} from '@/components/ui/sidebar';
import { GalleryHorizontal, Globe, Home, PenSquare } from 'lucide-react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Logo from '@/components/logo';

const navItems = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/dream', label: 'Weave Dream', icon: PenSquare },
  { href: '/gallery', label: 'Dream Gallery', icon: GalleryHorizontal },
  { href: '/atlas', label: 'Dream Atlas', icon: Globe },
];

export default function AppSidebar() {
  const pathname = usePathname();

  return (
    <>
      <div className="absolute top-4 left-4 z-20 md:hidden">
        <SidebarTrigger />
      </div>
      <Sidebar collapsible="icon" variant="sidebar">
        <SidebarHeader className="items-center justify-center text-center">
            <Logo className="w-12 h-12 text-primary" />
            <div className="group-data-[collapsible=icon]:hidden">
              <h2 className="font-headline text-2xl font-bold text-foreground">Dream Weaver</h2>
            </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            {navItems.map((item) => (
              <SidebarMenuItem key={item.href}>
                <Link href={item.href} legacyBehavior passHref>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname === item.href}
                    tooltip={{
                      children: item.label,
                      className: 'font-body',
                    }}
                    className="font-headline text-base"
                  >
                    <a>
                      <item.icon />
                      <span>{item.label}</span>
                    </a>
                  </SidebarMenuButton>
                </Link>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>
      </Sidebar>
    </>
  );
}
