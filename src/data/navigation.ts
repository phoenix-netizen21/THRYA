export interface NavItem {
  id: string;
  label: string;
  href: string;
  icon: string;
}

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home', href: '#home', icon: '⬡' },
  { id: 'about', label: 'About', href: '#about', icon: '◈' },
  { id: 'events', label: 'Events', href: '#events', icon: '◎' },
  { id: 'team', label: 'Core Team', href: '#team', icon: '⬢' },
  { id: 'gallery', label: 'Gallery', href: '#gallery', icon: '◐' },
  { id: 'contact', label: 'Contact', href: '#contact', icon: '✦' },
];
