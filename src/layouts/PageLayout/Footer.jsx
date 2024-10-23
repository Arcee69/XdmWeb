import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


import Logo from "../../assets/svg/logo-big.svg"
import LogoB from "../../assets/png/logo_big_mobile.png"
import { FaFacebookF, FaInstagram } from 'react-icons/fa'
import { AiOutlineYoutube } from 'react-icons/ai'
import { BsTwitterX } from 'react-icons/bs'

const Footer = () => {

  const isMobile = window.innerWidth < 760

  return (
    <div className='h-auto lg:h-[478px] flex flex-col '>
      <div className='bg-[#1E1E1E] flex flex-col lg:flex-row lg:item-center justify-between px-5 py-[40px] lg:py-[120px] lg:px-[80px]'>
        <img src={isMobile ? LogoB : Logo} alt='Logo' className='w-[335px] lg:w-[207px] h-[201px]' />
        <div className='grid grid-cols-2 lg:grid-cols-3 mt-[48px] lg:mt-0 gap-[64px]'>
          <div className='flex flex-col gap-4'>
            <p className='text-[#fff] font-libre text-[22px] font-medium'>Company</p>
            <div className='flex flex-col gap-2'>
              <p className='text-[#fff] font-libre text-base font-normal'>Contact Us</p>
              <p className='text-[#fff] font-libre text-base font-normal'>About Us</p>
              <p className='text-[#fff] font-libre text-base font-normal'>Blog</p>
              <p className='text-[#fff] font-libre text-base font-normal'>Gallery</p>
              <p className='text-[#fff] font-libre text-base font-normal'>FAQs</p>
            </div>
          </div>
          <div className='flex flex-col gap-4'>
            <p className='text-[#fff] font-libre text-[22px] font-medium'>Services</p>
            <div className='flex flex-col gap-2'>
              <p className='text-[#fff] font-libre text-base font-normal'>Events</p>
              <p className='text-[#fff] font-libre text-base font-normal'>Booth setup</p>
              <p className='text-[#fff] font-libre text-base font-normal'>Home Supply</p>
              <p className='text-[#fff] font-libre text-base font-normal'>Gifts</p>
              <p className='text-[#fff] font-libre text-base font-normal'>Shop</p>
            </div>
          </div>
          <div className='flex flex-col gap-4'>
            <p className='text-[#fff] font-libre text-[22px] font-medium'>Social Media</p>
            <div className='flex flex-col gap-2'>
              <p className='text-[#fff] font-libre text-base font-normal'>Instagram</p>
              <p className='text-[#fff] font-libre text-base font-normal'>Twitter</p>
              <p className='text-[#fff] font-libre text-base font-normal'>Facebook</p>
            </div>
          </div>

        </div>

      </div>
      <div className='bg-[#851E1E] py-6 px-2 lg:p-2 flex flex-col lg:flex-row items-center justify-center gap-[32px] lg:gap-[119px]'>
        <div className='lg:flex items-center hidden gap-[28px]'>
          <p className='text-[#FEFEFE] font-libre text-xs font-semibold'>© 2024 SMHP Technologies Ltd.  All rights reserved</p>
          <p className='text-[#FEFEFE] font-libre text-xs font-semibold'>Privacy Policy</p>
          <p className='text-[#FEFEFE] font-libre text-xs font-semibold'>Terms of Use</p>
        </div>

        <div className='flex items-center lg:hidden gap-[28px]'>
          <p className='text-[#FEFEFE] font-libre text-xs font-semibold'>Privacy Policy</p>
          <p className='text-[#FEFEFE] font-libre text-xs font-semibold'>Terms of Use</p>
        </div>

        <div className='flex items-center gap-6'>
          <FaInstagram className='text-[#fff] w-6 h-6' />
          <FaFacebookF className='text-[#fff] w-6 h-6' />
          <AiOutlineYoutube className='text-[#fff] w-6 h-6' />
          <BsTwitterX className='text-[#fff] w-6 h-6' />
        </div>

        <p className='text-[#FEFEFE] lg:hidden font-libre text-xs font-semibold'>© 2024 SMHP Technologies Ltd.  All rights reserved</p>

      </div>
    </div>
  )
}

export default Footer