import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
const Nabar = () => {
  return (
    <>
      <div className=" flex flex-row justify-between">
        <div className="text-red-500 flex-row">
            <div className="">
                <img src="" alt="" />
            </div>
            <div className=""></div>
        </div>
        <div className=" flex-row justify-between">
        <FontAwesomeIcon icon={faInstagram} className="text-blue-500" />
        </div>
        <div className="">
            <p>hi</p>
        </div>
      </div>
    </>
  )
}

export default Nabar
