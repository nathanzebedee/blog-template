import React from 'react';
import { GraphQLClient, gql } from 'graphql-request';

const graphCMS = new GraphQLClient(process.env.REACT_APP_SLUG_URL);

const query = gql`
    query Post($slug: String!) {
        post(where: { slug: $slug }) {
            id, title, slug, datePublished,
            author { id, name, avatar { url } },
            content { raw, text, markdown, html },
            coverPhoto { id, url }
            typeof
        }
    }
`;

const sluglist = gql`
    {
        posts {
            slug
        }
    }
`;

export const getStaticPaths = async () => {
    const { posts } = await graphCMS.request(sluglist);
    return {
        paths: posts.map(post => ({ params: { slug: post.slug } })),
        fallback: false
    };
};

export const getStaticProps = async ({ params }) => {
    const slug = params.slug;
    const { post } = await graphCMS.request(query, { slug });
    return { props: { post }, revalidate: 10 };
};

const BlogPost = ({ post }) => {
    return (
        <main className='bg-[#302f3d] min-h-screen'>
            <img
                src={post.coverPhoto.url}
                alt="Post cover photo"
                className='w-full h-40 object-cover'
            />
            <div className='p-10'>
                <div className='flex flex-col text-gray-300'>
                    <h2 className='text-5xl font-semibold tracking-wider pb-4 text-transparent bg-gradient-to-r bg-clip-text from-blue-200 via-pink-300 to-purple-200 '>
                        {post.title}
                    </h2>
                    <div className='text-lg '>
                        <h4 className='font-semibold'>By {post.author.name}</h4>
                        <p className='font-light'>{post.datePublished}</p>
                    </div>
                </div>
                <div className='relative mt-4'>
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300" />
                    </div>
                </div>
                <div className='mt-20 text-lg text-gray-300 break-words'>
                    {
                        post.content.raw.children.map(child => {
                            if (child.type === 'heading-one') {
                                return (
                                    <>
                                        <h1 className='text-3xl text-transparent bg-gradient-to-r bg-clip-text from-blue-200 via-pink-300 to-purple-200 font-semibold mb-2'>
                                            {child.children[0].text}
                                        </h1>
                                    </>
                                );
                            }
                            if (child.type === 'paragraph') {
                                return (
                                    <>
                                        <p className='text-xl w-5/6 lg:w-max'>
                                            {child.children[0].text}
                                        </p><br></br>
                                    </>
                                );
                            }
                            if (child.type === 'block-quote') {
                                return (
                                    <>
                                        <blockquote className='border-l-2 border-pink-600 bg-gradient-to-r from-blue-50 via-pink-100 to-purple-50 px-4 py-1 rounded-lg text-pink-600 italic w-5/6 lg:w-max'>
                                            {child.children[0].text}
                                        </blockquote><br></br>
                                    </>
                                );
                            }
                        })
                    }
                </div>
                <div className='text-gray-300'>
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300" />
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-2 text-xl bg-[#302f3d] text-gray-300">thank you for reading</span>
                        </div>
                    </div>
                    <div className='w-full flex justify-center mt-6'>
                        <button
                            className='py-2 px-4 border-2 rounded-xl border-gray-300 text-lg font-semibold bg-gray-300 text-gray-600 hover:bg-transparent hover:text-gray-300'
                            onClick={() => history.back()}
                        >
                            return to the previous page
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default BlogPost;
