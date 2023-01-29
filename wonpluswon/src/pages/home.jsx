import React, { useState } from 'react';
import Footer from '../Components/Footer'
import { Heading, Select ,Text} from '@chakra-ui/react';
import styles from '../styles/styles.module.css'
 const getData=()=>{
  return fetch(`https://lazy-bandanna-ant.cyclic.app/users/products` ).then((res)=>res.json())
 }

const Home = () => {
  const [data,setData]=useState([])
  const [Loading,setLoading]=useState(false)
   const [filterData,setFilteData]=useState(data)

   
 React.useEffect(()=>{
    
    fetData()
  

 },[])
     const fetData=()=>{
     getData().then((res)=>{
        setLoading(true)
        setData(res)
        // setFilteData(res)
        setLoading(false)
        console.log(res)
      })
     }
     
     const SelectFilter=(filterData)=>{
      setFilteData(filterData)
      console.log(filterData)
     }

       
     if(Loading){
      return <h1>Loading...........</h1>
     }
    
// value={filterData} onChange={event=>SelectFilter(event.target.vlaue)}

  return (
    <div>
     <Select placeholder='All Subject'color={'#DC143C'} value={filterData} onChange={event=>SelectFilter(event.target.value)}>
      <option value='Physics'>Physics</option>
      <option value='Chemistry'>Chemistry</option>
      <option value='Chemistry'>Mathematics</option>
    </Select>
      <div  className={styles.AHome} >
        {data.map((el)=>(
        
        
         <div key={el.id} className={styles.AHome2} >
          <Text fontSize='3xl' color="#b2f5ea">{el.title}</Text>
          <Text fontSize='3xl' color="#b2f5ea">{el.subject}</Text>
         <iframe className={styles.iframe}
          src={el.url}
         
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
            title={el.title} />
         </div>
         
        ))}
      </div>
      <Footer bgColor="#b2f5ea"/>




    </div>
  );
}

export default Home;
