import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <div className="footer-nav">
            <div>
                <h5>Monedas Populares</h5>
                <Link to="/currencies/us-dollar">Dolar USA</Link>
                <Link to="/currencies/euro">Euro</Link>
                <Link to="/currencies/swiss-franc">Franco Suizo</Link>
                <Link to="/currencies/british-pound">Libra Esterlina</Link>
                <Link to="/currencies/brazilian-real">Real BR</Link>
                <Link to="/currencies/japanese-yen">Yen</Link>
            </div>
            <div className="container-Info">
                <Link to="/about">Acerca de Nosotros</Link>
                <Link to="/contact">Contactanos</Link>
                <Link to="/questions">Preguntas Frecuentes</Link>
                <Link to="/developers">Desarrolladores</Link>
            </div>
            <div className="container-Social">
                <a href="" target="_blank" rel="nofollow">Whatsapp</a>
                <a href="" target="_blank" rel="nofollw">Facebook</a>
                <a href="" target="_blank" rel="nofollow">Email</a>
            </div>
            <div className="container-Copyright">
                <p className="footer_copyright">Copyright © 2024 PaoloDevX & EmurceDev. All rights reserved.</p>
            </div>


        </div>
    )
}
export default Footer;