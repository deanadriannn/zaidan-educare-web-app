import { Toaster } from "@/components/ui/toaster"

function App({children}) {
  return (
    <main>
      {children}
      <Toaster />
    </main>
  )
}

export default App
