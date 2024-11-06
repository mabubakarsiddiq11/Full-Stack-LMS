import { CourseDrawer } from '@/components/AllDrawer/CourseDrawer'
import { CourseTable } from '@/components/TableData/CourseTable'
import React from 'react'

function page() {
  return (
    <div className='container mx-auto'>
      <div className="flex justify-between items-center my-6">
      <h1 className='text-5xl font-bold text-center'>Courses</h1>
      <CourseDrawer/>

      </div>
    <CourseTable/>
    </div>
  )
}

export default page
