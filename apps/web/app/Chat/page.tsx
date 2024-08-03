import React from 'react'
import Leftchatpart from '../Components/Chats/Leftchatpart'
import Rightchatpart from '../Components/Chats/Rightchatpart'

const  page :React.FC=() =>{
  return (
    // <div className='Container w-screen h-screen p-5'>
    <div className="chat_cotainer flex h-screen w-screen p-10">
      {/* leftpart */}
      <Leftchatpart />

      {/* rightpart */}
      <Rightchatpart />
    </div>
    // </div>

  )
}

export default page
