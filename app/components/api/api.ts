import React, { useState } from 'react'
import axios from 'axios'
export const  getManagerTeam =async()=> {
    const res =await axios.get('http://127.0.0.1:8000/api/team/get-manager-team?fpl_id=5037001')
    if( res.status ==200){
      
      return res.data
    }

}

export const  getLineUp =async()=> {
  const res =await axios.get('http://127.0.0.1:8000/api/team/get-best-lineup?fpl_id=5037001&gameweek_id=2')
  if( res.status ==200){
    
    return res.data
  }

}

export const  getCaptainVice =async()=> {
  const res =await axios.get('http://127.0.0.1:8000/api/team/get-best-lineup?fpl_id=5037001&gameweek_id=2')
  if( res.status ==200){  
    return res.data
  }
}

export const  getExpectedPoint =async()=> {
  const res =await axios.get('http://127.0.0.1:8000/api/team/get-best-lineup?fpl_id=5037001&gameweek_id=2')
  if( res.status ==200){
    
    return res.data
  }
}

export const  getAllPlayer =async()=> {
  const res =await axios.get('http://127.0.0.1:8000/api/players/get-players')
  if( res.status ==200){
    
    return res.data
  }
}
