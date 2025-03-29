import React from 'react';
import { NTU } from '../images/NTU_Logo.png';


function mainbar() {
  return (
    <nav className='h-1/5 row-span-4'>
        <div className='flex bg-white'>
            <img src={ NTU } />
        </div>
        <div>

        </div>
    </nav>
  )
}

export default mainbar;

