import React from 'react';

const Toolbar = ({ filters, selected, onSelectFilter }) => {
    return (
        <div className="toolbar">
            {filters.map((filter) => (
                <button
                    key={filter}
                    className={filter === selected ? 'btn-filter active' : 'btn-filter'}
                    onClick={() => onSelectFilter(filter)}
                >
                    {filter}
                </button>
            ))}
        </div>
    );
};

export default Toolbar;