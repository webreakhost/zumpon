import React from 'react'
import Inputwarper from './Inputwarper'
import Mobtab from './Mobtab'

const Mobmenu = () => {
  return (
    <div className="mobile-menu-wrapper">
        <div className="mobile-menu-overlay">

<a href="#" className="mobile-menu-toggle w-icon-hamburger" aria-label="menu-toggle"></a>
        </div>
        <a href="#" className="mobile-menu-close"><i className="close-icon"></i></a>

        <div className="mobile-menu-container scrollable">
            <Inputwarper/>
            <div className="tab">
                <ul className="nav nav-tabs" role="tablist">
                    <li className="nav-item">
                        <a href="#main-menu" className="nav-link active">Main Menu</a>
                    </li>
                    <li className="nav-item">
                        <a href="#categories" className="nav-link">Categories</a>
                    </li>
                </ul>
            </div>
            <div class="tab-content">
                <Mobtab/>


            </div>
        </div>

    </div>
  )
}

export default Mobmenu
