import React, { useState, useEffect, useCallback } from "react";
import ReactDOM from "react-dom/client";

function PasswordGenerator() {
    const [password, setPassword] = useState("");
    const [range, setRange] = useState(4);
    const [number, setNumber] = useState(false);
    const [character, setCharacter] = useState(false);

    const generate = useCallback(() => {
        let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let ans = "";

        if (number) str += "0123456789";
        if (character) str += "!@#$%&^*{}'~`";

        for (let i = 0; i < range; i++) {
            ans += str[Math.floor(Math.random() * str.length)];
        }

        setPassword(ans);
    }, [range, number, character]);

    useEffect(() => {
        generate();
    }, [generate]);

    return (
        <>
            <h1>{password}</h1>

            <div>
                <input
                    type="range"
                    min={4}
                    max={12}
                    value={range}
                    onChange={(e) => setRange(Number(e.target.value))}
                />
                <label> Length ({range})</label>

                <br />

                <input
                    type="checkbox"
                    checked={number}
                    onChange={() => setNumber(!number)}
                />
                <label> Number</label>

                <br />

                <input
                    type="checkbox"
                    checked={character}
                    onChange={() => setCharacter(!character)}
                />
                <label> Character</label>
            </div>
        </>
    );
}

ReactDOM.createRoot(document.getElementById("root")).render(
    <PasswordGenerator />
);