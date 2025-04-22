import PropTypes from "prop-types"

export default function Bookmark({bookmark} ) {
    const {title} = bookmark;
  return (
    <div className="bg-sky-200 m-2 p-2 rounded-lg ">
        <h3 className="text-xl">{title}</h3>
    </div>
    
  )
}

Bookmark.PropTypes = {
    bookmark: PropTypes.object
}