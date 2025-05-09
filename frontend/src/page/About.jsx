// import React from 'react'
// import Aboutnav from '../component/about/Aboutnav'
// import Aboutmain from '../component/about/Aboutmain'
// import Aboutmid from '../component/about/Aboutmid'
// import Aboutend from '../component/about/Aboutend'
// import Head from '../component/Head'

// const About = () => {
//   return (
//     <>
//      <Head
//         title="About Us - Zumpon"
//         description="Learn more about Zumpon, our mission, our values, and the amazing team behind your favorite e-commerce experience."
//         keywords="About Zumpon, Our Team, Company Mission, E-commerce, Zumpon Info"
//         image="https://yourdomain.com/images/about-us-banner.png"
//         url="https://yourdomain.com/about"
//         author="Zumpon Team"
//       />

// <div>
//         <Aboutnav/>
//         <div class="page-content">
//             <Aboutmain/>
//             <Aboutmid/>
//             <Aboutend/>
//         </div>
      
//     </div>
//     </>
    
//   )
// }

// export default About


// src/pages/About.jsx
import React from 'react'
import Aboutnav from '../component/about/Aboutnav'
import Aboutmain from '../component/about/Aboutmain'
import Aboutmid from '../component/about/Aboutmid'
import Aboutend from '../component/about/Aboutend'
import Head from '../component/DynamicHead'
import DynamicHead from '../component/DynamicHead'

const About = () => {
  return (
    <>
      <DynamicHead
        title="About Us - Zumpon"
        description="Learn more about Zumpon, our mission, our values, and the amazing team behind your favorite e-commerce experience."
        keywords="About Zumpon, Our Team, Company Mission, E-commerce, Zumpon Info"
        image="https://yourdomain.com/images/about-us-banner.png"
        url="https://yourdomain.com/about"
        author="Zumpon Team"
      />

      <div>
        <Aboutnav />
        <div className="page-content">
          <Aboutmain />
          <Aboutmid />
          <Aboutend />
        </div>
      </div>
    </>
  )
}

export default About

