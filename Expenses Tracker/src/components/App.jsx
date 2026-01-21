import React from 'react'
import Form from './Form'
import History from './History'
const App = () => {
    return (
        <>
            <div className='bg-blue-400 flex justify-center items-center text-2xl py-7 shadow font-bold mask-b-from-neutral-300'>Qasim's Creation</div>

            <div className='flex justify-between items-center gap-2 p-3 text-white'>
                <div className='items-start'>
                    <Form />
                </div>
                <div className=''>
                    <History />
                </div>
            </div>

        </>
    )
}
export default App