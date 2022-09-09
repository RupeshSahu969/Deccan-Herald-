import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'

const Science = () => {
 

  const[data,setData] =useState([])

  useEffect(() => {
    // 0262fcb147b7460fa66ab22d917cb183
  const API = "0262fcb147b7460fa66ab22d917cb183"
    if(data.length === 0){
      axios({
        url: "https://create-newapi.herokuapp.com/Science",
        method: "GET",
      }).then((r) => {
        setData(r.data);
      });


    }
  
  },[]);

  return (
      <>

   
      <div className='container my-3 mx-10'>
  
  {/* <button className='btn btn-primary'
  
    onClick={getNews}
    >India News</button> */}

   
    
      </div>
      <div className='container' style={{marginTop : "100px " }}>
  
      <div className='row'>
         {
          data.map((value) => {
            return (
            
              <div className='col-3' style={{marginRight:"10px"}}>
  
              <div className="card" style={{width:  "18rem",margin: "10px",fontSize:"15px"}}>
                 <img src={value.urlToImage} className="card-img-top" alt="..."/>
                 <div className="card-body" style={{fontsize:""}}>
                   <h5 className="card-title" >{value.title}</h5>
                </div>
      </div>
      
              </div>
            );
          })
         }
  
        </div>
      </div>
      
      
      </>
    );


}

export default Science