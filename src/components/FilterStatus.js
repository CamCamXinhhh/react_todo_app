import React from 'react';

const FilterStatus = () => {
    const filterContainer = {
        display: 'flex',
        justifyContent: 'space-evenly',
        alignContent: 'center',

    }

    const btn = {
        minWidth: '90px'
    }
    return (
        <div style={filterContainer}>
            <button style={btn} type="button" className="btn btn-primary">All</button>
            <button style={btn} type="button" class="btn btn-success">Active</button>
            <button style={btn} type="button" class="btn btn-dark">Finished</button>
        </div>
    )
}

export default FilterStatus;