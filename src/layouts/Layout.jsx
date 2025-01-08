import { Outlet } from 'react-router'
import { AppSidebar } from "@/components/AppSidebar"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { useLocation } from 'react-router'
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const footerContent = [
  {
    title: 'Example 1',
    items: [
      {
        title: 'Example 1',
        link: '#'
      },
      {
        title: 'Example 2',
        link: '#'
      },
      {
        title: 'Example 3',
        link: '#'
      }
    ]
  },
  {
    title: 'Example 2',
    items: [
      {
        title: 'Example 1',
        link: '#'
      },
      {
        title: 'Example 2 fs fds f ds',
        link: '#'
      },
      {
        title: 'Example 3',
        link: '#'
      }
    ]
  },
  {
    title: 'Example 3',
    items: [
      {
        title: 'Example 1',
        link: '#'
      },
      {
        title: 'Example 2',
        link: '#'
      },
      {
        title: 'Example 3 fds sdsf fd',
        link: '#'
      }
    ]
  }
]

const Layout = () => {
  const location = useLocation()
  const locationName = {
    '/': 'Dashboard',
    '/master/student': 'Master - Student',
    '/input-student': 'Input - Student',
  }

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className='flex justify-between w-full'>
            <div className="flex items-center gap-2 px-4">
              <SidebarTrigger className="-ml-1" />
              <Separator orientation="vertical" className="mr-2 h-4" />
              <h1 className="text-lg font-semibold">
                {locationName[location.pathname]}
              </h1>
            </div>
          </div>
        </header>
        <main className='flex flex-auto gap-4 p-4 pt-0 shrink-0 min-h-[100vh]'>
          <Outlet />
        </main>
        <footer className="flex h-auto shrink-0 items-center gap-2 transition-[width,height] ease-linear">
          <div className='flex flex-col justify-between w-full h-full gap-8'>
            <div className="flex flex-col gap-4 px-4">
              <h1 className="text-2xl font-bold">
                Get in Touch
              </h1>
              <div className='flex gap-2'>
                <FaInstagram className='text-3xl' />
                <FaFacebookF className='text-3xl' />
                <FaXTwitter className='text-3xl' />
              </div>
            </div>

            <div className='flex w-full gap-16'>
              {footerContent.map((content, index) => (
                <div className="flex flex-col gap-4 px-4" key={index}>
                  <h1 className="text-lg font-semibold">
                    {content.title}
                  </h1>
                  {content.items.map((item, index) => (
                    <p className='hover:underline hover:cursor-pointer underline-offset-4' key={index}>
                      {item.title}
                    </p>
                  ))}
                </div>
              ))}
            </div>

          </div>
        </footer>
      </SidebarInset>
    </SidebarProvider>
  )
}

export default Layout