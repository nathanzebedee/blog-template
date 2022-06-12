import React, { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { SparklesIcon } from '@heroicons/react/outline';

const ReachOut = ({ openContact, setOpenContact, cancelButtonRef }) => {
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
                            <Dialog.Panel className="my-auto relative bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-sm sm:w-full sm:p-6">
                                <div>
                                    <div className="mt-3 text-center sm:mt-5">
                                        <div className='flex items-center justify-center'>
                                            <Dialog.Title as="h3" className="text-xl leading-6 font-medium text-gray-900">
                                                let&#39;s connect!
                                            </Dialog.Title>
                                        </div>
                                        <p className="text-sm text-gray-500 mt-2 mx-5">
                                            feel free to reach out via the links below
                                        </p>
                                    </div>
                                    <div className='my-8 flex justify-around'>
                                        <a href='https://www.linkedin.com/feed/' target='_blank' rel='noreferrer'>
                                            <img src='/icons/linkedin.svg' className='h-8' />
                                        </a>
                                        <a href='https://twitter.com/_zebedee_' target='_blank' rel='noreferrer'>
                                            <img src='/icons/twitter.svg' className='h-8' />
                                        </a>
                                        <a href='mailto:nathan_galindo1@baylor.edu' target='_blank' rel='noreferrer'>
                                            <img src='/icons/email.svg' className='h-8' />    
                                        </a>
                                    </div>
                                    <div className="mt-5 sm:mt-6 justify-center flex">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center w-1/3 rounded-full shadow-sm px-2 py-1 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
                                            onClick={() => setOpenContact(false)}
                                        >
                                            return
                                        </button>
                                    </div>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    );
}

export default ReachOut;
