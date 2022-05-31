import React from 'react';

const Header = ({ selected, show }) => {

    return (
        <div className='text-white w-full h-30 p-4'>
            <div className='flex justify-center mt-8'>
                <h1 className='text-center text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-white to-[#c6bafb]'>
                    {
                        (selected === 'blog' && 'welcome to the blog') ||
                        (selected === 'portfolio' && 'welcome to my portfolio') ||
                        (selected === 'about' && 'welcome to my about') ||
                        (selected === 'contact' && 'welcome to my contact')
                    }
                </h1>
            </div>
        </div>
    );
}

export default Header;
