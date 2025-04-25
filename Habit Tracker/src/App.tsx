// import { useState } from 'react'
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/ui/app-sidebar"
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        {/* {children} */}
      </main>
    </SidebarProvider>
  )
}

export default App
