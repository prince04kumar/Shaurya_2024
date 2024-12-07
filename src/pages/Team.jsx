import React from 'react'
import Landing from '../components/Team/Landing';
import Ocs from '../components/Team/Ocs';
import Hcs from '../components/Team/Hcs';
export const Team = () => {
  return (
    <div className='pt-28'>
      <>
        <Landing />
        <Ocs />
        <Hcs />
      </>
    </div>
  )
}
