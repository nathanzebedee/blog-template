import React from 'react';

const HeaderAboutMe = () => {
    return (
        <div className='flex flex-col justify-start'>
            <div className='flex justify-between'>
                <h2 className='text-6xl italic'>
                    your&#39;s truly,{' '}
                    <a href='https://www.linkedin.com/in/nathan-galindo-840835195/' target='_blank' rel='noreferrer' className='border-b-2 border-transparent hover:border-white cursor-pointer text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-pink-200 to-purple-300'>
                        nathan galindo✨
                    </a>
                </h2>
            </div>
            <div className='text-md lg:text-lg mt-8 flex items-center'>
                <img src='NathanPhoto.jpg' className='w-40 h-40 rounded-2xl mr-4' />
                <p>
                    hello, my name is nathan galindo and i am an honors student
                    studying management information systems and business analytics at <a href='https://www.baylor.edu/' target='_blank' rel='noreferrer' className='underline cursor-pointer hover:text-pink-200'>baylor university</a>.
                    i am a full stack developer with interests in blockchain technology and cybersecurity. i write about
                    student life, my journey as a software engineer, as well as reflections on my personal opinions and experiences.
                    {' '}<span className='text-gray-300'>
                        please note that the statements on my blog reflect my personal opinions and do not
                        represent the views or policies of my employer, past or present,
                        or any other organization with which i may be affiliated.
                    </span>
                </p>
            </div>
        </div>
    );
};

export default HeaderAboutMe;
