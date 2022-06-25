import { BsGithub } from 'react-icons/bs';
import '../css/intro.css'

function Intro() {
    return (
        <section className="intro vh-100 d-flex justify-content-center align-items-center">
            <div>
                <h4 className="p-0 intro-name text-black">Cody Davis</h4>
                <h1 className="intro-title text-black">Software Developer<a className="intro-link" rel="noreferrer" href="https://github.com/Cozhee" target="_blank"><BsGithub/></a></h1>
            </div>
        </section>
    )
}

export default Intro;