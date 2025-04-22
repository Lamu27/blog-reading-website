import profile from '../../assets/images/profile.png'
import three from '../../assets/images/3.png'
export default function Header() {
  return (
    <div className='flex justify-between p-4 mx-auto w-[1180px]'>
        <h1 className="text-3xl text-blue-900 font-bold">Knowledge Cafe</h1>
        <img className='w-12' src={profile} alt=""/>
        {/* <img  className='w-30 h-30 rounded-full' src={three} alt="" srcset="" /> */}
    </div>
  )
}
