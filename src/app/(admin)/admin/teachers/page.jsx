import { TeachersTable } from '@/components/TableData/TeachersTable'
import React from 'react'

function page() {
  return (
    <div className='container mx-auto'>
      <h1 className='text-5xl font-bold text-center'>Hello Teacher</h1>
      <TeachersTable/>
    </div>
  )
}

export default page
