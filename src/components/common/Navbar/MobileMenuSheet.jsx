import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { AlignJustify } from "lucide-react";
import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";
import Link from "next/link";

const MobileMenuSheet = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <div>
          <div className="outline outline-primary p-2 rounded-md  text-primary">
            <AlignJustify size="20px" />
          </div>
        </div>
      </SheetTrigger>
      <SheetContent className="overflow-hidden" side="left">
        <SheetHeader>
          <SheetTitle>Are you absolutely sure?</SheetTitle>
        </SheetHeader>
        <SidebarSeparator />
        <SidebarProvider>
          <SidebarContent>
            <SidebarGroupLabel>Application</SidebarGroupLabel>

            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>
        </SidebarProvider>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenuSheet;

const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];
