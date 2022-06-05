import React, { useState } from 'react';
import Head from 'next/head';
import { GraphQLClient, gql } from 'graphql-request';

import BlogCard from '../components/BlogCard';
import Header from '../components/Header/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ReachOut from '../components/ReachOut';

const graphCMS = new GraphQLClient(process.env.REACT_APP_GRAPH_CMS_API);

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
    const [openContact, setOpenContact] = useState(false)

    return (
        <>
            <Head>
                <title>Nathan's Blog</title>
                <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>💫</text></svg>" />
            </Head>

            <main className='flex flex-col flex-wrap min-h-screen items-center bg-gradient-to-tl from-[#403142] to-[#302f3d]'>
                <Navbar
                    selected={selected}
                    setOpenContact={setOpenContact}
                />
                
                <ReachOut openContact={openContact} setOpenContact={setOpenContact} />

                <Header />

                <section className='text-white w-full p-4'>
                    <div className='m-2 h-max max-w-7xl mx-auto'>
                        <div className='grid grid-cols-3 gap-4'>
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

                <Footer />
            </main>
        </>
    );
}

export default Home;
