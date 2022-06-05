import React, { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react'

const ReachOut = ({ openContact, setOpenContact }) => {
    return (
        <Transition.Root show={openContact} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={setOpenContact}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed z-10 inset-0 overflow-y-auto">
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
                            <div className="relative bg-gradient-to-r from-blue-100 via-pink-100 to-purple-100 rounded-xl px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-sm sm:w-full sm:p-6">
                                <div>
                                    <div className="text-center mt-2">
                                        <Dialog.Title as="h3" className="text-3xl font-bold tracking-wide leading-6 text-transparent bg-clip-text p-2 bg-gradient-to-r from-blue-500 via-pink-500 to-purple-500">
                                            let&#39;s get in touch!
                                        </Dialog.Title>
                                        <div className="mt-2">
                                            <p className="text-md text-gray-600">
                                                feel free to contact me via the links below
                                            </p>
                                            <div className='my-6 flex justify-around'>
                                                <a href='https://twitter.com/_zebedee_' target='_blank' rel='noreferrer' alt='twitter icon'>
                                                    <img src='/icons/twitter.png' className='h-8' />
                                                </a>
                                                {/* <a href='' target='_blank' rel='noreferrer' alt='telegram icon'>
                                                    <img src='/icons/telegram.png' className='h-8' />
                                                </a> */}
                                                <a href='https://www.linkedin.com/in/nathan-galindo-840835195/' target='_blank' rel='noreferrer' alt='linkedin icon'>
                                                    <img src='/icons/linkedin.png' className='h-8' />
                                                </a>
                                                <a href='mailto:nathan_galindo1@baylor.edu' target='_blank' rel='noreferrer' alt='email icon'>
                                                    <img src='/icons/email.png' className='h-8' />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-2 sm:mt-8 flex justify-center">
                                    <button
                                        type="button"
                                        className="inline-flex justify-center w-1/3 rounded-full shadow-sm px-4 py-2 border-2 font-bold tracking-wide text-lg border-black bg-black hover:bg-white hover:text-black text-white focus:outline-none focus:ring-2 focus:ring-offset-2 sm:text-sm"
                                        onClick={() => setOpenContact(false)}
                                    >
                                        return
                                    </button>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    );
};

export default ReachOut;
