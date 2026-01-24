import React from 'react'
import { useState, useEffect } from 'react'
import History from './History';
import Cost from './Cost';
const Form = () => {
    const [name, setName] = useState("");
    const [catagory, setCatagory] = useState("");
    const [cost, setCost] = useState('');
    const [income, setIncome] = useState(0);
    const [expense, setExpense] = useState(0);
    const [choice, setChoice] = useState('');
    const [allEntries, setAllEntries] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newEntry = { name, cost, choice, id: Date.now() };
        setAllEntries([...allEntries, newEntry]);
        if (choice === 'Income') {
            setIncome(prevIncome => Number(prevIncome) + Number(cost))
        }
        else if (choice === 'Expenses') {
            setExpense(prevExpense => Number(prevExpense) + Number(cost))
        }
        setName('')
        setCatagory('')
        setCost('')
        setChoice('')
    }
    return (
        <div className='flex'>
            <form action="" className='bg-slate-700 p-20 m-2 grid gap-4 text-white font-serif text-center rounded-2xl  shadow-2xl'
                onSubmit={handleSubmit}>
                <div className='text-2xl'>
                    <label htmlFor="name">Name:</label>
                    <input type="text"
                        name='name'
                        id='name'
                        className='ml-2 border rounded-lg bg-white text-black font-medium text-center'
                        value={name}
                        required
                        onChange={(e) => setName(e.target.value)}

                    />
                </div>
                <div className='text-2xl'>
                    <label htmlFor="catagory">Catagory: </label>
                    <input type="text"
                        name='catagory'
                        required
                        id='catagory'
                        className='ml-2 border rounded-lg bg-white text-black
                    font-medium text-center'
                        value={catagory}
                        onChange={(e) => setCatagory(e.target.value)} />
                </div>
                <div className='text-2xl'>
                    <label htmlFor="cost">Money: </label>
                    <input type="number"
                        name='cost'
                        id='cost'
                        required
                        className='ml-2 border rounded-lg bg-white text-black
                    font-medium text-center'
                        value={cost}
                        onChange={(e) => setCost(e.target.value)} />
                </div>
                <div className='text-2xl'>
                    <label htmlFor="expense">Expanse: </label>
                    <input type="radio"
                        name="checkbox" id="expense"
                        checked={choice === 'Expenses'}
                        required
                        className='ml-2 border rounded-lg bg-white text-black font-medium text-center mr-4'
                        value={'Expenses'}
                        onChange={(e) => setChoice(e.target.value)} />
                    <label htmlFor="income">Income: </label>
                    <input type="radio"
                        name="checkbox" id="income"
                        required
                        checked={choice === 'Income'}
                        className=' ml-2 border rounded-lg bg-white text-black font-medium text-center'
                        value={'Income'}
                        onChange={(e) => setChoice(e.target.value)} />
                </div>

                <button type='submit' className='bg-blue-700 p-3 mx-10 text-2xl border rounded-lg shadow-2xl' >Submit</button>
            </form>
            <History data={allEntries} />
            <Cost exp={expense} inco={income} />
        </div>
    )
}

export default Form