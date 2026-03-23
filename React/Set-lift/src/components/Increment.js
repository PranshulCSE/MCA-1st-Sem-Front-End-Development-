export default function Increment({ Counter, SetCounter }) {
    return (
        <button onClick={() => SetCounter(Counter + 1)} ></button>
    )
}