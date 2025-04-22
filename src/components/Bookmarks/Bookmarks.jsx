import PropTypes from "prop-types"
import Bookmark from "../Bookmark/Bookmark"

export default function Bookmarks ( {bookmarks,readingTime} ) {
  return (
    <div className="w-1/3 bg-sky-100 rounded-lg">
        <p className="text-center font-bold mt-2 text-fuchsia-500">Spent Time on read: {readingTime}</p>
        <p className="text-center font-bold text-xl mt-2 text-pink-900">Bookmarked Blogs: {bookmarks.length}</p>
        {
            bookmarks.map((bookmark,idx) => <Bookmark key={idx} bookmark={bookmark} ></Bookmark>)
        }

        
    </div>
  )
}

Bookmarks.PropTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}
