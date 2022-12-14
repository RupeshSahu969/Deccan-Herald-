import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import sport from "./SportDetails.module.css"
import { FaRegUserCircle } from 'react-icons/fa';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
  } from '@chakra-ui/react'


const SportDetails = () => {
  const [enterDet, setEnterDet] = useState({})
  const {index} = useParams();
  console.log(index,"useparambusiness")

  useEffect(()=>{
    axios.get("https://create-newapi.herokuapp.com/Sports")
    .then((r)=>{
      
        console.log(r)
  
        setEnterDet(r.data[`${index}`])
    })
},[index])
  return (
   
    <div className={sport.enter_container}>
            <div>
    <Breadcrumb>
<BreadcrumbItem>
<BreadcrumbLink href='#'>Home</BreadcrumbLink>
</BreadcrumbItem>

<BreadcrumbItem isCurrentPage>
<BreadcrumbLink href='#'>Sports</BreadcrumbLink>
</BreadcrumbItem>
</Breadcrumb>
</div>
      <div  className={sport.enter_container1} >
      {enterDet.title}
      </div>
      <div  className={sport.enter_container2} >
      <FaRegUserCircle/> {enterDet.author}{", "}{enterDet.publishedAt}
      </div>
      <div  className={sport.enter_container3}>
        <img src={enterDet.urlToImage} alt="" style={{width:"100%"}} />
      </div>
      <div className={sport.enter_container4}>
         <p> {enterDet.description} </p>
         <p></p>
          <p>BTS Leader and rapper RM, in a tearful video released on Tuesday on the ninth anniversary of a group that last year became the first Asian band to win artist of the year at the American Music Awards, said he had "felt guilty and afraid" to ask for th...

               Read more at: https://www.deccanherald.com/entertainment/entertainment-news/k-pop-pioneers-btss-call-to-take-break-leaves-fans-tearful-investors-irate-1118380.html
               </p>
               <p></p>
               <p>Singer Jimin said they were struggling to find their identity in what he called an "exhausting process", while RM also lamented that the K-pop industry could not provide young artists with "time to mature".

            Read more at: https://www.deccanherald.com/entertainment/entertainment-news/k-pop-pioneers-btss-call-to-take-break-leaves-fans-tearful-investors-irate-1118380.html</p>
      </div>
      <div>
        {enterDet.content} 
      
      </div>
    </div>
  )
}

export default SportDetails;