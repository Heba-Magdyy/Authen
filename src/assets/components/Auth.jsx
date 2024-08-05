import React, { useEffect } from 'react'


export default function Auth() {

    const getuser = async () => {
        await fetch('https://dummyjson.com/user/me', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer  ${localStorage.getItem("token")}`,
            },
        })
            .then(res => res.json())
            .then(console.log);
    }
    useEffect(() => { getuser() }, [])


    return (
        <></>
    )
}
