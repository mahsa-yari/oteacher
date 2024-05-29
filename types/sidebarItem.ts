export interface SidebarItem {
  id: string;
  name: string;
  slug: string;
  title: string;
  children: SidebarItem[];
  icon: string;
  description: string;
}
