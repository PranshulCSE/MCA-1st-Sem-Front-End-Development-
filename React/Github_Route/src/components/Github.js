import { useEffect, useState } from "react";
import { useParams } from "react-router"


export default function Github(){
    const { name } = useParams();

    const [profile, setprofile] = useState(null);
    async function fetchuser() {
        const res = await fetch(`https://api.github.com/users/${name}`);
        const data = await res.json();
        setprofile(data);
    }
    useEffect(() => {
        fetchuser();
    })

    return(
        <>
        <h1> My Github Profile</h1>
        <div>
            <img src={profile?.avatar_url}></img>
            <h2>{profile?.login}</h2>
        </div>
        </>
    )
}