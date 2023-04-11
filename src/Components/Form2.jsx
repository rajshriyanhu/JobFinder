
const Form2 = ({formData, setFormData}) => {


  return (

        <div className='pt-8'>
          <form action='#'>

          <div className='flex flex-row justify-start mb-4 px-4'>
            <div className='flex flex-col mb-4 w-full mr-2'>
              <label htmlFor='experienceMin' className='font-bold'>Experience</label>
              <div className="flex flex-row justify-start">
              <input className='mt-2 p-1 w-full mr-2 border-2 border-grey-500 rounded' id='experienceMin' type='text' value={formData.experienceMin} placeholder='Minimun' onChange={(event) => {setFormData({...formData, experienceMin:event.target.value})}}></input>
              <input className='mt-2 p-1 w-full ml-2 border-2 border-grey-500 rounded' id='experienceMax' type='text' value={formData.experienceMax} placeholder='Maximun' onChange={(event) => {setFormData({...formData, experienceMax:event.target.value})}}></input>
              </div>
            </div>
          </div>

          <div className='flex flex-row justify-start mb-4 px-4'>
            <div className='flex flex-col mb-4 w-full mr-2'>
              <label htmlFor='salaryMin' className='font-bold'>Salary</label>
              <div className="flex flex-row justify-start">
              <input className='mt-2 p-1 w-full mr-2 border-2 border-grey-500 rounded' id='salaryMin' type='text' value={formData.salaryMin} placeholder='Minimun' onChange={(event) => {setFormData({...formData, salaryMin:event.target.value})}}></input>
              <input className='mt-2 p-1 w-full ml-2 border-2 border-grey-500 rounded' id='salaryMax' type='text' value={formData.salaryMax} placeholder='Maximun' onChange={(event) => {setFormData({...formData, salaryMax:event.target.value})}}></input>
              </div>
            </div>
          </div>
          
          <div className='flex flex-col mb-4 px-4'>
              <label htmlFor='totalEmployee' className='font-bold'>Total employee</label>
              <input className='mt-2 p-1 border-2 border-grey-500 rounded' id='totalEmployee' value={formData.totalEmployee} type='text' placeholder='ex. 100' onChange={(event) => setFormData({...formData, totalEmployee:event.target.value})}></input>
          </div>
            
          <div className='flex flex-col justify-start mb-4 px-4'>
            <h4 className='font-bold'>Apply type</h4>
            <div className="flex flex-row mt-2 justify-start">
            <input type='radio' name="quickApply" className="form-radio text-gray-500 border-gray-500 text-blue-500 mt-1 h-4 w-4" onChange={() => setFormData({...formData, applyType:'0'})} />
            <label htmlFor='quickApply' className="ml-1 mr-3 mb-11 text-gray-500">Quick Apply</label>
            <input type='radio' name="quickApply" className="form-radio text-gray-500 border-gray-500 text-blue-500 mt-1 h-4 w-4 " onChange={() => setFormData({...formData, applyType:'1'})}/>
            <label htmlFor='quickApply' className="ml-1 mr-3 mb-11 text-gray-500">External Apply</label>
            </div>
          </div>    
            
          </form>
          
        </div>
    
  )
}

export default Form2