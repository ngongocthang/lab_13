import React  from 'react'
import SearchBar from './components/SearchBar'
import ImageList from './components/ImageList'
import { searchPhotos } from './api'
import { useState } from 'react'


const App = () => {
  const [images, setImage] = useState([])
  const handleSearch = async (term) => {
    const photos = await searchPhotos(term)
    setImage(photos)
  }
  return (
    <div>
      <SearchBar functionSearchParent = {handleSearch}/>
      <ImageList images={images}/>
    </div>
  )
}

export default App;

