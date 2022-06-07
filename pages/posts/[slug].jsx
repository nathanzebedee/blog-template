import React from 'react';
import { GraphQLClient, gql } from 'graphql-request';

const graphCMS = new GraphQLClient(process.env.REACT_APP_SLUG_URL);

const query = gql`
    query Post($slug: String!) {
        post(where: { slug: $slug }) {
            id, title, slug, datePublished,
            author {
                id, name, avatar { url }
            },
            content { html },
            coverPhoto { id, url }
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
        <main>
            <img src={post.coverPhoto} alt="Post cover photo" />
            <div>
                <div>
                    <h6>By {post.author.name}</h6>
                    <h6>{post.datePublished}</h6>
                </div>
            </div>
            <h2>{post.title}</h2>
            <div
                dangerouslySetInnerHTML={{ __html: post.content.html }}
            ></div>
        </main>
    );
};

export default BlogPost;
