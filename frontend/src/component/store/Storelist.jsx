import React from 'react'
import Storenav from './Storenav'
import Storehead from './Storehead'
import Storesli from './Storesli'

const Storelist = () => {
  return (
    <div>
        <Storenav/>
        <div class="page-content mb-10 pb-2">
                <div class="container">
                    <Storehead/>
                    <Storesli/>

                </div>
        </div>
      
    </div>
  )
}

export default Storelist
