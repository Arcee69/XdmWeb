import React, { useState } from 'react'
// import Logo from "../../assets/svg/logo.svg"
// import Close from "../../assets/svg/closeIcon.svg"

import { useNavigate } from 'react-router-dom'
// import { logout } from '../../features/auth/loginSlice'
import { useDispatch } from 'react-redux'
// import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'

const MobileNavBar = ({ handleClose }) => {
    const [showDropdown, setShowDropdown] = useState(false);
    
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const Dropdown = () => {
        setShowDropdown(prev => !prev)
    }

    // const logOutUser = () => {
    //     dispatch(logout())
    // }

  return (
    <div className="fixed top-0 w-[100%] left-0 h-[100vh] animate__animated  animate__bounceInDown animate__slow" style={{zIndex: 9999}}>
        
    </div>
  )
}

export default MobileNavBar