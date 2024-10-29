import { useState } from "react";
import Links from "../Links/Links";
import { IoMdMenu } from "react-icons/io";
import { FaWindowClose } from "react-icons/fa";

const MyNav = () => {
    const [open, setOpen] = useState(false);

    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About" },
        { id: 3, path: "/services", name: "Services" },
        { id: 4, path: "/contact", name: "Contact" },
        { id: 5, path: "/profile", name: "Profile" }
      ];
            

    return (
        <nav className="bg-purple-400 px-6 py-3 text-white">
            <div className="md:hidden" onClick={() => setOpen(!open)}>
                {
                    open === true ? <FaWindowClose className="text-3xl"/> : <IoMdMenu className="text-3xl"/>
                }

            
            </div>
            <ul className={`md:flex gap-10 absolute duration-1000 md:static
                ${open ? "top-7 left-14" : "-top-40 left-14"}
                bg-purple-400 px-6`}>
                {
                    routes.map(paths => <Links key={paths.id} paths={paths}></Links>)
                }
            </ul>
        </nav>
    );
};

export default MyNav;