import React from 'react';
import Link from 'next/link';

const BlogCard = (props) => {
    return (
        <div
            id={props.typeof}
            key={props.title}
            className="border-2 flex flex-col rounded-lg shadow-lg overflow-hidden text-white hover:border-purple-300"
        >
                <div className="flex-shrink-0">
                    <Link href={`/posts/${props.slug}`}>
                        <img className="cursor-pointer h-48 w-full object-cover" src={props.coverPhoto.url} alt="Blog post cover photo" />
                    </Link> 
                </div>
                <div className="flex-1 p-4 flex flex-col justify-between">
                    <h4 className='font-semibold text-xl'>{props.title}</h4>
                    <div className="mt-4 flex items-center">
                        <div className="">
                            <p className="text-sm font-medium">
                                <p>{props.author.name}</p>
                            </p>
                            <div className="flex space-x-1 text-sm">
                                <time dateTime={props.datePublished}>{props.datePublished}</time>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default BlogCard;
