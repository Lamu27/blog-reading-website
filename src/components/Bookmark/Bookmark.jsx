import PropTypes from "prop-types"

export default function Bookmark({bookmark} ) {
    const {title} = bookmark;
  return (
    <div className="bg-cyan-100 m-5 p-1 rounded-lg">
        <h3 className="text-lg font-bold text-cyan-950 p-2">{title}</h3>
    </div>
    
  )
}

Bookmark.PropTypes = {
    bookmark: PropTypes.object
}