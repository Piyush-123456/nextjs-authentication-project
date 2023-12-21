"use client";
import React, {useEffect, useState} from 'react'
import { UserAuth } from '../context/AuthContext'
import GifGallery from '../Gallery/GifGallery';
const page = () => {
  const { user } = UserAuth();
  const [loading,setLoading] = useState(true);
  useEffect(() => {
    const checkAuthentication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 50));
      setLoading(false);
    }
    checkAuthentication();
  }, [user]);

  return (
    <div className='p-4'>
      {loading?(<p>Loading...</p>):user?(
        <p>
          Welcome, {user.displayName} 
          <GifGallery/>
        </p>
      ):(
      <p>You must be logged into view this page - protected route</p>

      )}

    </div>
  )
}

export default page