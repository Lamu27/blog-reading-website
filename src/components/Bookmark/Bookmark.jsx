import PropTypes from "prop-types"

export default function Bookmark({bookmark} ) {
    const {title} = bookmark;
  return (
    <div className="bg-green-100 m-2 p-2 rounded-lg">
        <h3 className="text-lg font-bold text-emerald-950">{title}</h3>
    </div>
    
  )
}

Bookmark.PropTypes = {
    bookmark: PropTypes.object
}