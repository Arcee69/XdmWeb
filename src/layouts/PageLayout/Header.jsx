import React, { useState, Fragment, useEffect } from 'react'
import { FiSearch } from "react-icons/fi";
import { IoCartOutline, IoSearchSharp, IoSettingsOutline } from "react-icons/io5";

import { Listbox, Transition } from '@headlessui/react';

import Logo from "../../assets/svg/logo.svg"
import { IoIosArrowDown } from 'react-icons/io';
import { GoStop } from 'react-icons/go';
import { useDispatch, useSelector } from 'react-redux';
import { FaRegUser } from 'react-icons/fa';



const Header = () => {
    const [search, setSearch] = useState("");
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [navigationSelected, setNavigationSelected] = useState(navigation[0])

    

    // const logOutUser = (item) => {
    //     if (item?.name === "Sign Out") {
    //        dispatch(logout())
    //     }
    // }

    // const allProducts = useSelector(state => state.allProducts);
    // const productsData = allProducts?.data?.data?.products

    // const dispatch = useDispatch()
    // const navigate = useNavigate()

    // const data = useSelector(state => state.getCategory);
    // console.log(data, "data")
    // const categories = data?.data?.data?.categories;

      
    //   const [selected, setSelected] = useState(categories);

    // useEffect(() => {
    //     dispatch(fetchAllProducts(text))
    // }, [text])

    // const userLogin = useSelector(state => state.userLogin)
    // const userData = userLogin?.data?.data

    // const getCart = useSelector(state => state.addCartItem)
    // console.log(getCart, "getCart")
    // const cart = getCart?.data

    // const handleChange = (e) => {
    //     const value = e.target.value;
    //     setText(value);

    //     // Filter products based on input
    //     if (value) {
    //         const filtered = productsData?.filter(product =>
    //             product?.name?.toLowerCase().includes(value.toLowerCase())
    //         );
    //         setFilteredProducts(filtered);
    //         setShowSuggestions(true);
    //     } else {
    //         setShowSuggestions(false);
    //     }
    // }

    // const handleSuggestionClick = (product) => {
    //     setText(product.name); // Set input value to selected product
    //     setShowSuggestions(false); // Hide suggestions
    //     // navigate(`/product/${product.id}`); // Navigate to the selected product's page
    // };

    // const handleCheckout = () => {
    //     if(cart?.length > 0) {
    //         navigate("/checkout")
    //     } else {
    //         return null
    //     }
    // }

  return (
    <div className='bg-[#850117] shadow h-[80px] flex items-center justify-between px-[80px] py-[15px]'>
        <div className='flex items-center gap-[42px]'>
            <img src={Logo} alt='Logo' className='cursor-pointer' onClick={() => navigate("/")} />
            <div className='flex items-center gap-[28px]'>
                <p className='font-mulish text-base font-semibold text-[#fff]'>HOME</p>
                <p className='font-mulish text-base font-semibold text-[#fff]'>SHOP</p>
                <p className='font-mulish text-base font-semibold text-[#fff]'>CONTACT US</p>
            </div>
        </div>
        <div className='flex items-center gap-[32px]'>
            <div className='w-[480px] flex items-center rounded-lg p-2 border border-[#DDDFDD] bg-[#F7F8F7]'>
                <input 
                    type='text'
                    name='search'
                    placeholder='Search any item'
                    className='outline-none w-full bg-[#F7F8F7]'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <IoSearchSharp className='w-6 h-6 text-[#555856]'/>
            </div>

            <div className='flex items-center gap-5'>
                <IoCartOutline className='text-[#fff] w-6 h-6' />
                <FaRegUser className='text-[#fff] w-5 h-5' />
                <div className='bg-[#F03134] w-[161px] rounded-lg flex items-center p-2 justify-center'>
                    <p className='font-mulish text-base font-bold text-[#fff]'>LOG IN</p>
                </div>
            </div>

        </div>
      

    </div>
  )
}

export default Header