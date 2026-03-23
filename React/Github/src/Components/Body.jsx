import { useEffect, useState } from "react";

function Body() {
    const [profile, setProfile] = useState([]);
    const [count, setCount] = useState("");
    const [name, setName] = useState("");

    async function generate(value) {
        try {
            // Username search
            if (typeof value === "string" && value.trim() !== "") {
                const response = await fetch(
                    `https://api.github.com/users/${value}`
                );
                const data = await response.json();

                setProfile([data]); // wrap object into array
            }
            // Number-based random users
            else {
                const random = Math.floor(1 + Math.random() * 10000);
                const response = await fetch(
                    `https://api.github.com/users?since=${random}&per_page=${value || 10}`
                );
                const data = await response.json();

                setProfile(data);
            }
        } catch (error) {
            console.error(error);
            setProfile([]);
        }
    }

    useEffect(() => {
        generate(10); // default load
    }, []);

    return (
        <>
            <div className="Bar">
                <input
                    type="number"
                    className="Search"
                    placeholder="Enter Number"
                    value={count}
                    onChange={(e) => setCount(e.target.value)}
                />
                <button onClick={() => generate(Number(count))}>
                    Search
                </button>

                <input
                    type="text"
                    className="Search"
                    placeholder="Enter Username"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <button onClick={() => generate(name)}>
                    Search
                </button>
            </div>

            <div className="Outer">
                {profile.map((value) => (
                    <div key={value.id} className="card">
                        <img src={value.avatar_url} alt="avatar" />
                        <h2>{value.login}</h2>
                        <a
                            href={value.html_url}
                            target="_blank"
                            rel="noreferrer"
                        >
                            Profile
                        </a>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Body;