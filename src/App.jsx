import { useEffect, useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [bookmarks,setBookmarks] = useState([]);
  const [readingTime,setReadingTime] = useState(0)

  const handleAddToBookmark = blog => {
    const newBookmark = [...bookmarks,blog];
    setBookmarks(newBookmark);
  }
  const handleMarkAsRead = (id,time) =>{
    const newTime = readingTime + time;
    setReadingTime(newTime)
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(remainingBookmarks);

  }

  return (
    <>
    <Header></Header>
    <div className='md:flex mx-auto w-[1180px] '>
    <Blogs handleAddToBookmark = {handleAddToBookmark} 
    handleMarkAsRead = {handleMarkAsRead}> </Blogs>
    <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>

    </div>
    
    </>
  )
}

export default App
