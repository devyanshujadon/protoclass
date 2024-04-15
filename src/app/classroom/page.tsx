'use client'
import React from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { useState } from 'react'
import Link from 'next/link'
type Props = {}

function ClassRoom({}: Props) {
  const [roomId, setRoomId] = useState('');



  return (


    <div className='flex justify-center items-center m-16'> 
    
        <Card className='flex justify-center items-center flex-col gap-20 p-10 w-fit'>
        <h1 className='text-2xl'>Join A Class Room</h1>
        <Input className='' type="text" placeholder='Enter Room ID/Name' onChange={(e) => setRoomId(e.target.value)} value={roomId} />
        <Link href={`classroom/${roomId}`}><Button className=' text-white p-2 rounded-md'>Join Classroom</Button></Link>
        </Card>
    </div>
  )
}

export default ClassRoom