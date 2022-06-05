import React from 'react';

const HeaderCategories = ({ categoryType, setCategoryType }) => {

    const categories = [
        { type: 'Opinions' },
        { type: 'Cybersecurity' },
        { type: 'Blockchain' },
        { type: 'WebDev' },
        { type: 'University' },
        { type: 'All' }
    ];

    return (
        <div className='grid grid-cols-3 gap-4'>
            {categories.map(category => (
                <div
                    key={category.type}
                    onClick={() => setCategoryType(category.type)}
                    className={`
                        cursor-pointer bg-gradient-to-r from-blue-100 to-purple-100
                        rounded-md h-20 flex justify-center items-center font-bold tracking-wider text-xl
                        md:text-2xl lg:text-3xl hover:from-[#302f3d] hover:to-[#302f3d] hover:text-white hover:border-2
                        ${categoryType === category.type && 'from-[#302f3d] to-[#302f3d] text-gray-50 border-2'} text-[#302f3d]
                    `}
                >
                    <h4>{category.type}</h4>
                </div>
            ))}
        </div>
    );
};

export default HeaderCategories;