import { NavLink, Link } from "react-router";

const Navbar = () => {

    return (
    
    <nav className="bg-gray-800 flex justify-between px-3 py-2 items-center">
        <div className="">
            <h1 className="text-white text-center px-3 py-2 rounded-md block w-40 hover:text-teal-600">Eliam Ruiz Agosto</h1>
        </div>
        <div className="px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-end">
                <Link to ="/" className="text-white text-center hover:bg-teal-600 px-3 py-2 rounded-md block ">Home</Link>
                {/* <Link to ="/project" className="text-white text-center hover:bg-teal-600 px-3 py-2 rounded-md block ">Projects</Link> */}
                <Link to="/cv" className="text-white text-center hover:bg-teal-600 px-3 py-2 rounded-md block">CV</Link>
                <Link to ="/contact" className="text-white text-center hover:bg-teal-600 px-3 py-2 rounded-md block ">Contact Me</Link>
            </div>
        </div>
    </nav>
    )
}

export default Navbar;