import React, { useEffect } from 'react';

import BlogCard from './BlogCard';

const PostsSection = ({ posts, categoryType }) => {

    useEffect(() => {
        console.log('POSTS');
        posts.map(post => console.log(post.typeof));
        console.log('TYPE', categoryType);
    }, []);

    return (
        <section className='text-white w-full p-4'>
            <div className='flex justify-center mb-10'>
                <h2 className='text-5xl'>
                    <span className='italic text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-pink-200 to-purple-200'>posts</span>
                </h2>
            </div>
            <div className='m-2 h-max max-w-7xl mx-auto'>
                <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
                    {categoryType === 'all' &&
                        posts.map(post => (
                        <BlogCard
                            key={post.id}
                            slug={post.slug}
                            title={post.title}
                            author={post.author}
                            coverPhoto={post.coverPhoto}
                            datePublished={post.datePublished}
                            typeof={post.typeof.typeof}
                        />
                    ))}
                    {categoryType !== 'all' &&
                        posts
                        .filter(post => post.typeof.typeof === categoryType)
                        .map(post => (
                        <BlogCard
                            key={post.id}
                            slug={post.slug}
                            title={post.title}
                            author={post.author}
                            coverPhoto={post.coverPhoto}
                            datePublished={post.datePublished}
                            typeof={post.typeof.typeof}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PostsSection;
