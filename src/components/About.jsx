import React from 'react'

const About = () => {
    return (
        <div name='about' className=' w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
            <div className=' max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className=' text-center pb-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                        About
                    </p>
                </div>
                <p className='text-xl mt-20'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse quibusdam officiis nostrum ullam veniam et quidem ut, vitae officia quis totam eligendi iure iste maxime labore deleniti. Culpa ducimus distinctio iure exercitationem quidem veniam, ab possimus quod, voluptates fuga ipsa aperiam sit atque nobis explicabo aut tempore? Reiciendis, consectetur ad.
                </p>
                <br />
                <p className='text-xl'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero placeat consequatur eum eos nulla officia vel laborum pariatur consequuntur consectetur molestias atque laboriosam obcaecati, dignissimos, omnis nihil alias quasi praesentium asperiores in a recusandae cupiditate accusamus. Odio nesciunt libero officiis sit id? Rerum numquam architecto quia blanditiis inventore sequi laboriosam.
                </p>
            </div>
        </div>
    )
}

export default About