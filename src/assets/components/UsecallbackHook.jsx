import React from 'react'
import UsecallbackChild from './UsecallbackChild';
import { useCallback, useState } from 'react';

export default function UsecallbackHook() {

    
    const list = ["Ahmed", "Mohammed", "Ali", "Saad"];

    const [Users, setUsers] = useState(list);

    const filterUsers = useCallback((val) => {
        const filteredUsers = list.filter((e) => e.toLowerCase().includes(val.toLowerCase()));
        setUsers(filteredUsers);

    }, [Users]);


    const changestate = () => {
        const newArr = [...Users];
        newArr.push("test")
        setUsers(newArr);

    }



    return (
        <>
            <h2>UseCallback</h2>
            <div className='container'>
                <UsecallbackChild onChange={filterUsers} />
                <button className='btn btn-primary' onClick={changestate}>changestate</button>


                <div>
                    <ul className="list-group">
                        {Users.map((item, i) => (
                            <li key={i} className="list-group-item">{item}</li>
                        ))}
                    </ul>
                </div>

            </div>

        </>
    )
}
