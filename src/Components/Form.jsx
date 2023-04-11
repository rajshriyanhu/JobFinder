import React, {useState} from 'react'
import Form1 from './Form1';
import Form2 from './Form2';
import Button from './Button';
import axios from 'axios'

const Form = ({handleOnClose}) => {

    const validation1 = () => {
        if(formData.jobTitle==="" || formData.companyName==="" ||
         formData.industryName==="" || formData.location==="" || formData.remoteType===""
        )return true
        else return false
    }
    const validation2 = () => {
        if(formData.applyType==="" ||   formData.experienceMax==="" || formData.experienceMin==="" || 
        formData.salaryMax==="" || formData.salaryMin==="" || formData.totalEmployee==="")return true
        else return false
    }

    const [page, setPage] = useState(0);
    const [formData, setFormData] = useState({
        jobTitle:"",
        companyName:"",
        industryName:"",
        location:"",
        remoteType:"",
        experienceMin:"",
        experienceMax:"",
        salaryMin:"",
        salaryMax:"",
        totalEmployee:"",
        applyType:"",
    })

    const step = ['1', '2'];
    const button = ['Next','Save']

    const PageDisplay = () => {
        if(page===0){
            return <Form1 formData={formData} setFormData={setFormData} />
        }
        else return <Form2 formData={formData} setFormData={setFormData} />
    }

  return (
    <div className='bg-white rounded h-5/6 w-2/5 sm:w-4/5 p-4'>
        <div className='flex flex-row justify-between p-4 w-100%'>
            <div className='text-xl font-normal'>Create a job</div>
            <div className='text-lg font-bold'>Step {step[page]}</div>
        </div>
        {PageDisplay()}
        <div className='flex justify-end mr-4 mt-14 right-0 static w-100%'>
            <Button type='filled' 
                handleClick={() => {if(page===1){
                    if(validation2()){
                        alert("Fill all madatory Field")
                    }
                    else{
                    axios.post('https://64310aadd4518cfb0e5988ec.mockapi.io/api/v1/getalljob/jobdetails/',formData)
                    .then(res => {
                        handleOnClose()
                        window.location.reload(false)
                    })
                } }
                else{
                    if(validation1()){
                        alert("Fill all madatory Field")
                    }

                    else setPage(page+1)}} 
                }
                customStyles={'py-2 px-4 text-white rounded'}>
                    {button[page]}
                </Button>
            </div>
        </div>
  )
}

export default Form