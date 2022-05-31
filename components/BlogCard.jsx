import React from 'react';
import Link from 'next/link';

const BlogCard = (props) => {

    const styles = {
        card: `bg-white cursor-pointer shadow-2xl m-4 w-64 rounded-2xl rounded-b-xl p-0`,

        imageContainer: ``,
        coverImage: `w-full object-cover rounded-xl rounded-b-none`,

        text: `p-2`,
        datePublished: `text-sm text-gray-500`,
        postTitle: `font-semibold text-lg`,

        details: `mt-4 flex justify-between items-center text-sm`,
        author: `w-12 flex items-center `,
        authorImage: `rounded-full w-8 h-8 mr-2`,
        authorName: ``,
        date: `text-gray-600`,
    };

    return (
        <div key={props.title} className="cursor-pointer flex flex-col rounded-lg shadow-lg overflow-hidden m-4">
            <div className="flex-shrink-0">
                <Link href={`/posts/${props.slug}`}>
                    <img className="h-48 w-full object-cover" src={props.coverPhoto.url} alt="Cover photo" />
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
