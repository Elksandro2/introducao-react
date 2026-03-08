import "./CaixaDeTexto.css"

export default function CaixaDeTexto({ placeholder, id }) {
    return <input type="text" id={id} placeholder={placeholder} />
}
