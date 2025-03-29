import React from 'react'
import { NTUSG } from '../assets/NTU_Logo.png'
import { NTU60Year } from '../assets/sg60_ntusg.svg'

function Mainbar() {
  return (
    <div className='w-full h-1/5 grid grid-rows-4 grid-cols-6 font-serif p-5 fixed'>
      <div className='flex flex-col col-span-1 border-2 border-black border-solid bg-white'>
        <img src={ NTUSG } alt='NTU' className='' />
        <ul className='space-x-2'>
          <li>About Us</li>
          <li>Admission</li>
          <li>Education</li>
          <li>Research</li>
          <li>Innovation</li>
          <li>Life at NTU</li>
        </ul>
        <div>
          <img src={ NTU60Year } alt='60yearNTU' className='' />
        </div>
      </div>
      <div className=''>

      </div>
    </div>
  );
}

export default Mainbar;
