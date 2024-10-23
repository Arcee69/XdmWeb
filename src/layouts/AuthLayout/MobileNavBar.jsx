import React from 'react'



import { useNavigate } from 'react-router-dom'

const MobileNavBar = ({ handleClose }) => {

    const navigate = useNavigate()

  return (
    <div className="fixed top-0 w-[100%] left-0 h-[100vh]" style={{zIndex: 9999}}>
        
    </div>
  )
}

export default MobileNavBar