import React from 'react';
import Head from 'next/head';
import { GraphQLClient, gql } from 'graphql-request';

import BlogCard from '../components/BlogCard';

const graphCMS = new GraphQLClient(
    'https://api-us-east-1.graphcms.com/v2/cl3tb2rglblws01xk5pqwdwo6/master'
);

const query = gql`
    {
        posts {
        id,
        title, 
        datePublished,
        slug,
        content { html },
        author {
            name,
            avatar { url }
        },
        coverPhoto {
            url
        }
    }
    }
`;

export const getStaticProps = async () => {
    const { posts } = await graphCMS.request(query);
    return { props: { posts }, revalidate: 10 };
};

const Home = ({ posts }) => {

    return (
        <>
            <Head>
                <title>Nathan's Blog</title>
                <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>💫</text></svg>" />
            </Head>
            <main className='flex flex-wrap justify-center'>
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
            </main>
        </>
    );
}

export default Home;
