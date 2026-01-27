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
import { Badge } from "@/components/ui/badge";
import { Cherry, CircleUser, File } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useFetchPosts } from "@/hooks";
import { useMemo } from "react";

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
  {
    title: "Cherry Pick",
    url: "/cherry-pick",
    icon: Cherry,
  },
];

export function AppSidebar() {
  const location = useLocation();
  const { posts } = useFetchPosts();

  // 태그 수집 (PostPage의 로직을 여기로 이동)
  const tags = useMemo(() => {
    const allTags = new Set<string>();
    posts.forEach((post) => {
      post.tags.forEach((t) => allTags.add(t));
    });
    return allTags;
  }, [posts]);

  const getTagCount = (tag: string) => {
    return posts.filter((post) => post.tags.includes(tag)).length;
  };

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
                  <SidebarMenuButton
                    asChild
                    tooltip={item.title}
                    className="font-figtree"
                  >
                    <Link to={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
              <Separator />
              {location.pathname.includes("/posts") && (
                <div className="group-data-[collapsible=icon]:hidden">
                  <SidebarGroupLabel className="font-figtree">
                    Post Tags
                  </SidebarGroupLabel>
                  <Link to="/posts">
                    <SidebarMenuButton tooltip="All Posts">
                      <Badge className="dark:bg-green-950 dark:text-green-300">
                        All ({posts.length})
                      </Badge>
                    </SidebarMenuButton>
                  </Link>
                  {Array.from(tags).sort().map((tag) => (
                    <SidebarMenuItem key={tag}>
                      <SidebarMenuButton tooltip={tag}>
                        <Link to={`/posts?tag=${tag}`}>
                          <Badge className="bg-purple-50 text-purple-700 dark:bg-purple-900 dark:text-purple-200 ">
                            {tag} ({getTagCount(tag)})
                          </Badge>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </div>
              )}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
