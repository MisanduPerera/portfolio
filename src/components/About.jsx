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
                <p className='text-xl mt-20 text-center'>
                    I'm Misandu Perera, a friendly and dedicated full stack developer studying for my Bachelor's degree in IT. I'm passionate about learning new skills and am always ready to contribute to any project.
                </p>
                <br />
                <p className='text-xl text-center'>
                    I'm driven to succeed in both my personal and professional life. I take pride in my ability to overcome challenges and am eager to create meaningful work that I can be proud of.
                </p>
            </div>
        </div>
    )
}

export default About