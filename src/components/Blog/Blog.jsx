import PropTypes from 'prop-types';
// import { FaBookmark } from 'react-icons/fa';
import { FaBookmark } from 'react-icons/fa';

export default function Blog ({ blog,handleAddToBookmark,handleMarkAsRead }) {
    const { id, title,cover,reading_time,author_name,author_img,posted_date,hashtags} = blog;
  return (
    <div>
        <img className='w-[720px] h-[340px]' src={cover} alt="" />
        <div className='flex justify-between w-[720px] mt-2'>
            <div className='flex'>
                <img className='w-12' src={author_img} alt="" />
                <div className='ml-3'>
                    <h4 className='text-lg'>{author_name}</h4>
                    <p>{posted_date}</p>
                </div>
            </div>
            <div className=''>
                <span>{reading_time} min read</span>
                <button 
                    onClick={ ()=> handleAddToBookmark(blog)}
                    className='text-red-700 ml-1'>

                    <FaBookmark></FaBookmark>
                </button>
            </div>
        </div>
        <h3 className='text-2xl font-bold text-fuchsia-900'>{title}</h3>
        <p className=''>
            {
                hashtags.map((hash, idx) => <span key={idx}><a href="" className='ml-1'>{hash}</a></span>
                )
            }
        </p>
        <button 
            onClick={ ()=> {handleMarkAsRead(id,reading_time)}}
            className='text-rose-800 underline mb-10'>Mark as Read</button>


    </div>
  )
}

Blog.PropTypes = {
    
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func

}