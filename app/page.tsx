import React from 'react'
import FunctionChooseWidget from '../components/FunctionChooseWidget'
import FunctionSimulateWidget from '@/components/FunctionSimulateWidget'


const Home = () => {
  return (
    <div className='m-8 grid grid-cols-[1fr,2fr] h-screen gap-4'>
      <FunctionChooseWidget />
      <FunctionSimulateWidget/>
    </div>
  )
}

export default Home