'use client'

import React from 'react'
import FunctionChooseWidget from '../components/FunctionChooseWidget'
import FunctionSimulateWidget from '@/components/FunctionSimulateWidget'
import { Provider } from 'react-redux'
import store from './store'

const Home = () => {
  return (
    <Provider store={store}>
      <div className='m-8 flex flex-row gap-4'>
        <div className="">
          <FunctionChooseWidget />
        </div>
        <div className="flex-grow">
          <FunctionSimulateWidget />
        </div>
      </div>
    </Provider>

  )
}

export default Home