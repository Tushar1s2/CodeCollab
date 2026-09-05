import React from 'react'

function Header() {
    return (
        <div className='h-[56px] bg-[#08090D] text-[#F5F5F5]'>
            <div className="h-[50px] flex justify-between mx-6 items-center border-b border-[#262936]">

                <div className="flex items-center gap-2 mt-2">
                    <i className="fa-solid fa-code text-2xl text-[#7C3AED]"></i>

                    <h1 className="text-2xl font-semibold tracking-tight">
                        Code<span className="text-[#7C3AED]">Collab</span>
                    </h1>
                </div>
                <div className='flex items-center gap-4'>
                    <i className="fa-solid fa-moon"></i>
                    <div className='flex items-center gap-2'>
                        <div className='flex justify-center items-center h-7 w-7 border rounded-[50%]'>
                            <i className="text-sm fa-solid fa-user"></i>
                        </div>
                        <h2>Tushar</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
