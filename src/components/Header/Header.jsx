import profile from '../../assets/images/profile.png'
export default function Header() {
  return (
    <div className='flex justify-between p-4 mx-auto w-[1180px]'>
        <h1 className="text-3xl text-rose-500 font-bold">Knowledge Cafe</h1>
        <img className='w-12' src={profile} alt=""/>
    </div>
  )
}
