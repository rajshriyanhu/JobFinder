import React from 'react'

const Form1 = ({formData, setFormData}) => {

  return (
        <div className='py-8'>
          <form action='#'>
            <div className='flex flex-col mb-4 px-4'>
              <label htmlFor='jobtitle' className='font-bold'>Job tilte<span className='text-[#D86161]'>*</span></label>
              <input className='mt-2 p-1 border-2 border-grey-500 rounded' value={formData.jobTitle} id='username' type='text' placeholder='ex. UX UI Deisgner' onChange={(event) => setFormData({...formData, jobTitle: event.target.value})}></input>
            </div>
            <div className='flex flex-col mb-4 px-4'>
              <label htmlFor='username' className='font-bold'>Comapny name<span className='text-[#D86161]'>*</span></label>
              <input className='mt-2 p-1 border-2 border-grey-500 rounded' value={formData.companyName} id='companyName' type='text' placeholder='ex. Google' onChange={(event) => setFormData({...formData, companyName: event.target.value})}></input>
            </div>
            <div className='flex flex-col mb-4 px-4'>
              <label htmlFor='industry' className='font-bold'>Industry<span className='text-[#D86161]'>*</span></label>
              <input className='mt-2 p-1 border-2 border-grey-500 rounded' value={formData.industryName} id='industryName' type='text' placeholder='ex. Information Technology' onChange={(event) => setFormData({...formData, industryName: event.target.value})}></input>
            </div>
            <div className='flex flex-row justify-start mb-4 px-4'>
            <div className='flex flex-col mb-4 w-full mr-2'>
              <label htmlFor='location' className='font-bold'>Location</label>
              <input className='mt-2 p-1 border-2 border-grey-500 rounded' id='location' value={formData.location} type='text' placeholder='ex. Chennai' onChange={(event) => setFormData({...formData, location: event.target.value})}></input>
            </div>
            <div className='flex flex-col mb-4 w-full ml-2'>
              <label htmlFor='remoteType' className='font-bold'>Remote Type</label>
              <input className='mt-2 p-1 border-2 border-grey-500 rounded' id='remoteType' value={formData.remoteType} type='text' placeholder='ex. in-office' onChange={(event) => setFormData({...formData, remoteType: event.target.value})}></input>
            </div>
            </div>

          </form>
          
    </div>
    
  )
}

export default Form1