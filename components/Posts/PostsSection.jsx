import React from 'react';

import BlogCard from './BlogCard';

const PostsSection = ({ posts }) => {
    return (
        <section className='text-white w-full p-4'>
            <div className='m-2 h-max max-w-7xl mx-auto'>
                <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
                    {posts.map(post => (
                        <BlogCard
                            key={post.id}
                            slug={post.slug}
                            title={post.title}
                            author={post.author}
                            coverPhoto={post.coverPhoto}
                            datePublished={post.datePublished}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PostsSection;