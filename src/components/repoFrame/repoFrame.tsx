import Image from "next/image";
import TS from '@/assets/tsIcon.png'
import JS from '@/assets/jsIcon.png'
import PY from '@/assets/pythonIcon.png'
import HTML from '@/assets/htmlIcon.png'
import GIT from '@/assets/githubIcon.png'
import QUESTION from '@/assets/questionIcon.png'

type Props = {
    name: string;
    html_url: string;
    language: string | null;
}

export default function RepoFrame({name, html_url, language} : Props) {
    let languageStyle = "";
    let languageIcon ;

    switch (language) {
        case "TypeScript":
            languageStyle = "bg-blue-500 text-white rounded-lg w-24 text-center"; 
            languageIcon = TS; 
            break;
        case "JavaScript":
            languageStyle = "bg-yellow-500 text-white rounded-lg w-24 text-center h-6 mt-1 ml-1"; 
            languageIcon = JS; 
            break;
        case "Python":
            languageStyle = "bg-green-500 text-white rounded-lg w-24 text-center h-6 mt-1 ml-1"; 
            languageIcon = PY; 
            break;
        case "HTML":
            languageStyle = "bg-green-500 text-white rounded-lg w-24 text-center h-6 mt-1"; 
            languageIcon = HTML; 
            break;
        default:
            languageStyle = "bg-gray-400 text-black"; 
            languageIcon = QUESTION; 
    }
    return (
        <main className="border-2 border-cyan-500 rounded-lg h-34 w-56 mb-4 mt-4 flex flex-col items-center justify-center">
            <h2 className="text-lg font-bold dark:text-white">{name}</h2>
            <div className="flex">
            <Image src={GIT} alt="icone do github" width={20} height={20}/>                    
            <a className="ml-1 font-semibold dark:text-cyan-500" href={html_url} target="_blank">
               Ver no github 
            </a>
            </div>
            <div className="flex mb-2 mt-1">
                <Image src={languageIcon} alt="icone da linguagem" width={30} height={30}/>
                <p className={languageStyle}>{language}</p>
            </div>
        </main>
    )
}