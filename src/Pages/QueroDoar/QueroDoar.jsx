import S from'./queroDoar.module.scss'
import book from'../../assets/book.png'

export default function QueroDoar(){
    return(
        <section className={S.boxPrincipal}>
            <section className={S.container}>
            <h2>Por favor, preencha o formulário com suas informações e as informações do Livro</h2>
            <form >
                <div>
                    <img src={book} alt="icone de um livro aberto" />
                    <h3>Informações do Livro</h3>
                </div>

                <input type="text" placeholder='Titulo' />
                <input type="text" placeholder='Categoria'/>
                <input type="text" placeholder='Autor'/>
                <input type="text"placeholder='Link da Imagem' />
                <input type="submit" value="Doar" />

            </form>
            </section>
        </section>
    )
}

