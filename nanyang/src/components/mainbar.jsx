import NTU from '../assets/NTU_Logo.png'
import NTU60Year from '../assets/sg60_ntusg.svg'

function Mainbar() {
  return (
    <>
      <nav className="w-full h-1/5 flex flex-cols border-solid border-black border-2 text-xl">
        <div className="flex flex-row h-3/4 bg-white border-solid items-end">
          <img src={NTU} className='m-2 border-2 border-black' alt='NTUSG' width={300} height={100} />
            <ul className='m-2 px-8 h-fit py-1 flex flex-row border-2 border-black space-x-4 text-black'>
              <li className='bg-red-200'>About Us</li>
              <li>Admissions</li>
              <li>Education</li>
              <li>Research</li>
              <li >Innovation</li>
              <li>Life at NTU</li>
              <li>Alumni</li>
            </ul>
          <img src={NTU60Year} className='border-black border-2 m-2' width={200} height={100}/>
        </div>
      </nav>
      <section className='h-1/4 w-full bg-slate-100 border-black border-2'>
        <p>I love Nanyang</p>
      </section>
    </>
    
  )
}

export default Mainbar;

