import { BatchDrawer } from '@/components/AllDrawer/BatchDrawer'
import { BatchesTable } from '@/components/TableData/BatchTable'
import React from 'react'

function page() {
  return (
    <div className='container mx-auto mt-4'>
         <div className="flex justify-between items-center my-6">
      <h1 className='text-5xl font-bold text-center'>Batches</h1>
      <BatchDrawer/>

      </div>
      <BatchesTable/>
    </div>
  )
}

export default page

