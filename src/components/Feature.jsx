import React from 'react'

function Feature() {
    return (
        <div className='w-full py-10 '>
            <div className='w-full px-20 border-b-[1px] border-zinc-500 pb-20'>
                <h1 className='text-8xl font-["Neue_Montreal"] tracking-tight '>Featured Project</h1>
            </div>
            <div className='px-20'>
                <div className='cards w-full flex gap-10 mt-10'>
                    {/* left card */}
                    <div className='cardcontainer w-1/2 h-[75vh]'>
                        <div className='card w-full h-full rounded-xl overflow-hidden bg-green-500'>
                            <img className='size-full bg-cover' src="image/project-1.png" alt="" />
                        </div>
                    </div>
                    {/* right card */}
                    <div className='cardcontainer w-1/2 h-[75vh]'>
                        <div className='card w-full h-full rounded-xl overflow-hidden bg-green-500'>
                            <img className='size-full bg-cover' src="image/project-2.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className='cards w-full flex gap-10 mt-10'>
                    {/* left card */}
                    <div className='cardcontainer w-1/2 h-[75vh]'>
                        <div className='card w-full h-full rounded-xl overflow-hidden bg-green-500'>
                            <img className='size-full bg-cover' src="image/project-1.png" alt="" />
                        </div>
                    </div>
                    {/* right card */}
                    <div className='cardcontainer w-1/2 h-[75vh]'>
                        <div className='card w-full h-full rounded-xl overflow-hidden bg-green-500'>
                            <img className='size-full bg-cover' src="image/project-2.png" alt="" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Feature