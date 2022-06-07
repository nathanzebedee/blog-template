import React from 'react';

const HeaderCategories = ({ categoryType, setCategoryType }) => {

    const categories = [
        { type: 'All' },
        { type: 'Opinions' },
        { type: 'University' },
        { type: 'WebDev' },
        { type: 'Cyber' },
        { type: 'Blockchain' },
    ];

    return (
        <div className='grid grid-cols-3 gap-4'>
            {categories.map(category => (
                <div
                    key={category.type}
                    onClick={() => setCategoryType(category.type)}
                    className={
                        categoryType === category.type
                            ? `flex cursor-pointer text-[#302f3d] border-2 border-transparent bg-gradient-to-r from-blue-100 to-purple-100 rounded-md h-20 justify-center items-center font-bold tracking-wider text-sm md:text-2xl lg:text-3xl`
                            : `flex cursor-pointer text-gray-300 border-2 border-white rounded-md h-20 justify-center items-center font-bold tracking-wider text-sm md:text-2xl lg:text-3xl`
                        }
                >
                    <h4>{category.type}</h4>
                </div>
            ))}
        </div>
    );
};

export default HeaderCategories;