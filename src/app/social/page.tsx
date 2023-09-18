import Image from "next/image";
import LINKEDIN from '@/assets/linkedinIcon.png'
import INSTAGRAM from '@/assets/instagramIcon.png'
import GITHUB from '@/assets/githubClassicIcon.png'

export default function SocialMedia() {
    return (
        <>
        <header className="flex flex-col mt-10">
            <h1 className="text-center font-bold text-xl dark:text-white">Redes Sociais</h1>
        </header>
        <main className="flex flex-col items-center justify-center mt-20">
            <div className="mb-3">
                <a className="flex flex-row" href="https://www.linkedin.com/in/areyousessh/" target="_blank">
                    <Image src={LINKEDIN} alt="linkedin-logo" width={50} height={50}/>
                    <p className="mt-3 font-bold dark:text-white">/Areyousessh</p>
                </a>
            </div>
            <div className="mb-3">
                <a className="flex flex-row" href="https://www.instagram.com/sshwashere/" target="_blank">
                    <Image src={INSTAGRAM} alt="instagram-logo" width={40} height={40}/>
                    <p className="mt-3 ml-1 font-bold dark:text-white">/Sshwashere</p>
                </a>
            </div>
            <div className="mb-3">
                <a className="flex flex-row" href="https://github.com/areyousessh" target="_blank">
                    <Image src={GITHUB} alt="github-logo" width={50} height={50}/>
                    <p className="mt-3 font-bold dark:text-white">/Areyousessh</p>
                </a>
            </div>
        </main>
        </>
    )
}