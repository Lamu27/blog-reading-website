import profile from '../../assets/images/profile.png'
export default function Header() {
  return (
    <div className='flex justify-between p-4 mx-auto w-[1180px]'>
        <h1 className="text-3xl text-emerald-950 font-bold">The Travel Logbook</h1>
        <img className='w-12' src={profile} alt=""/>
    </div>
  )
}
