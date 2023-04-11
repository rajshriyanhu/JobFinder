import React, {useEffect, useState} from 'react'
import Img from '../asset/logo.jpg'
import Button from './Button'
import axios from 'axios'


const Cardholder = () => {


  const [data,setData]=useState([]);
  useEffect(() => {
    axios.get('https://64310aadd4518cfb0e5988ec.mockapi.io/api/v1/getalljob/jobdetails/')
    .then((data) => {
      setData(data.data)
    })
  })

  
  return (
    
      <div className="grid grid-cols-1 md:grid-cols-2 gap-14 py-8 mx-10">
      
      {data.map((item, index) => (
        <div key={index} className="bg-white shadow-md rounded-md p-4">
          <div className='flex flex-start'>
          <div className='h-full p-1 w-10% mr-1'><img className='rounded h-12 w-12 radius-5 ' src={Img} alt='logo'/></div>
          <div className='h-full'>
          <h2 className="text-lg mb-0 text-slate-950 font-medium">{item.jobTitle}</h2>
          <h3 className='mt-0 font-normal'>{item.companyName} - {item.industryName}</h3>
          <h3 className='text-zinc-400 mt-0 mb-3'>{item.location} ({item.remoteType})</h3>
          <p>Part-Time (9:00 am -5:00 pm IST)</p>
          <p>Experience ({item.experienceMin} - {item.experienceMax} years)</p>
          <p>INR (₹) {item.salaryMin} - {item.salaryMax} / Month</p>
          <p>{item.totalEmployee} employees</p>

          {item.id<=4 ?
             <>
             <Button type='filled' customStyles='mt-6 mr-3 semibold py-2 px-4 rounded' >
              Apply Now
            </Button> 
            <Button type='outline' customStyles='mt-6 font-semibold py-2 px-4 rounded' >
              External Apply
            </Button> 
            </> :
            <>
            {item.applyType==='0' ? 
            <Button type='filled' customStyles='mt-6 mr-3 semibold py-2 px-4 rounded' >
              Apply Now
            </Button> :
            <Button type='outline' customStyles='mt-6 font-semibold py-2 px-4 rounded' >
              External Apply
            </Button>
            }
            </>
          }
            
            
        
        
          </div>
          </div>
        </div>
      ))}
    </div>
    
  )
}

export default Cardholder