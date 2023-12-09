

import React from 'react';

const DisplayOptions = ({ groupBy, setGroupBy, sortOption, setSortOption }) => {
    return (
        <div className="display-options">
            <div className="option">
                <label htmlFor="group-by">Group By:</label>
                <select
                    id="group-by"
                    value={groupBy}
                    onChange={(e) => setGroupBy(e.target.value)}
                >
                    <option value="status">Status</option>
                    <option value="user">User</option>
                    <option value="priority">Priority</option>
                </select>
            </div>
            <div className="option">
                <label htmlFor="sort-by">Sort By:</label>
                <select
                    id="sort-by"
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value)}
                >
                    <option value="priority">Priority</option>
                    <option value="title">Title</option>
                </select>
            </div>
        </div>
    );
};

export default DisplayOptions;
