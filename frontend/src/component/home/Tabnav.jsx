import React from 'react'

const Tabnav = () => {
  return (
    <div className="tab tab-nav-boxed tab-nav-outline appear-animate">
                    <ul className="nav nav-tabs justify-content-center" role="tablist">
                        <li className="nav-item mr-2 mb-2">
                            <a className="nav-link active br-sm font-size-md ls-normal" href="#tab1-1">New arrivals</a>
                        </li>
                        <li className="nav-item mr-2 mb-2">
                            <a className="nav-link br-sm font-size-md ls-normal" href="#tab1-2">Best seller</a>
                        </li>
                        <li className="nav-item mr-2 mb-2">
                            <a className="nav-link br-sm font-size-md ls-normal" href="#tab1-3">most popular</a>
                        </li>
                        <li className="nav-item mr-0 mb-2">
                            <a className="nav-link br-sm font-size-md ls-normal" href="#tab1-4">Featured</a>
                        </li>
                    </ul>
                </div>
  )
}

export default Tabnav
