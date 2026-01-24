import React from 'react'
const History = ({ data }) => {
    return (
        <div className='bg-slate-700 p-20 m-2 text-white font-serif text-center rounded-2xl  shadow-2xl'>
            <table >
                <thead className='felx justify-between gap-2 items-center w-full '>
                    <tr>
                        <th>Name</th>
                        <th>Income/Expense</th>
                        <th>Cost</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) =>
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.choice}</td>
                            <td>{item.cost}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}
export default History