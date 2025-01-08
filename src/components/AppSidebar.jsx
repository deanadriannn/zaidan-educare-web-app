import * as React from "react"
import {
  Home,
  Database,
  CreditCard,
  ChartPie,
  BellRing
} from "lucide-react"
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
import { ScrollArea } from "./ui/scroll-area"
import { redirect } from "react-router"
import avatarUrl from "@/assets/avatar.jpg"
import logoUrl from "@/assets/logo.jpeg"

// TODO: Get role from auth here
const currentUser = "Administrator"
const data = {
  user: {
    name: "Nama",
    email: "email@example.com",
    avatar: avatarUrl,
  },
  navMain: {
    "Ketua Yayasan": [
      {
        title: "Dasbor",
        url: "/",
        icon: Home,
      },
      {
        title: "Status Pembayaran",
        url: "#",
        icon: CreditCard
      },
      {
        title: "Rekapitulasi Penerimaan Dana",
        url: "#",
        icon: Database
      },
      {
        title: "Grafik Transaksi Penerimaan Dana",
        url: "#",
        icon: ChartPie
      }
    ],
    "Bendahara": [
      {
        title: "Dasbor",
        url: "/",
        icon: Home,
      },
      {
        title: "Transaksi Tagihan Siswa",
        url: "#",
        icon: CreditCard
      },
      {
        title: "Transaksi Penerimaan Dana",
        url: "#",
        icon: Database
      },
      {
        title: "Pengaturan Notifikasi Penagihan",
        url: "#",
        icon: BellRing
      },
      {
        title: "Status Pembayaran",
        url: "#",
        icon: CreditCard
      },
      {
        title: "Rekapitulasi Penerimaan Dana",
        url: "#",
        icon: Database
      },
      {
        title: "Grafik Transaksi Penerimaan Dana",
        url: "#",
        icon: ChartPie
      }
    ],
    "Administrator": [
      {
        title: "Dasbor",
        url: "/",
        icon: Home,
      },
      {
        title: "Data Siswa",
        url: "#",
        icon: Database
      },
      {
        title: "Data Transaksi Penerimaan",
        url: "#",
        icon: Database,
        activeParams: "master",
        items: [
          {
            title: "Jenis Biaya Pendidikan",
            url: "#",
          },
          {
            title: "Bank Penerima",
            url: "#",
          },
          {
            title: "Pengguna Aplikasi",
            url: "#",
          },
        ],
      }
    ]
  }
}

export function AppSidebar({ ...props }) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenuButton
          size="lg"
          onClick={() => redirect("/")}
          className="hover:bg-transparent hover:text-sidebar-foreground"
        >
          <a href="/" className="flex items-center space-x-2">
            <div className="flex aspect-square size-8 items-center justify-center">
              <img src={logoUrl} className="text-black" />
            </div>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-semibold">
                Zaidan Educare
              </span>
            </div>
          </a>
        </SidebarMenuButton>
      </SidebarHeader>
      <SidebarContent>
        <ScrollArea>
          <NavMain items={data.navMain[currentUser]} />
        </ScrollArea>
      </SidebarContent>
      {/* <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter> */}
      <SidebarRail />
    </Sidebar>
  )
}
