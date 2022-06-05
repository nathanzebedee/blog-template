import React from 'react';
import Link from 'next/link';

const BlogCard = (props) => {
    return (
        <div key={props.title} className="flex flex-col rounded-lg shadow-lg overflow-hidden m-4">
            <div className="flex-shrink-0">
                <Link href={`/posts/${props.slug}`}>
                    <img className="cursor-pointer h-48 w-full object-cover" src={props.coverPhoto.url} alt="Cover photo" />
                </Link>
            </div>
            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <h4 className='font-semibold text-lg'>
                    {props.title}
                </h4>
                <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                        <img className="h-10 w-10 rounded-full" src={props.author.avatar.url} alt="Nathan profile" />
                    </div>
                    <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">
                            <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/nathan-galindo-840835195/' className="hover:underline">
                                {props.author.name}
                            </a>
                        </p>
                        <div className="flex space-x-1 text-sm text-gray-500">
                            <time dateTime={props.datePublished}>{props.datePublished}</time>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogCard;
