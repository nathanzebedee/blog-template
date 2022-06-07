import React, { useState, useRef, useEffect } from 'react';
import Head from 'next/head';
import { GraphQLClient, gql } from 'graphql-request';

import Header from '../components/Header/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ReachOut from '../components/ReachOut';
import Subscribe from '../components/Subscribe';
import PostsSection from '../components/Posts/PostsSection';

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
            coverPhoto { url }
            typeof
        }
    }
`;

export const getStaticProps = async () => {
    const { posts } = await graphCMS.request(query);
    return { props: { posts }, revalidate: 10 };
};

const Home = ({ posts }) => {

    const [openContact, setOpenContact] = useState(false);
    const [openSubscribe, setOpenSubscribe] = useState(false);
    const [categoryType, setCategoryType] = useState('all');

    const cancelButtonRef = useRef(null);

    useEffect(() => {
        console.log(categoryType);
    }, [categoryType]);

    return (
        <>
            <Head>
                <title>Nathan's Blog</title>
                <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>💫</text></svg>" />
            </Head>

            <main className='flex flex-col flex-wrap min-h-screen items-center bg-[#302f3d]'>
                <Navbar
                    setOpenContact={setOpenContact}
                    setOpenSubscribe={setOpenSubscribe}
                    cancelButtonRef={cancelButtonRef}
                />
                
                <ReachOut
                    openContact={openContact}
                    setOpenContact={setOpenContact}
                    cancelButtonRef={cancelButtonRef}
                />
                <Subscribe
                    openSubscribe={openSubscribe}
                    setOpenSubscribe={setOpenSubscribe}
                    cancelButtonRef={cancelButtonRef}
                />

                <Header categoryType={categoryType} setCategoryType={setCategoryType} />

                <PostsSection posts={posts} categoryType={categoryType} />

                <Footer />
            </main>
        </>
    );
}

export default Home;
