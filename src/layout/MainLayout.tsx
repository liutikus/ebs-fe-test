import { ReactNode } from "react"
import Nav from "../components/Nav"

const MainLayout = ({children}: {children: ReactNode}) => {
  return (
    <div>
      <header>
      <Nav/>
      </header>

      <main>{children}</main>
      
      <footer></footer>
    </div>
  )
}

export default MainLayout
