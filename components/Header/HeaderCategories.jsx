import React from 'react';

const HeaderCategories = () => {

    const categories = [
        { type: 'Opinions' },
        { type: 'Cybersecurity' },
        { type: 'Blockchain' },
        { type: 'University' }
    ];

    return (
        <div className='grid grid-cols-3 gap-4'>
            {categories.map(category => (
                <div className='cursor-pointer bg-gradient-to-r from-blue-100 to-purple-100 text-[#302f3d] rounded-md h-20 flex justify-center items-center font-bold tracking-wider text-3xl'>
                    <h4>{category.type}</h4>
                </div>
            ))}
        </div>
    );
};

export default HeaderCategories;