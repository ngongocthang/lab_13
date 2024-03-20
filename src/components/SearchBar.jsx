import React from 'react'
import { useState } from 'react'
import { searchPhotos } from '../api'

const SearchBar = ({functionSearchParent}) => {
    const [term, setTerm] = useState('')
    const handleChange = (e) => { 
        setTerm(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        functionSearchParent(term)
     
    }
  return (
    <div>
        <div className="container">
            <h3>Enter Search Term</h3>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} type="text" value={term}/>
            </form>
        </div>
    </div>
  )
}

export default SearchBar


