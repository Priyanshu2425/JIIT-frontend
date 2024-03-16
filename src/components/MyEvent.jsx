import { useState, useEffect } from "react"

export default function MyEvent(){
    const [allevents, setAllEvents] = useState("");

    async function getAllevents(){
        let response = await fetch("http://localhost:3000/user/all-events", {
            method: "GET",
            headers: {
                'auth': localStorage.getItem('auth_token'),
                'Content-Type': 'application/json'
            }
        })

        let data = await response.json();
        setAllEvents(data.data.map((item, index)=>{
            return <p key={index} id={item._id}>{item.eventName}</p>
        }));
        console.log(data);
    }

    useEffect(()=>{
        getAllevents();
    }, [])
    return (
        <>

        </>
    )
}