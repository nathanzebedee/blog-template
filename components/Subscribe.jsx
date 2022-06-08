import React, { useEffect, Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { MailIcon } from '@heroicons/react/solid';
import axios from 'axios';

const Subscribe = ({ openSubscribe, setOpenSubscribe, cancelButtonRef }) => {

    const [input, setInput] = useState('');
    const [error, setError] = useState(false);

    useEffect(() => {
        console.log(input);
    }, [input]);

    return (
        <Transition.Root show={openSubscribe} as={Fragment}>
            <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpenSubscribe}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed blur-xl inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed z-10 inset-x-0 inset-y-80 sm:inset-0">
                    <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className="relative bg-gradient-to-r from-blue-100 via-pink-100 to-purple-100 rounded-xl px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full sm:p-6">
                                <div>
                                    <div className="mt-3 text-center sm:mt-5">
                                        <Dialog.Title as="h3" className="text-3xl font-bold tracking-wide leading-6 text-transparent bg-clip-text p-2 bg-gradient-to-r from-blue-500 via-pink-500 to-purple-500">
                                            sign up for the newsletter
                                        </Dialog.Title>
                                        <div className="mt-2">
                                            <p className="text-sm text-gray-500">
                                                if you are interested in learning more about me,
                                                feel free to sign up for the newsletter.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-4 sm:gap-4 flex items-center">
                                    <div className='col-span-3'>
                                        <div className="mt-1 relative rounded-md shadow-sm">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <MailIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                            </div>
                                            <input
                                                type="email"
                                                name="email"
                                                id="email"
                                                onChange={event => setInput(event.currentTarget.value)}
                                                className={
                                                    error
                                                        ? 'focus:ring-red-500 focus:border-red-500 block p-2 w-full pl-10 sm:text-sm border-red-300 rounded-md'
                                                        : 'focus:ring-indigo-500 focus:border-indigo-500 block p-2 w-full pl-10 sm:text-sm border-gray-300 rounded-md'
                                                }
                                                placeholder="you@example.com"
                                            />
                                        </div>
                                    </div>
                                    <button
                                        type="button"
                                        className="ml-4 col-span-1 p-1 sm:p-2 inline-flex justify-center rounded-md sm:rounded-full border-2 border-transparent shadow-sm bg-indigo-600 hover:bg-white hover:text-indigo-600 hover:border-indigo-600 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
                                        onClick={() => setOpenSubscribe(false)}
                                    >
                                        Sign Up
                                    </button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    );
};

export default Subscribe;
