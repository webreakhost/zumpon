import React from 'react'
import Tabnav from './Tabnav'
import Tab1 from './Tab1'
import Tab2 from './Tab2'

const populardeprt = () => {
  return (
    <div class="container">
        <h2 class="title justify-content-center ls-normal mb-4 mt-10 pt-1 appear-animate">Popular Departments
        </h2>
        <Tabnav/>
       <div class="tab-content product-wrapper appear-animate">
        <Tab1/>
        {/* <Tab2/> */}
        </div>
    </div>
  )
}

export default populardeprt
