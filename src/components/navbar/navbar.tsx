export default function NavBar() {
    return (
        <ul className="flex flex-1 items-center justify-center mt-4">
            <li className="mr-10">
               <a className="font-bold dark:text-[#fff] hover:text-cyan-500 ease-in duration-300" href="/">
                Home
                </a> 
            </li>
            <li className="mr-10">
                <a className="font-bold dark:text-[#fff] hover:text-cyan-500 ease-in duration-300" href="/projects">
                    Projetos
                </a>
            </li>
            <li className="mr-10">
                <a className="font-bold dark:text-[#fff] hover:text-cyan-500 ease-in duration-300" href="/social">
                Social Media
                </a>
            </li>
            <li className="mr-10">
                <a className="font-bold dark:text-[#fff] hover:text-cyan-500 ease-in duration-300" href="/equipments">
                Equipamentos
                </a>
            </li>
        </ul>
    )
}