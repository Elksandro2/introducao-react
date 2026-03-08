export default function Botao({ text, onClick, type = "button" }) {
    return <button type={type} onClick={onClick}>{text}</button>
}
