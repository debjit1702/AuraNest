import { Textarea } from '@/components/ui/textarea'
import React from 'react'

function AdditionalReq(additionalRequirmentInput) {
  return (
    <div className='mt-5'>
        <label className='text-gray-400'>Enter Additional Requirments</label>
      <Textarea className="mt-2" onChange={(e)=>additionalRequirmentInput(e.target.value)}/>
    </div>
  )
}

export default AdditionalReq
