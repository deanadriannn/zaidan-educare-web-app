import { Toaster } from "react-hot-toast"

function App({children}) {
  return (
    <main>
      <Toaster />
      {children}
    </main>
  )
}

export default App
