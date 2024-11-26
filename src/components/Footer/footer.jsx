import facebook from '../../assets/facebook.png'
import twitter from '../../assets/twitter.png'
import youtube from '../../assets/youtube.png'
import linkedin from '../../assets/linkedin.png'
import instagram from '../../assets/instagram.png'
import S from './footer.module.scss'


export default function footer(){

    return(
        <footer>
            <section className={S.boxSocial}>
                <h3>4002-8922</h3>
                <div>
                    <a href=""><img src={facebook} alt="Logo do facebook" /></a>
                    <a href=""><img src={twitter} alt="logo do twitter" /></a>
                    <a href=""><img src={youtube} alt="logo do youtube" /></a>
                    <a href=""><img src={linkedin} alt="Logo dolinkedin" /></a>
                    <a href=""><img src={instagram} alt="logo do instagram" /></a>
                </div>
            </section>
            <section>
                <p>Layout desenvolvido pela Vai Na Web para fins educativos - 2024  </p>
            </section>
        </footer>
    )
}