import React from 'react'
import { useState } from 'react'
const Cost = (props) => {

    return (
        <div className='gird gap-3 rounded-lg'>
            <div className='bg-green-600 p-8 rounded-lg mb-6 mt-2 grid '>Income {props.inco}
            </div>
            <div className='bg-red-600 p-8 rounded-lg '>
                Expenses {props.exp}</div>
        </div>
    )
}

export default Cost