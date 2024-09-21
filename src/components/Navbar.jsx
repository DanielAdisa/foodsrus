import { useState } from "react"
import logo from "../assets/logo.png"

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    }

    const handleScroll = (event, targetId ) => {

        event.preventDefault();
        const targetElement = document.getElementById(targetId);
        if (targetElement)  {
            const offsetTop = targetElement.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: "smooth"
            })
        }
        setIsMobileMenuOpen(false);
    }

  return (
    <nav className="fixed z-50 flex flex-col items-center justify-center w-full top-4">
        <div className=" flex w-full items-center justify-between overflow-y-hidden p-4 backdrop-blur-lg lg:m-2 lg:w-[50rem] lg:rounded-full lg:shadow-lg">
            <img src={logo} alt="logo" width={80} height={22} />
            <div className="hidden space-x-8 lg:flex">

            </div>
        </div>
    </nav>
  )
}
export default Navbar