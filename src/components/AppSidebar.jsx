import * as React from "react"
import {
  GalleryVerticalEnd,
  Home,
  Database,
  CalendarClock,
  Clock,
  CircleUserRound,
  CalendarOff,
  Calendar1,
  FileChartColumn,
  Files,
} from "lucide-react"
import { IoLogoAndroid } from "react-icons/io";
import { NavMain } from "@/components/NavMain"
import { NavUser } from "@/components/NavUser"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  SidebarMenuButton
} from "@/components/ui/sidebar"
import avatarUrl from "@/assets/avatar.jpeg"
import { ScrollArea } from "./ui/scroll-area"
import { redirect } from "react-router"

const data = {
  user: {
    name: "Nama",
    email: "email@example.com",
    avatar: avatarUrl,
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/",
      icon: Home,
    },
    // {
    //   title: "User Profile",
    //   url: "/user-profile",
    //   icon: CircleUserRound,
    // },
    {
      title: "Master",
      url: "#",
      icon: Database,
      activeParams: "master",
      items: [
        {
          title: "Data Siswa",
          url: "/master/student",
        },
        // {
        //   title: "User Master",
        //   url: "#",
        //   activeParams: "master",
        //   items: [
        //     {
        //       title: "Data Siswa",
        //       url: "/master/student",
        //     },
        //     {
        //       title: "Data Guru",
        //       url: "#",
        //     },
        //   ]
        // },
        // {
        //   title: "Kalendar Tahun Ajaran",
        //   url: "#",
        // },
        // {
        //   title: "Kalendar Master",
        //   url: "#",
        // },
        // {
        //   title: "Jadwal Pelajaran",
        //   url: "#",
        // },
        // {
        //   title: "Master Kelas",
        //   url: "#",
        // },
        // {
        //   title: "Master Mata Pelajaran",
        //   url: "#",
        // },
        // {
        //   title: "School Settings",
        //   url: "#",
        // },
      ],
    },
    // {
    //   title: "Absensi Guru",
    //   url: "#",
    //   icon: CalendarClock,
    // },
    // {
    //   title: "Absensi Siswa",
    //   url: "#",
    //   icon: CalendarClock,
    // },
    // {
    //   title: "Uncomplete Guru",
    //   url: "#",
    //   icon: Clock,
    // },
    // {
    //   title: "Uncomplete Siswa",
    //   url: "#",
    //   icon: Clock,
    // },
    // {
    //   title: "My Uncomplete",
    //   url: "#",
    //   icon: Clock,
    // },
    // {
    //   title: "Leave Siswa",
    //   url: "#",
    //   icon: CalendarOff,
    // },
    // {
    //   title: "Leave Guru",
    //   url: "#",
    //   icon: CalendarOff,
    // },
    // {
    //   title: "My Leave",
    //   url: "#",
    //   icon: CalendarOff,
    // },
    // {
    //   title: "Jadwal Mengajar",
    //   url: "#",
    //   icon: Calendar1,
    // },
    // {
    //   title: "Rekap Absensi Siswa",
    //   url: "#",
    //   icon: FileChartColumn,
    // },
    // {
    //   title: "Rekap Absensi Guru",
    //   url: "#",
    //   icon: FileChartColumn,
    // },
    // {
    //   title: "Documents",
    //   url: "#",
    //   icon: Files,
    // },
    // {
    //   title: "Mobile Application",
    //   url: "#",
    //   icon: IoLogoAndroid,
    // },
  ],
}

export function AppSidebar({ ...props }) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenuButton
          size="lg"
          className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
          onClick={() => redirect("/")}
        >
          <a href="/" className="flex items-center space-x-2">
            <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
              <GalleryVerticalEnd className="size-4" />
            </div>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-semibold">
                Application Name
              </span>
            </div>
          </a>
        </SidebarMenuButton>
      </SidebarHeader>
      <SidebarContent>
        <ScrollArea>
          <NavMain items={data.navMain} />
        </ScrollArea>
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
