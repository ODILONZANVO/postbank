import { Titre } from "../component/Titre";
import { Caracteristique } from "../component/Caracteristique";
import { Dossier } from "../component/Dossier";
import Contact from "../component/Contact";
export function Page(){
    return(
        <div>
            <p>
                <Titre/>
                <Caracteristique/>
                <Contact/>
                <Dossier/>
            </p>
        </div>
    )
}export default Page;

