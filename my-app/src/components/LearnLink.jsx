"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React from 'react'

const LearnLink = () => { 
  const router = useRouter()
  const id = 2;
  return (
    <>
      <Link href={"/admin/dashboard"}>Go to Admin Dashboard</Link>
      <Link href={`/user/profile/${id}`}>Go to User Profile</Link>
      <button onClick={()=>router.push(`/user/profile/${id}`)}>Admin Profile</button>
    </>
  )
}

export default LearnLink
