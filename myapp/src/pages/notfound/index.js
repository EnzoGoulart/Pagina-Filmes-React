import { Link } from "react-router-dom";
import "./notfound.css"
function NotFound(){
    return(
        <div>
            <p id="numErro">404</p>
            <p id="txtErro">Vejamos... Essa página não existe.</p>
            <Link id="aErro" to="/"><p id="apErro">Voltar para home</p></Link>
        </div>
    )
}
export default NotFound;