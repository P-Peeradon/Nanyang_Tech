import NTU from '../assets/NTU_Logo.png'

function Mainbar() {
  return (
    <nav className="w-full h-1/5 flex flex-row bg-white ">
      <div className="">
        <div>
          <img src={NTU} alt='NTUSG' width={200} height={150} />
        </div>
        <li className=''></li>
      </div>
      <div></div>
    </nav>
  )
}

export default Mainbar;

