import React from 'react'
import { useState, useEffect } from 'react'

const Form = () => {
    const [name, setName] = useState("");
    const [catagory, setcatagory] = useState("");
    const [cost, setCost] = useState("");
    return (
        <form action="" className='bg-slate-700 p-20 m-2 grid gap-4 text-white font-serif text-center rounded-2xl py-30 shadow-2xl'>
            <div className='text-2xl'>
                <label htmlFor="name">Name:</label>
                <input type="text"
                    name='name'
                    id='name'
                    className='ml-2 border rounded-lg bg-white text-black
                    font-medium text-center'
                    value={name}
                    onChange={(e) => setName(e.target.value)}

                />
            </div>
            <div className='text-2xl'>
                <label htmlFor="catagory">Catagory: </label>
                <input type="text"
                    name='catagory'
                    id='catagory'
                    className='ml-2 border rounded-lg bg-white text-black
                    font-medium text-center'
                    value={catagory}
                    onChange={(e) => setcatagory(e.target.value)} />
            </div>
            <div className='text-2xl'>
                <label htmlFor="cost">Money: </label>
                <input type="number"
                    name='cost'
                    id='cost'
                    className='ml-2 border rounded-lg bg-white text-black
                    font-medium text-center'
                    value={cost}
                    onChange={(e) => setCost(e.target.value)} />
            </div>
            <div className='text-2xl'>
                <label htmlFor="expense">Expanse: </label>
                <input type="checkbox"
                    name="checkbox" id="expense"
                    className='ml-2 border rounded-lg bg-white text-black
                    font-medium text-center mr-4'/>
                <label htmlFor="income">Income: </label>
                <input type="checkbox"
                    name="checkbox" id="income"
                    className=' ml-2 border rounded-lg bg-white text-black
                    font-medium text-center'/>
            </div>

            <button type='submit' className='bg-blue-700 p-3 mx-10 text-2xl border rounded-lg shadow-2xl'>Submit</button>
        </form>
    )
}

export default Form