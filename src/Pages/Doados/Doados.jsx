import S from './doados.module.scss'
import oProtagonista from '../../assets/oProtagonista.png'

export default function Doados(){
    return(
        <section className={S.boxDoados}>
            <h2>Livros Doados</h2>
            <section className={S.boxCard} >
                <article>
                    <img src={oProtagonista} alt="imagem do livro O Protagonista" />
                    <h3>O protagonista</h3>
                    <p>Susanne Andrade</p>
                    <p>Ficção</p>
                </article>
            </section>
        </section>
    )
}