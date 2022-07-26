import React from 'react'

const GetData = () => {
    const [name, setName] = React.useState("")
    const fetchData = async () => {
        const result = await fetch("/api/hello", {
            method: "POST",
            body: JSON.stringify({ name: "post mahesh" })

        })
        const data = JSON.parse(await result.json())
        console.log(data)
        setName(data.name)
    }
    return (
        <div>
            <p>{name}</p>

            <button onClick={fetchData}>Get Data</button>
        </div>
    )
}

export default GetData