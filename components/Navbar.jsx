import React, { useEffect, useState } from 'react';
import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

const Navbar = ({ selected, setSelected }) => {

    const navigation = [
        { name: 'blog', href: '#', special: false },
        { name: 'about', href: '#', special: false },
        { name: 'contact', href: '#', special: false },
    ];

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ');
    };

    return (
        <Disclosure as="nav" className="bg-transparent w-full">
            {({ open }) => (
                <>
                    <div className="max-w-7xl sm:pt-4 mx-auto px-2 sm:px-6 lg:px-8">
                        <div className="relative flex justify-between items-center h-16">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* MOBILE MENU BUTTON */}
                                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-between">
                                <div className="flex-shrink-0 flex items-center">
                                    <h3 className='text-white font-semibold text-2xl'>
                                        nathan's website 🌚
                                    </h3>
                                </div>
                                {/* DESKTOP MENU */}
                                <div className="hidden sm:block sm:ml-6">
                                    <div className="flex space-x-4">
                                        <button
                                            className='px-3 py-1 rounded-full text-lg font-semibold text-white border-2 border-gray-300 bg-gradient-to-r from-blue-400 to-purple-400'
                                        >
                                            subscribe
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* MOBILE DROPDOWN MENU */}
                    <Disclosure.Panel className="sm:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    aria-current={selected === item.name ? 'page' : undefined}
                                    className={classNames(
                                        selected === item.name ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                        'block px-3 py-2 rounded-md text-base font-medium'
                                    )}
                                >
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
};

export default Navbar;
