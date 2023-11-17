import React,{useState,useEffect} from 'react'
import getAllAreas from '../services/area/getAll'

function UseAreas(){
  const [areas,setAreas]= useState([])
  const [loading,setLoading]= useState(false)
  useEffect(() => {
    setLoading(true)
    getAllAreas().then(data=> {
      const {areas}= data
      console.log(data)
      if(areas){
        setAreas(areas)
      }
    })
    .finally(()=>{
      setLoading(false)
    })
  }, [])
  return {areas,loading}
}
export default UseAreas