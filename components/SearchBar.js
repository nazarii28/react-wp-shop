import React, {useState} from 'react';

const SearchBar = ({onSubmit}) => {
    const [searchQuery, setSearchQuery] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        onSubmit(searchQuery)
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="box-search-sidebar">
                <input type="search" placeholder="Begin typing..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)}/>
                <button type="submit">Search</button>
            </div>
        </form>
    );
};

export default SearchBar;