import Cardholder from "./Components/Cardholder";
import Nav from "./Components/Nav";
import Img from './asset/logo.jpg'

function App() {
  

  const data = [  
    { image:{Img}, jobTitle: 'UX UI Designer', subtitle:'Great Vibes - Information Technology',address:'Chennai, Tamilnadu, India (In-office)',p1:'Part-Time (9:00 am - 5:00 pm IST)', p2:'Experience (1 - 2years)', p3:'INR (₹) 30,000 - 50,000 / Month', p4: '51-200 emloyees' },
    { image:{Img}, jobTitle: 'Developer', subtitle:'Great Vibes - Information Technology',address:'Chennai, Tamilnadu, India (In-office)',p1:'Part-Time (9:00 am - 5:00 pm IST)', p2:'Experience (1 - 2years)', p3:'INR (₹) 30,000 - 50,000 / Month', p4: '51-200 emloyees' },
    { image:{Img}, jobTitle: 'Interaction Designer', subtitle:'Great Vibes - Information Technology',address:'Chennai, Tamilnadu, India (In-office)',p1:'Part-Time (9:00 am - 5:00 pm IST)', p2:'Experience (1 - 2years)', p3:'INR (₹) 30,000 - 50,000 / Month', p4: '51-200 emloyees' },
    { image:{Img}, jobTitle: 'SEO Analyst', subtitle:'Great Vibes - Information Technology',address:'Chennai, Tamilnadu, India (In-office)',p1:'Part-Time (9:00 am - 5:00 pm IST)', p2:'Experience (1 - 2years)', p3:'INR (₹) 30,000 - 50,000 / Month', p4: '51-200 emloyees' },
  ];

  // useEffect(() => {
  //   axios.post('https://64310aadd4518cfb0e5988ec.mockapi.io/api/v1/getalljob/jobdetails/',data)
  //   .then(res => {
  //     console.log('posted')
  //   })
  // })
  return (
    <>
      <Nav/>
      <div className="container mx-auto bg-slate-300">
        <Cardholder data={data} />
        
      </div>
    </>
  )
}

export default App;
