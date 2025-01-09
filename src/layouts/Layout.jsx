import { Outlet } from 'react-router'
import { AppSidebar } from "@/components/AppSidebar"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { useLocation } from 'react-router'
import { 
  FaInstagram, 
  FaFacebookSquare, 
  FaYoutube 
} from "react-icons/fa";
import { Globe, LogOut } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

const footerContent = [
  {
    icon: Globe,
    url: "https://www.zaidaneducare.sch.id/"
  },
  {
    icon: FaFacebookSquare,
    url: "https://www.facebook.com/ZaidanEducareBandung"
  },
  {
    icon: FaInstagram,
    url: "https://www.instagram.com/sekolah_zaidan_educare/"
  },
  {
    icon: FaYoutube,
    url: "https://www.youtube.com/channel/UCNmieE6rUWz0MUbEV13EqGA"
  }
]

const Layout = () => {
  const location = useLocation()
  const locationName = {
    '/': 'Dasbor',
    '/student': 'Pengelolaan Data Siswa',
    '/input-student': 'Formulir Penambahan Data Siswa'
  }

  const handleLogout = () => {
    window.location.href = "/auth/login"
  }

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <div className='bg-background w-full sticky top-0 pt-1 z-50'>
          <Card 
            className="mx-4 flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear 
              group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12"
          >
            <div className='flex justify-between items-center w-full bg-sidebar h-full rounded-xl px-4'>
              <div className="flex items-center gap-2">
                <SidebarTrigger className="-ml-1" />
                <Separator orientation="vertical" className="mr-2 h-4" />
                <h1 className="text-lg font-semibold">
                  {locationName[location.pathname]}
                </h1>
              </div>
              <div className='flex items-center gap-2'>
                <span className='font-bold'>
                  Nama Pengguna
                </span>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button variant="destructive">
                      <LogOut />
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Apakah Anda yakin?</AlertDialogTitle>
                      <AlertDialogDescription>
                        Anda akan keluar dari akun Anda.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Batalkan</AlertDialogCancel>
                      <AlertDialogAction onClick={handleLogout}>Lanjutkan</AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </div>
          </Card>
        </div>
        <Outlet />
        <Card className="mx-4 mt-4 mb-1 flex h-16 shrink-0 justify-center items-center gap-2 transition-[width,height] ease-linear bg-sidebar rounded-xl">
          <span className='mr-4'>
            Zaidan Educare @ 2025
          </span>
          <div className='flex items-center justify-center gap-2'>
            {footerContent.map((content) => (
              <a href={content.url} key={content.url} target="_blank">
                <content.icon className='text-3xl' />
              </a>
            ))}
          </div>
        </Card>
      </SidebarInset>
    </SidebarProvider>
  )
}

export default Layout