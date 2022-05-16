import React, { useEffect, useState } from 'react'
import Forum from './Forum'
import axios from 'axios'
import { userRequest } from '../requestMethods'

const Forums = () => {
    const [forums, setForums] = useState()
    useEffect(()=> {
        const getForums = async () => {
            try {
                const res = await userRequest.get(`/forums`)
                setForums(res.data)
            } catch(err) {

            }
            
        }
        getForums()
    }, [])
console.log(forums)
  return (
    <div>
    <h2>ONTARIO-SKIN-DISCUSSION FORUM</h2>
        {forums && forums.map((forum) => 
            <Forum key={forum._id} forum={forum}/>

            )}
    </div>
  )
}

export default Forums