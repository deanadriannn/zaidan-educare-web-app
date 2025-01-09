import logoUrl from "@/assets/logo.jpeg"
import { Outlet } from "react-router"

export default function AuthLayout() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <div className="flex flex-col justify-center items-center gap-2 self-center font-bold text-lg">
          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <img src={logoUrl} />
          </div>
          <span className="text-center">
            Pengelolaan Dana Pendidikan Sekolah Zaidan Educare
          </span>
        </div>
        <Outlet />
      </div>
    </div>
  )
}
