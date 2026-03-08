import Botao from "../button/Botao";
import Senha from "../password/Senha";
import CaixaDeTexto from "../text-box/CaixaDeTexto";

export default function Formulario() {
    const handleSubmit  = () => {
        alert("Dados enviados!")
    }

    const handleCancel  = () => {
        alert("Envio cancelado!")
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <CaixaDeTexto placeholder="Nome do Usuário" id="name" />
                </div>
                <div>
                    <label htmlFor="last-name">Sobrenome:</label>
                    <CaixaDeTexto placeholder="Sobrenome do Usuário" id="last-name" />
                </div>
                <div>
                    <label htmlFor="email">E-mail:</label>
                    <CaixaDeTexto placeholder="E-mail principal" id="email" />
                </div>
                <div>
                    <label htmlFor="password">Senha:</label>
                    <Senha id="password" />
                </div>
                <div>
                    <Botao text="Cancelar" onClick={handleCancel}  />
                    <Botao text="Enviar" type="submit" />
                </div>
            </form>
        </div>
    )
}