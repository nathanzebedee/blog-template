import React, { useEffect } from 'react';
import Link from 'next/link';

const BlogCard = (props) => {

    useEffect(() => {
        console.log(props);
    }, []);

    return (
        <div key={props.title} className="border-2 flex flex-col rounded-lg shadow-lg overflow-hidden text-white">
            <div className="flex-shrink-0">
                <Link href={`/posts/${props.slug}`}>
                    <img className="cursor-pointer h-48 w-full object-cover" src={props.coverPhoto.url} alt="Blog post cover photo" />
                </Link>
            </div>
            <div className="flex-1 p-4 flex flex-col justify-between">
                <Link href={`/posts/${props.slug}`}>
                    <h4 className='font-semibold text-xl hover:underline cursor-pointer'>
                        {props.title}
                    </h4>
                </Link>
                <div className="mt-4 flex items-center">
                    <div className="">
                        <p className="text-sm font-medium">
                            <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/nathan-galindo-840835195/' className="hover:text-pink-200">
                                {props.author.name}
                            </a>
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
