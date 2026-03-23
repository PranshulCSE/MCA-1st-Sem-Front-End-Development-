export default function Decrement({ Counter, SetCounter }) {
    return (
        <button onClick={() => SetCounter(Counter - 1)}></button>
    )
}