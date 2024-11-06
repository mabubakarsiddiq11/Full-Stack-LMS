import { CourseDrawer } from '@/components/AllDrawer/CourseDrawer'
import {  TeacherTable } from '@/components/TableData/TeacherTable'
import React from 'react'

function page() {
  return (
    <div className='container mx-auto'>
      <h1 className='text-5xl font-bold text-center'>Hello Teacher</h1>
      <CourseDrawer/>
    </div>
  )
}

export default page
