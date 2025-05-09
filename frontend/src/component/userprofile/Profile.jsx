import React from 'react'
import Dasboard from './Dasboard'
import Acountdet from './Acountdet'

const Profile = () => {
  return (
    <>
    <div class="page-header">
                <div class="container">
                    <h1 class="page-title mb-0">My Account</h1>
                </div>
            </div>
            
            <nav class="breadcrumb-nav">
                <div class="container">
                    <ul class="breadcrumb">
                        <li><a href="demo1.html">Home</a></li>
                        <li>My account</li>
                    </ul>
                </div>
            </nav>
    <div class="page-content pt-2">
                <div class="container">
                    <div class="tab tab-vertical row gutter-lg">
                      {/* <div className='flex justify-center'>
                      <Dasboard/>                                           
                      <Acountdet/>                   
                      </div> */}
                      <div className="flex">
  <div className="w-1/4 hidden lg:block">
  <Dasboard />
  </div>
  <div className="w-3/4 ml-8">
   
    <Acountdet />
  </div>
</div>

                    </div>
            </div>
    </div>
    </>
  )
}

export default Profile
