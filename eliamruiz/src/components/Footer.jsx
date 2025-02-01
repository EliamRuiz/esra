const currentYear = new Date().getFullYear();

const Footer = () => {
    return (
        <footer className="bg-white shadow dark:bg-gray-800">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400 flex">© {currentYear} <p className="hover:underline">&nbsp;Eliam Ruiz Agosto </p>&nbsp; All Rights Reserved. 
            </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li>
                        <a href="https://github.com/EliamRuiz" className="hover:underline me-4 md:me-6 hover:text-teal-600">Github</a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/eliam-ruiz-72421b17b/" className="hover:underline me-4 md:me-6 hover:text-teal-600">LinkedIn</a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;