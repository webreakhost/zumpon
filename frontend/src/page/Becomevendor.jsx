import React from 'react'
import Navbarven from '../component/becomevendor/Navbarven'
import Mainsecton from '../component/becomevendor/Mainsecton'
import Endsection from '../component/becomevendor/Endsection'

const Becomevendor = () => {
  return (
    <div>
        <Navbarven/>
        <div class="page-content become-a-vendor">
            <Mainsecton/>
            <Endsection/>
        </div>
      
    </div>
  )
}

export default Becomevendor
