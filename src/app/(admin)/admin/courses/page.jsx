import { CourseTable } from '@/components/TableData/CourseTable'
import React from 'react'

function page() {
  return (
    <div className='container mx-auto'>
      <h1 className='text-5xl font-bold text-center'>Hello Courses</h1>

    <CourseTable/>
    </div>
  )
}

export default page
