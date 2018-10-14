import React, { Component } from 'react';
import ElementQuery from 'react-element-query'

const Elemental = (component) => {
    return (
        <ElementQuery sizes={queries}>
            {component}
        </ElementQuery>
    )
}

export default Elemental

const queries = [
    {name: 'tablet', width: 400},
    {name: 'computer', width: 1224}
]