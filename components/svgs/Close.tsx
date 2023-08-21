import React from 'react'

const Close = ({stroke = '#D1D1D1'}) => {
    return (
        <svg
            width='14'
            height='14'
            viewBox='0 0 14 14'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path d='M1 1L13 13M1 13L13 1' stroke={stroke}/>
        </svg>
    )
}

export default Close
