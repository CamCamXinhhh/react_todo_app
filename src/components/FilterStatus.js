import React from 'react';

const FilterStatus = ({ changeDisplayFilter }) => {
    const filterContainer = {
        display: 'flex',
        justifyContent: 'space-evenly',
        alignContent: 'center',

    }

    const btn = {
        minWidth: '90px'
    }
    return (
        <div style={filterContainer} className="mb-3">
            <button style={btn} type="button" className="btn btn-primary" onClick={() => { changeDisplayFilter('all') }}>All</button>
            <button style={btn} type="button" className="btn btn-success" onClick={() => { changeDisplayFilter('active') }}>Active</button>
            <button style={btn} type="button" className="btn btn-dark" onClick={() => { changeDisplayFilter('finish') }}>Finished</button>
        </div>
    )
}

export default FilterStatus;