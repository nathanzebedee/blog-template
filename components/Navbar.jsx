import React from 'react';
import { Disclosure } from '@headlessui/react'

const Navbar = ({ setOpenContact, setOpenSubscribe }) => {
    return (
        <Disclosure as="nav" className="bg-transparent w-full">
            {({ open }) => (
                <>
                    <div className="max-w-7xl sm:pt-4 mx-auto px-2 sm:px-6 lg:px-8">
                        <div className="relative flex justify-between items-center h-16">
                            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-between">
                                <div className="mt-4 sm:mt-0 flex-shrink-0 flex justify-between items-center w-full sm:w-1/2 px-4 sm:px-0">
                                    <h3 className='text-white font-semibold text-lg sm:text-2xl'>nathan's website 🌚</h3>
                                    {/* MOBILE BUTTONS */}
                                    <div className='sm:hidden'>
                                        <button
                                            onClick={() => setOpenContact(true)}
                                            className='px-4 py-1 rounded-full text-sm sm:text-lg hover:from-gray-300 hover:to-gray-300 font-semibold text-white hover:text-gray-800 border-2 border-gray-300 bg-gradient-to-r from-blue-400 to-purple-400'
                                        >
                                            reach out
                                        </button>
                                        {/* <button
                                            onClick={() => setOpenSubscribe(true)}
                                            className='px-3 py-1 rounded-full text-lg hover:from-gray-300 hover:to-gray-300 font-semibold text-white hover:text-gray-800 border-2 border-gray-300 bg-gradient-to-r from-blue-400 to-purple-400'
                                        >
                                            subscribe
                                        </button> */}
                                    </div>
                                </div>
                                {/* DESKTOP BUTTONS */}
                                <div className="hidden sm:block sm:ml-6">
                                    <div className="flex space-x-4">
                                        <button
                                            onClick={() => setOpenContact(true)}
                                            className='px-3 py-1 rounded-full text-lg font-semibold text-white hover:text-gray-800 hover:from-gray-300 hover:to-gray-300 border-2 border-gray-300 bg-gradient-to-r from-blue-400 to-purple-400'
                                        >
                                            reach out
                                        </button>
                                        {/* <button
                                            onClick={() => setOpenSubscribe(true)}
                                            className='px-3 py-1 rounded-full text-lg font-semibold text-white hover:text-gray-800 hover:from-gray-300 hover:to-gray-300 border-2 border-gray-300 bg-gradient-to-r from-blue-400 to-purple-400'
                                        >
                                            subscribe
                                        </button> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </Disclosure>
    );
};

export default Navbar;
