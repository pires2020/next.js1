export default function Navbar () {
    return( 
        <header className=' bg-black h-14 outline p-4 items-center flex flex-row justify-between'>
            <h1 className='text-blue-900 text-3xl pr-[50%]'>Home</h1>
            <div className='text-blue-900 text-2xl flex justify-between w-[600px] p-10'>
            <a href="">About</a>
            <a href="">Docs</a>
            <a href="">Contact</a>
            </div>
            <button className='text-blue-900 outline rounded-full p-3 pt-2'>Start</button>
      </header>
    )
}