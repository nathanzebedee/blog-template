import React from 'react';

const HeaderCategories = ({ categoryType, setCategoryType }) => {

    const categories = [
        { type: 'all' },
        { type: 'opinion' },
        { type: 'university' },
        { type: 'webdev' },
        { type: 'cyber' },
        { type: 'blockchain' },
    ];

    return (
        <div className='grid grid-cols-3 gap-4'>
            {categories.map(category => (
                <div
                    key={category.type}
                    onChange={() => console.log('CATEGORY CLICKED')}
                    onClick={() => setCategoryType(category.type)}
                    className={
                        categoryType === category.type
                            ? `flex cursor-pointer border-transparent text-[#302f3d] border-2 border-purple-300 text-purple-300 rounded-md h-20 justify-center items-center font-bold tracking-wider text-sm md:text-2xl lg:text-3xl`
                            : `flex cursor-pointer hover:border-purple-300 hover:text-purple-300 text-white border-2 border-white rounded-md h-20 justify-center items-center font-bold tracking-wider text-sm md:text-2xl lg:text-3xl`
                        }
                >
                    <h4>{category.type}</h4>
                </div>
            ))}
        </div>
    );
};

export default HeaderCategories;