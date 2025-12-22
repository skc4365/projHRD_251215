import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"
import './Layout.css'

const Layout = () => {
    return(
        <>
            <Header />

            <main className="main">
                <Outlet />
            </main>

            <Footer />
        </>
    )
}
export default Layout