import React, { useState } from 'react';
import Head from 'next/head';
import { GraphQLClient, gql } from 'graphql-request';

import BlogCard from '../components/BlogCard';
import Header from '../components/Header/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

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

    const [selected, setSelected] = useState('blog');
    const [show, setShow] = useState(false);

    return (
        <>
            <Head>
                <title>Nathan's Blog</title>
                <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>💫</text></svg>" />
            </Head>
            <main className='flex flex-col flex-wrap min-h-screen items-center bg-[#302f3d]'>
                <Navbar 
                    selected={selected} 
                    setSelected={setSelected} 
                />
                <Header />
                {/* <div className='flex flex-wrap justify-around'>
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
                </div> */}
                <Footer />
            </main>
        </>
    );
}

export default Home;
