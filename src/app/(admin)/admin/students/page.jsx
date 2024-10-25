import { StudentTable } from '@/components/TableData/StudentTable'
import React from 'react'

function page() {
  return (
    <div className='container mx-auto'>
      <h1 className='text-5xl font-bold text-center'>Hello Student</h1>
      <StudentTable/>
    </div>
  )
}

export default page
