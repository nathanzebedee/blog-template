import React from 'react';

const HeaderAboutMe = () => {
    return (
        <div className='flex flex-col justify-start'>
            <div className='flex justify-between'>
                <img src='NathanPhoto.jpg' className='block sm:hidden rounded-full h-20' />
                <h2 className='text-2xl ml-4 sm:ml-0 sm:text-6xl italic'>
                    your&#39;s truly,{' '}
                    <a href='https://www.linkedin.com/in/nathan-galindo-840835195/'
                        target='_blank'
                        rel='noreferrer'
                        className='border-b-2 border-transparent hover:border-white cursor-pointer text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-pink-200 to-purple-300'
                    >
                        nathan galindo✨
                    </a>
                </h2>
            </div>
            <div className='text-lg mt-8 grid grid-cols-3'>
                <img src='NathanPhoto.jpg' className='hidden sm:block rounded-xl col-span-1' />
                <div className='col-span-3 sm:col-span-2 p-4 pt-0 rounded-xl text-xl'>
                    <p>
                        <span className='text-2xl tracking-wide font-bold underline'>whoami</span><br></br>
                        hello, my name is nathan galindo and i am an honors student
                        studying management information systems and business analytics at <a href='https://www.baylor.edu/' target='_blank' rel='noreferrer' className='underline cursor-pointer hover:text-pink-200'>baylor university</a>.
                        i am a full stack developer with interests in blockchain technology and cybersecurity. i write about
                        student life, my journey as a software engineer, as well as reflections on my personal opinions and experiences.
                        for more information on who i am, <a href='https://drive.google.com/file/d/1oQkg4-7rgaLQHdDlKbmpBSeBffIP_KlP/view?usp=sharing' target='_blank' rel='noreferrer' className='underline hover:text-pink-200'>please refer to my resume</a>.
                    </p>
                    <p className='mt-6'>
                        <span className='text-2xl tracking-wide font-bold underline'>disclaimer</span><br></br>
                        please note that the statements on my blog reflect my personal opinions and do not
                        represent the views or policies of my employer, past or present,
                        or any other organization with which i may be affiliated.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default HeaderAboutMe;
