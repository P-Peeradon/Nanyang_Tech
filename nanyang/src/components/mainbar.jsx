import React from 'react'
import { NTUSG } from '../assets/NTU_Logo.png'

function Mainbar() {
  return (
    <div className='w-full h-1/5 flex font-serif p-8'>
      <div className='flex-col border-2 border-black border-solid'>
        <img src={ NTUSG } className='' />
        <ul>
          <li>About Us</li>
          <li>Admission</li>
          <li>Education</li>
          <li>Research</li>
          <li>Innovation</li>
          <li>Life at NTU</li>
        </ul>
      </div>
      <div className='flex-col border-2 border-black border-solid'>

      </div>
    </div>
  );
}

export default Mainbar;
