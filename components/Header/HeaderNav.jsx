import React from 'react';
import { CollectionIcon, UserCircleIcon } from '@heroicons/react/outline';

const HeaderNav = ({ setAboutMe }) => {
    return (
        <div className='flex items-center w-full h-14 border-b-2 text-lg'>
            <div className='flex justify-between w-full items-center px-4'>
                <div className='flex'>
                    <button
                        className='flex items-center justify-between tracking-wide font-semibold cursor-pointer hover:text-pink-200'
                        onClick={() => setAboutMe(true)}
                    >
                        <span className='w-5 h-5 mr-1'><UserCircleIcon /></span>
                        <div>about me</div>
                    </button>

                    <button
                        className='flex items-center justify-between ml-4 tracking-wide font-semibold cursor-pointer hover:text-pink-200'
                        onClick={() => setAboutMe(false)}
                    >
                        <span className='w-5 h-5 mr-1'><CollectionIcon /></span>
                        <div>categories</div>
                    </button>
                </div>
                <div>
                    <h1 className='font-semibold text-xl text-transparent text-center bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300'>
                        welcome to the blog!
                    </h1>
                </div>
            </div>
        </div>
    );
}

export default HeaderNav;