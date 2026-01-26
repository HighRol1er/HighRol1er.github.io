import { Separator } from "@/components/ui/separator";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useTags } from "@/providers/tag-provider";
import { CircleUser, File } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

// Menu items
const items = [
  {
    title: "Whoami",
    url: "/",
    icon: CircleUser,
  },
  {
    title: "Posts",
    url: "/posts",
    icon: File,
  },
];

export function AppSidebar() {
  const { tags } = useTags();
  const location = useLocation();

  // 현재 경로 확인
  console.log("Current path:", location.pathname);

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <div className="flex items-center gap-2 px-2 py-1.5">
          <div className="flex flex-col group-data-[collapsible=icon]:hidden">
            <span className="text-sm font-semibold">Highroller 🎲</span>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild tooltip={item.title}>
                    <Link to={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
              <Separator />
              {location.pathname.includes("/posts") && (
                <>
                  <SidebarGroupLabel>Post Tags</SidebarGroupLabel>
                  <Link to="/posts">
                    <SidebarMenuButton tooltip="All Posts">
                      <span>All Posts</span>
                    </SidebarMenuButton>
                  </Link>
                  {Array.from(tags).map((tag) => (
                    <SidebarMenuItem key={tag}>
                      <SidebarMenuButton tooltip={tag}>
                        <Link to={`/posts?tag=${tag}`}>
                          <span>{tag}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </>
              )}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
