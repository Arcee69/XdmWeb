import React, { useState } from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import { IoLocationOutline } from 'react-icons/io5'
import { FaPlus } from 'react-icons/fa6'
import { Rate } from 'antd';

import Bailey from "../../assets/png/bailey.png"
import Juice from "../../assets/png/juice.png"
import Rampur from "../../assets/png/rampur.png"
import Can from "../../assets/png/can.png"
import Fanta from "../../assets/png/fanta.png"
import BaileySmall from "../../assets/png/bailey-small.png"
import Walker from "../../assets/png/walker.png"
import Royal from "../../assets/png/royal.png"
import Cognac from "../../assets/png/cognac.png"

import Banner from "../../assets/png/banner.png"
import Beer from "../../assets/png/beer.png"
import Soft from "../../assets/png/soft.png"
import Spirits from "../../assets/png/spirits.png"
import Wine from "../../assets/png/wine.png"
import JuiceB from "../../assets/png/juice_b.png"

import Nestle from "../../assets/png/nestle.png"
import BaileyLogo from "../../assets/png/baileys_logo.png"
import Chi from "../../assets/png/chi.png"
import Ciroc from "../../assets/png/ciroc.png"
import Coke from "../../assets/png/coke.png"
import Deer from "../../assets/png/deer.png"
import Glen from "../../assets/png/glen.png"
import Guiness from "../../assets/png/guiness.png"
import Martell from "../../assets/png/martell.png"
import Henessy from "../../assets/png/hennesy.png"

const Home = () => {
  const [search, setSearch] = useState("")

  const brands = [
    {
      id: 1,
      img: Martell,
      name: "Pernot Ricard"
    },
    {
      id: 2,
      img: Coke,
      name: "Coca-cola"
    },
    {
      id: 3,
      img: Henessy,
      name: "Henessey"
    },
    {
      id: 4,
      img: Deer,
      name: "Jaegermeister"
    },
    {
      id: 5,
      img: Ciroc,
      name: "Ciroc"
    },
    {
      id: 6,
      img: BaileyLogo,
      name: "Baileys"
    },
    {
      id: 7,
      img: Guiness,
      name: "Guinness"
    },
    {
      id: 8,
      img: Chi,
      name: "Chi Foods"
    },
    {
      id: 9,
      img: Nestle,
      name: "Nestle"
    },
    {
      id: 10,
      img: Glen,
      name: "William Grant & sons"
    },
  ]

  const drinks = [
    {
      id: 1,
      img: Can,
      title: "Can Drink",
      rate: 4.5,
      price: "$120",
    },
    {
      id: 2,
      img: Fanta,
      title: "Fanta",
      rate: 5,
      price: "$120",
      discount: "$260",
      percent: "-20"
    },
    {
      id: 3,
      img: Can,
      title: "Can Drink",
      rate: 5,
      price: "$120",
      discount: "$260",
      percent: "-20"
    },
    {
      id: 4,
      img: Can,
      title: "Can Drink",
      rate: 5,
      price: "$120",
      discount: "$260",
      percent: "-20"
    },
  ]

  const alcohol = [
    {
      id: 1,
      img: BaileySmall,
      title: "Strawberry Bailey",
      rate: 4.5,
      price: "$120",
    },
    {
      id: 2,
      img: Walker,
      title: "Johnny Walker",
      rate: 5,
      price: "$120",
      discount: "$260",
      percent: "-20"
    },
    {
      id: 3,
      img: Royal,
      title: "Royal",
      rate: 5,
      price: "$120",
      discount: "$260",
      percent: "-20"
    },
    {
      id: 4,
      img: Cognac,
      title: "Cognac",
      rate: 5,
      price: "$120",
      discount: "$260",
      percent: "-20"
    },
  ]

  const products = [
    {
      id: 1,
      img: Can,
      title: "Can Drink",
      rate: 4.5,
      price: "$120",
    },
    {
      id: 2,
      img: Fanta,
      title: "Fanta",
      rate: 5,
      price: "$120",
      discount: "$260",
      percent: "-20"
    },
    {
      id: 3,
      img: Can,
      title: "Can Drink",
      rate: 5,
      price: "$120",
      discount: "$260",
      percent: "-20"
    },
    {
      id: 4,
      img: Can,
      title: "Can Drink",
      rate: 5,
      price: "$120",
      discount: "$260",
      percent: "-20"
    },
    {
      id: 5,
      img: BaileySmall,
      title: "Strawberry Bailey",
      rate: 4.5,
      price: "$120",
    },
    {
      id: 6,
      img: Walker,
      title: "Johnny Walker",
      rate: 5,
      price: "$120",
      discount: "$260",
      percent: "-20"
    },
    {
      id: 7,
      img: Royal,
      title: "Royal",
      rate: 5,
      price: "$120",
      discount: "$260",
      percent: "-20"
    },
    {
      id: 8,
      img: Cognac,
      title: "Cognac",
      rate: 5,
      price: "$120",
      discount: "$260",
      percent: "-20"
    }
  ]

  return (
    <div className='w-full flex flex-col'>
      <div 
        style={{
          backgroundImage: `url(${Banner})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
        }}
        className='h-[480px] w-full flex items-center justify-center gap-[56px]'
      >
          <div className='w-[335px] lg:w-[606px] h-[234px] flex flex-col mt-20 lg:mt-0 mx-auto gap-[40px] lg:gap-[56px]'>
              <p className='font-bold text-[#FFFFFF] text-[32px] leading-[32px] lg:text-[64px] font-libre text-center lg:leading-[64px]'>Drinks delivered to your doorstep</p>
              <div className='flex items-center mx-auto'>
                <div className='w-[208px] lg:w-[463px] h-[42px] lg:h-[50px] p-2 rounded-tl-xl bg-[#F0F2F5] gap-2 rounded-bl-xl flex items-center'>
                  <IoLocationOutline className='text-[#CC0000] w-4 h-5'/>
                  <input 
                    className='bg-[#F0F2F5] font-mulish text-[#98A2B3] text-xs  lg:text-[18px]'
                    name='search'
                    placeholder='Enter the delivery Address'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </div>
                <button 
                  className='bg-[#F03134] rounded-tr-xl rounded-br-xl w-[127px] h-[42px] lg:w-[143px] lg:h-[50px] flex items-center gap-2 p-2'
                  type='button'
                  onClick={() => {}}
                >
                  <p className='font-mulish text-[#FFFFFF] font-bold text-xs lg:text-sm'>SHOP NOW</p>
                  <IoIosArrowForward className='text-[#fff] w-5 h-5' />
                </button>

              </div>
          </div>
      </div>

      <div className='flex flex-col gap-5 lg:gap-[56px] mt-[96px] mx-5 lg:mx-[80px]'>
        <p className='text-left lg:text-center font-libre font-bold text-[18px] lg:text-[24px] text-[#570303]'>Featured Categories</p>
        <div className='flex flex-col lg:flex-row lg:items-center gap-5 '>
          <div className='flex flex-col gap-5'>
            <div 
              style={{
                backgroundImage: `url(${Beer})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
              }}
              className='w-full h-[320px] lg:w-[413px] lg:h-[446px] rounded-lg pt-[226px] pl-[32px] lg:pt-[94px] lg:pl-[48px]'
            >
              <p className='font-libre text-[#fff] font-bold text-[24px] lg:text-[32px]'>Beer</p>
            </div>
            <div 
              style={{
                backgroundImage: `url(${Soft})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
              }}
              className='w-full h-[320px] lg:w-[413px] lg:h-[196px] rounded-lg pt-[226px] pl-[32px] lg:pt-[94px] lg:pl-[48px]'
            >
              <p className='font-libre text-[#fff] font-semibold text-[24px] lg:text-[32px]'>Soft Drinks</p>
            </div>
          </div>
          <div 
            style={{
              backgroundImage: `url(${Spirits})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover"
            }}
            className='w-full h-[320px] lg:w-[413px] lg:h-[662px] rounded-lg flex flex-col pt-[226px] pl-[32px] lg:p-0 lg:items-center lg:justify-center'
          >
            <p className='font-libre text-[#fff] font-semibold text-[24px] lg:text-[32px]'>Spirits</p>
          </div>
          <div className='flex flex-col gap-5'>
            <div
              style={{
                backgroundImage: `url(${Wine})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
              }} 
              className='w-full h-[320px] lg:w-[413px] lg:h-[196px] rounded-lg pt-[226px] pl-[32px] lg:pt-[94px] lg:pl-[48px]'
            >
              <p className='font-libre text-[#fff] font-semibold text-[24px] lg:text-[32px]'>Wine</p>
            </div>
            <div
              style={{
                backgroundImage: `url(${JuiceB})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
              }} 
              className='w-full h-[320px] lg:w-[413px] lg:h-[446px] rounded-lg  pt-[226px] pl-[32px] lg:pt-[350px] lg:pl-[48px]'
            >
              <p className='font-libre text-[#fff] font-bold text-[24px] lg:text-[32px]'>Juices</p>
            </div>
          </div>
        </div>
        <button
          className='bg-[#F03134] flex items-center justify-center p-2 rounded-lg mx-auto w-[224px] h-[50px]'
          type='button'
          onClick={() => {}}
        >
          <p className='text-[#FFFFFF] font-mulish font-bold '>VIEW MORE CATEGORIES</p>
        </button>
      </div>

      <div className='flex flex-col lg:flex-row items-center w-full h-[532px] mt-[68px] lg:mt-[120px]'>
        <p className='font-libre text-[#570303] text-[18px] mb-5 lg:hidden uppercase flex font-medium'>Taste the Tiramisu Twist</p>
        <img src={Bailey} alt='Bailey' className='w-11/12 h-[801px] lg:w-6/12 lg:h-[532px]' />
        <div className='w-11/12 h-[269px] lg:w-6/12 lg:h-[532px] bg-[#1E1E1E] flex flex-col py-[32px] px-5 lg:py-[122px] lg:px-[72px]'>
          <div className='flex flex-col gap-4'>
            <p className='text-[#FF6666] font-mulish text-xs lg:text-base font-semibold'>Limited edition</p>
            <p className='font-libre text-[#FFFFFF] text-[40px] hidden lg:flex font-medium'>Taste the Tiramisu Twist</p>
            <p className='text-sm lg:text-[20px] font-mulish text-[#FFFFFF] '>
              Experience the rich, creamy delight of Baileys Tiramisu Cocktail. 
              A limited-time indulgence that’s perfect for dessert lovers and cocktail enthusiasts alike. 
              Don’t miss out—grab yours today!
            </p>
          </div>
          <button
            type='button'
            className='bg-[#AE2727] w-[162px] h-[44px] mt-6 rounded-lg flex items-center justify-center p-2'
            onClick={() => {}}
          >
            <p className='font-mulish text-[#FFFFFF] text-sm font-bold'>SHOP NOW</p>
          </button>

        </div>

      </div>

      <div className='flex flex-col mt-[56px] lg:mt-[155px] mx-5 lg:mx-[80px] gap-[27px]'>
        <div className='flex items-center justify-between'>
          <p className='font-libre font-bold text-[18px] lg:text-[32px]'>Soft Drinks</p>
          <div className='flex items-center gap-2'>
            <p className='font-mulish text-[#F03134] font-bold text-sm lg:text-base'>View All</p>
            <FaPlus className='w-4 h-4 text-[#F03134]' />
          </div>
        </div>

        <div className='flex items-center gap-[40px]'>
          <img src={Juice} alt='Juice' className='hidden lg:block w-[630px] h-[831px]' />
          <div className='grid grid-cols-2 gap-8'>
            {
              drinks.map((item, index) => (
                <div key={index} className='w-[161px] lg:w-[295px] lg:h-[406px] flex flex-col gap-[17px]'>
                  <div className='w-[161px] h-[163px] lg:w-[268px] lg:h-[295px] border border-8 border-[#F0EEED] rounded-[20px]'> 
                    <img src={item.img} alt='Drinks' className='w-[147px] h-[149px] lg:w-[268px] lg:h-[265px]' />
                  </div>
                  <p className='font-libre text-[#000000] font-semibold text-sm lg:text-[20px]'>{item.title}</p>
                  <div className='flex items-center gap-2'>
                    <Rate allowHalf defaultValue={item.rate} />
                    <p className='text-[#00000099] font-libre text-sm'>{item.rate}</p>
                  </div>
                  <div className='flex items-center gap-1 lg:gap-3'>
                    <p className='font-libre text-[#000000] font-semibold text-[18px] lg:text-[20px]'>{`${item.price}`}</p>
                    {
                      item.discount ? 
                      <p className='font-libre text-[#00000066] font-semibold text-base lg:text-[24px] line-through'>{`${item.discount}`}</p>
                      : 
                      null
                    }
                    {
                      item.percent ? 
                      <div className='bg-[#FF33331A] w-[48px] h-[27px] flex items-center justify-center rounded-lg p-1'>
                        <p className='font-libre text-[#FF3333] text-xs font-medium'>{`${item.percent}%`}</p>
                      </div>
                      : 
                      null
                    }
                  </div>
                </div>
              ))
            }

          </div>

        </div>
      </div>

      <div className='flex flex-col mt-[56px] lg:mt-[155px] mx-5 lg:mx-[80px] gap-[27px]'>
        <div className='flex items-center justify-between'>
          <p className='font-libre font-bold text-[18px] lg:text-[32px]'>Alcohol</p>
          <div className='flex items-center gap-2'>
            <p className='font-mulish text-[#F03134] font-bold text-sm lg:text-base'>Browse All</p>
            <IoIosArrowForward className='w-4 h-4 text-[#F03134]' />
          </div>
        </div>

        <div className='flex items-center gap-[40px]'>
          <div className='grid grid-cols-2 gap-5'>
            {
              alcohol.map((item, index) => (
               <div key={index} className='w-[161px] lg:w-[295px] lg:h-[406px] flex flex-col gap-[17px]'>
                  <div className='w-[161px] h-[163px] lg:w-[268px] lg:h-[295px] border border-8 border-[#F0EEED] rounded-[20px]'> 
                    <img src={item.img} alt='Drinks' className='w-[147px] h-[149px] lg:w-[268px] lg:h-[265px]' />
                  </div>
                  <p className='font-libre text-[#000000] font-semibold text-sm lg:text-[20px]'>{item.title}</p>
                  <div className='flex items-center gap-2'>
                    <Rate allowHalf defaultValue={item.rate} />
                    <p className='text-[#00000099] font-libre text-sm'>{item.rate}</p>
                  </div>
                  <div className='flex items-center gap-1 lg:gap-3'>
                    <p className='font-libre text-[#000000] font-semibold text-[18px] lg:text-[20px]'>{`${item.price}`}</p>
                    {
                      item.discount ? 
                      <p className='font-libre text-[#00000066] font-semibold text-base lg:text-[24px] line-through'>{`${item.discount}`}</p>
                      : 
                      null
                    }
                    {
                      item.percent ? 
                      <div className='bg-[#FF33331A] w-[48px] h-[27px] flex items-center justify-center rounded-lg p-1'>
                        <p className='font-libre text-[#FF3333] text-xs font-medium'>{`${item.percent}%`}</p>
                      </div>
                      : 
                      null
                    }
                  </div>
                </div>
              ))
            }

          </div>
          <img src={Rampur} alt='Rampur' className='hidden lg:block w-[630px] h-[831px]' />
        </div>

      </div>

       <div className='flex flex-col mt-[56px] lg:mt-[155px] mx-5 lg:mx-[80px] gap-[27px]'>
        <div className='flex items-center justify-between'>
          <p className='font-libre font-bold text-[18px] lg:text-[32px]'>Shop by brands</p>
          <div className='flex items-center gap-2'>
            <p className='font-mulish text-[#F03134] font-bold text-sm lg:text-base'>View All</p>
            <IoIosArrowForward className='w-4 h-4 text-[#F03134]' />
          </div>
        </div>

        <div className='grid grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6'>
          {
            brands.map((item, index) => (
              <div className='w-[121px] lg:w-[200px] h-[240px] flex flex-col items-center gap-4' key={index}>
                <img src={item.img} alt='Brands' className='w-full' />
                <p className='font-libre text-[#000000] font-semibold text-xs lg:text-[20px]'>{item.name}</p>
              </div>
            ))
          }
        
        </div>

      </div>

      <div className='flex flex-col mt-[56px] lg:mt-[155px] mx-5 lg:mx-[80px] mb-[134px] gap-[27px]'>
        <div className='flex items-center justify-between'>
          <p className='font-libre font-bold text-[18px] lg:text-[32px]'>Featured  Products</p>
          <div className='flex items-center gap-2'>
            <p className='font-mulish text-[#F03134] font-bold text-sm lg:text-base'>Browse All</p>
            <IoIosArrowForward className='w-4 h-4 text-[#F03134]' />
          </div>
        </div>

        <div className='grid grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-14'>
          {
            products.map((item, index) => (
              <div key={index} className='w-[159px] lg:w-[413px] h-auto flex flex-col gap-[17px]'>
                <div className='w-[159px] lg:w-[380px] h-[163px] lg:h-[298px] bg-[#F0EEED] p-2 rounded-[20px]'> 
                  <img src={item.img} alt='Drinks' className='w-[147px] h-[149px] lg:w-[268px] lg:h-[273px] mx-auto' />
                </div>
                <p className='font-libre text-[#000000] font-semibold text-sm lg:text-[20px]'>{item.title}</p>
                <div className='flex items-center gap-2'>
                  <Rate allowHalf defaultValue={item.rate} />
                  <p className='text-[#00000099] font-libre text-sm'>{item.rate}</p>
                </div>
                <div className='flex items-center gap-3'>
                  <p className='font-libre text-[#000000] font-semibold text-base lg:text-[20px]'>{`${item.price}`}</p>
                  {
                    item.discount ? 
                    <p className='font-libre text-[#00000066] font-semibold text-base lg:text-[24px] line-through'>{`${item.discount}`}</p>
                    : 
                    null
                  }
                  {
                    item.percent ? 
                    <div className='bg-[#FF33331A] w-[48px] h-[27px] flex items-center justify-center rounded-lg p-1'>
                      <p className='font-libre text-[#FF3333] text-xs font-medium'>{`${item.percent}%`}</p>
                    </div>
                    : 
                    null
                  }
                </div>
              </div>
            ))
          }

        </div>
       

      </div>

    </div>
  )
}

export default Home