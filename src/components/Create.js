import React, { useState } from 'react'
import { BiListPlus } from 'react-icons/bi';
import { AppContext, useAppContext } from '../context/appContext';

const Create = () => {
    const {createStudent} = useAppContext(AppContext)

    const [name, setName] = useState('')
    const [edad, setEdad] = useState('')

    const handleSumbit = (e) => {
        e.preventDefault()
        // console.log(name, edad)
        createStudent({id: Date.now(), name, edad})
        setName('')
        setEdad('')
    }




    return (
        //ctrl f after ctrl h for className
        <form onSubmit={handleSumbit}>
            <div className="form-floating mb-3">
                <input 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text" 
                    className="form-control" 
                    placeholder="name" 
                    />
                <label >Name</label>
            </div>
            <div className="form-floating">
                <input 
                    vale={edad}
                    onChange={(e) => setEdad(e.target.value)}
                    type="number" 
                    className="form-control"
                    placeholder="age" />
                <label >Age</label>
            </div>
            <div className="d-grid gap-2 spaceIn">
                <button className="btn btn-outline-success " type="submit" ><BiListPlus className='buton1'/></button>
            </div>
        </form>
    )
}

export default Create