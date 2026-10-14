'use client'
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
    const [items, setItems] = useState([]);
     useEffect(() => {
        fetch('http://localhost:5000/api/items',{
            method:"POST",
            body:JSON.stringify({name:"Item 1",description:"This is item 1"}),
        })
            .then((res) => res.json())
            .then((data) => setItems(data))
            .catch((err) => console.error('Error fetching data:', err));
    }, []);

    useEffect(() => {
        fetch('http://localhost:5000/api/items')
            .then((res) => res.json())
            .then((data) => setItems(data))
            .catch((err) => console.error('Error fetching data:', err));
    }, []);

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
       <div>
            <h1>Items which is MongoDB</h1>
            <ul>
                {items.map((item:any) => (
                    <li key={item._id}>
                        <h2>{item.name}</h2>
                        <p>{item.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
    </div>
  );
}
