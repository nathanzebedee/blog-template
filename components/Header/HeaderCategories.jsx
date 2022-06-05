import React from 'react';

const HeaderCategories = () => {

    const categories = [
        { type: 'Opinions' },
        { type: 'Cybersecurity' },
        { type: 'Blockchain' },
        { type: 'WebDev' },
        { type: 'University' },
        { type: 'All' }
    ];

    const handleSelectCategory = category => {
        console.log(category.type);
    };  

    return (
        <div className='grid grid-cols-3 gap-4'>
            {categories.map(category => (
                <div
                    key={category.type}
                    onClick={() => handleSelectCategory(category)}
                    className={`
                        cursor-pointer bg-gradient-to-r from-blue-100 to-purple-100 text-[#302f3d]
                        rounded-md h-20 flex justify-center items-center font-bold tracking-wider text-xl
                        md:text-2xl lg:text-3xl hover:from-[#302f3d] hover:to-[#302f3d] hover:text-white hover:border-2
                    `}
                >
                    <h4>{category.type}</h4>
                </div>
            ))}
        </div>
    );
};

export default HeaderCategories;