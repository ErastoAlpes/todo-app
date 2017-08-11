import React from 'react'

export default props => (
    <header className='page-header text text-primary'>
        <h2>{props.name} <small>{props.small}</small></h2>
    </header>
)