import React, { useEffect, useState } from 'react'

import Hamburger from "../../assets/png/hamburger.png"
import Logo from "../../assets/svg/logo.svg"
import MobileNavBar from './MobileNavBar'
import { IoCartOutline } from 'react-icons/io5'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { FiSearch } from 'react-icons/fi'
import { FaRegUser } from 'react-icons/fa6'

const MiniHeader = () => {
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false)
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const navigate = useNavigate()
  const dispatch = useDispatch()

//   const allProducts = useSelector(state => state.allProducts);
//   const productsData = allProducts?.data?.data?.products

//   useEffect(() => {
//     dispatch(fetchAllProducts(text))
// }, [text])

// const handleChange = (e) => {
//   const value = e.target.value;
//   setText(value);

//   // Filter products based on input
//   if (value) {
//       const filtered = productsData?.filter(product =>
//           product.name.toLowerCase().includes(value.toLowerCase())
//       );
//       setFilteredProducts(filtered);
//       setShowSuggestions(true);
//   } else {
//       setShowSuggestions(false);
//   }
// }

// const handleSuggestionClick = (product) => {
//   setText(product.name); // Set input value to selected product
//   setShowSuggestions(false); // Hide suggestions
//   // navigate(`/product/${product.id}`); // Navigate to the selected product's page
// };

//   const getCart = useSelector(state => state.getCart)
//   console.log(getCart, "getCart")
//   const cart = getCart?.data?.data?.cart

  return (
    <div className='w-full fixed z-10'>
        <div className='w-[100%] h-[58px] bg-[#850117] py-[16px] px-[20px] flex justify-between items-center'>
            <img src={Logo} alt='logo' className='h-[32px]' onClick={() => navigate("/")}/>
            <div className='flex items-center gap-2'>
              <FiSearch className='w-[20px] h-[20px] text-[#fff]'/>
              <IoCartOutline className='w-[20px] h-[20px] text-[#fff]'/>
              <FaRegUser className='w-[20px] h-[20px] text-[#fff]'/>
            </div>
            {/* <div className='flex rounded-lg w-[200px] mx-auto border border-[#E1E3E2] p-2 items-center lg:hidden gap-1.5'>
              {/* <FiSearch /> 
              <input 
                  name='search'
                  type='text'
                  placeholder='Search Products'
                  onChange={(e) => handleChange(e)}
                  value={text}
                  className='border-0 font-inter outline-none bg-transparent text-sm text-[#A8ACAB] placeholder-[#A8ACAB]'
              />
              {showSuggestions && filteredProducts?.length > 0 && (
                  <ul className="absolute top-11 z-10 bg-white border border-gray-300 rounded-lg w-[200px] mt-1 shadow-lg max-h-60 overflow-hidden">
                      {filteredProducts?.map((product, index) => (
                          <li
                              key={index}
                              onClick={() => handleSuggestionClick(product)}
                              className="cursor-pointer px-4 text-[#000] py-2 hover:bg-gray-100"
                          >
                              {product.name}
                          </li>
                      ))}
                  </ul>
              )}
          </div> */}
            {/* <div className='flex items-center gap-2'>
              <div className='flex items-center w-[33px] cursor-pointer relative h-[24px] gap-1.5' onClick={() => navigate("/checkout")}>
                <IoCartOutline className='w-[20px] h-[20px] text-[#333333]'/>
                {
                    cart?.length > 0 ?
                    <div className='bg-[#27AE60] w-4 h-4 absolute bottom-5 right-1 rounded-full p-1.5 flex items-center justify-center'> 
                        <p className='text-[#fff] font-inter text-xs font-medium'>{cart?.length}</p>
                    </div>
                    :
                    null
                }
              </div>
              <img src={Hamburger} alt='logo'  className='w-[21px] h-[16px]' onClick={() => setOpen(true)}/>
            </div> */}
        </div>
        {open && <MobileNavBar handleClose={() => setOpen(false)} /> }
    </div>
  )
}

export default MiniHeader