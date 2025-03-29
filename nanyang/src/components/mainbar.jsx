import React from 'react'
import { NTUSG } from '../assets/NTU_Logo.png'

function Mainbar() {
  return (
    <>
      <nav className='w-full h-1/5 flex '>
        <div className='flex-col'>
          <img src={ NTUSG } className='' />
          <ul>
            <li>Nanyang</li>
          </ul>
        </div>
        <div className=''>

        </div>
      </nav>
    </>
  );
}

export default Mainbar;
