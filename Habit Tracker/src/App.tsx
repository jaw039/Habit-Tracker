// import { useState } from 'react'
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/ui/app-sidebar"
import './App.css'
import FocusTimer from "./components/FocusTimer"

function App() {
  // const [count, setCount] = useState(0)

  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="relative min-h-screen">
        <div className="absolute left-4 top-4">
          <SidebarTrigger />
        </div>
      

      <div className="p-4 pt-16">
        <FocusTimer />
      </div>
      </main>
    </SidebarProvider>
  )
}

export default App
