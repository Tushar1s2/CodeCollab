import React from 'react'
import { useState } from 'react'
import { Link } from "react-router-dom"
function Landing() {
    const [loading,setLoading]=useState(false);
    return (
        <div className='bg-[#08090D] min-h-screen text-[#F5F5F5]'>
            <div className='h-[50px] flex justify-between mx-6 items-center border-b border-[#262936]'>
                <div className='flex items-center gap-1'>
                    <i className="fa-solid fa-code text-[#7C3AED]"></i>
                    <h1>Code<span className='text-[#7C3AED]'>Collab</span></h1>
                </div>
                <div className='flex gap-5'>
                    <p>Features</p>
                    <p>How it works</p>
                    <p>About</p>
                </div>
                <div className='flex gap-1'>
                    <div className='text-sm flex justify-center p-2 rounded-lg hover:bg-[#8B5CF6] w-20'>
                        <button className=''>Login</button>
                    </div>
                    <div className='text-sm flex justify-center p-2 rounded-lg bg-[#7C3AED] hover:bg-[#8B5CF6] w-20'>
                        <Link to="signup">
                            <button className=''>Signup</button>
                        </Link>

                    </div>
                </div>
            </div>
            <div className="mx-10 my-25 text-left">
                <h1 className="text-5xl font-bold leading-none">Save Code.</h1>
                <h1 className="text-5xl font-bold leading-none text-[#7C3AED]">
                    Collaborate Better.
                </h1>
                <div className='w-90 mt-3 text-[#A7AAB4]'>
                    <p>
                        A simple platform to write, save and organise your code.
                        Create rooms, collaborate with others in real-time, and keep track of every change.
                    </p>
                </div>
                <div className='mt-5 flex gap-5'>
                    <div className='flex justify-center p-2 rounded-lg bg-[#7C3AED] hover:bg-[#8B5CF6] w-30'>
                        <button className=''>Get Started</button>
                    </div>
                    <div className='flex p-2 rounded-lg bg-[#08090D] border border-[#7C3AED] w-40 justify-center items-center gap-2'>
                        <i class="fa-solid fa-people-group"></i>
                        <button className=''>Create Room</button>
                    </div>
                </div>
                <div className='mt-13 grid grid-cols-4 gap-2'>
                    <div className="border-r px-2 border-[#262936] flex items-start gap-3">
                        <div className='border w-8 p-2 rounded-lg border-[#7C3AED] bg-[#151821] my-2'>
                            <i className="fa-solid fa-folder text-[#7C3AED]"></i>
                        </div>
                        <div>
                            <h2>Your personal space</h2>
                            <p className='text-sm text-[#A7AAB4]'>
                                Store your code in your personal workspace.Organise
                                projectsand files the way you like.
                            </p>
                        </div>
                    </div>
                    <div className="border-r px-2 border-[#262936] flex items-start gap-3">
                        <div className='border w-8 p-2 rounded-lg border-[#7C3AED] bg-[#151821] my-2'>
                            <i class="fa-solid fa-people-roof"></i>
                        </div>
                        <div>
                            <h2>Collaborative Rooms</h2>
                            <p className='text-sm text-[#A7AAB4]'>
                                Create password-protected rooms and invite others to work on the same code together.
                            </p>
                        </div>
                    </div>
                    <div className="border-r px-2 border-[#262936] flex items-start gap-3">
                        <div className='border w-8 p-2 rounded-lg border-[#7C3AED] bg-[#151821] my-2'>
                            <i class="fa-solid fa-clock-rotate-left"></i>
                        </div>
                        <div>
                            <h2>Change History</h2>
                            <p className='text-sm text-[#A7AAB4]'>
                                Every save is recorded. See who changed what and when.
                            </p>
                        </div>
                    </div>
                    <div className="px-2 flex items-start gap-3">
                        <div className='border w-8 p-2 rounded-lg border-[#7C3AED] bg-[#151821] my-2'>
                            <i class="fa-solid fa-comment"></i>
                        </div>
                        <div>
                            <h2>Room Chat</h2>
                            <p className='text-sm text-[#A7AAB4]'>
                                Talk with your team inside the room while working together.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Landing
