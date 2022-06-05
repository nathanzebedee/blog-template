import React, { useState, useEffect } from 'react';

import HeaderNav from './HeaderNav';
import HeaderCategories from './HeaderCategories';
import HeaderAboutMe from './HeaderAboutMe';

const Header = () => {

    const [aboutMe, setAboutMe] = useState(true);
    const [categoryType, setCategoryType] = useState('All');

    // when new category is selected, make api call for blog posts of that category
    useEffect(() => {
        console.log(categoryType);
    }, [categoryType]);

    return (
        <section className='text-white w-full p-4 hidden sm:block'>
            <div className='m-2 rounded-xl border-2 h-max max-w-7xl flex flex-col mx-auto'>
                <HeaderNav aboutMe={aboutMe} setAboutMe={setAboutMe} />
                <div className='m-4'>
                    {aboutMe
                        ? <HeaderAboutMe />
                        : <HeaderCategories categoryType={categoryType} setCategoryType={setCategoryType} />}
                </div>
            </div>
        </section>
    );
}

export default Header;
