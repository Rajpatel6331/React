import React from 'react'

function Arrayofobj() {
    const array = ["apple", "banana", "orange"];

    const array_obj = [{ id: 1, name: "raj" },
    { id: 2, name: "yash" },
    { id: 3, name: "het" }
    ]
    return (
        <>
            <h2>Array of String : </h2>
            <ul>
                {array.map((i, index) => {
                    return <li key={index}>{i}</li>
                })}
            </ul>

            <h2>Array of object : </h2>
            {array_obj.map((i, index) => {
                return <ul key={index}>
                    <li>Id : {i.id} </li>
                    <li>Name : {i.name}</li>
                </ul>
            })}
        </>
    )
}

export default Arrayofobj
