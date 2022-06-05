import React, { useState, useEffect } from 'react';
import { SparklesIcon } from '@heroicons/react/outline';

import HeaderNav from './HeaderNav';
import HeaderCategories from './HeaderCategories';
import HeaderAboutMe from './HeaderAboutMe';

const Header = () => {

    const [aboutMe, setAboutMe] = useState(true);

    return (
        <section className='text-white w-full p-4'>
            <div className='m-2 rounded-xl border-2 h-96 max-w-7xl flex flex-col mx-auto'>
                <HeaderNav setAboutMe={setAboutMe} />
                <div className='m-4'>
                    {aboutMe ? <HeaderAboutMe /> : <HeaderCategories />}
                </div>
            </div>
        </section>
    );
}

export default Header;