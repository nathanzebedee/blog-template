import React, { useState, useEffect } from 'react';

import HeaderNav from './HeaderNav';
import HeaderCategories from './HeaderCategories';
import HeaderAboutMe from './HeaderAboutMe';

const Header = ({ categoryType, setCategoryType }) => {

    const [aboutMe, setAboutMe] = useState(true);

    return (
        <section className='text-white w-full p-4'>
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
