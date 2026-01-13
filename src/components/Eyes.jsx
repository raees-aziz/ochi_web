import React from 'react'

function Eyes() {
    return (
        <div className='w-full h-screen overflow-hidden'>
            <div className='relative w-full h-full bg-cover bg-center bg-[url("public/image/eye-img.jpg")]'>
                <div className='absolute top-1/2 left-1/2 -translate-x-[50%] flex justify-evenly -translate-y-[50%] w-1/2'>
                {/* left eye */}
                    <div className='w-[15vw] h-[15vw] flex justify-center items-center rounded-full bg-zinc-100'>
                        <div className='w-1/2 h-1/2 bg-black rounded-full flex justify-center items-center'>
                        <div className='line w-full rotate-550 h-8 '>
                        <div className="size-5 bg-zinc-100 rounded-full">

                        </div>
                        </div>
                        </div>
                    </div>
                    {/* right eye */}
                    <div className='w-[15vw] h-[15vw] flex justify-center items-center rounded-full bg-zinc-100'>
                        <div className='w-1/2 h-1/2 bg-black rounded-full flex justify-center items-center'>
                        <div className='line w-full  h-8 '>
                        <div className="size-5 bg-zinc-100 rounded-full">

                        </div>
                        </div>
                        </div>
                    </div>
                 
                </div>

            </div>
        </div>
    )
}

export default Eyes