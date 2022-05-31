import React from 'react';
import { GraphQLClient, gql } from 'graphql-request';

const styles = {

};

const graphCMS = new GraphQLClient(
    'https://api-us-east-1.graphcms.com/v2/cl3tb2rglblws01xk5pqwdwo6/master'
);

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
        <main className={styles.blog}>
            <img src={post.coverPhoto} className={styles.cover} alt="Post cover photo" />
            <div className={styles.title}>
                <img src={post.author.avatar.url} alt="Author avatar" />
                <div className={styles.authtext}>
                    <h6>By {post.author.name}</h6>
                    <h6 className={styles.date}>{post.datePublished}</h6>
                </div>
            </div>
            <h2>{post.title}</h2>
            <div
                className={styles.content}
                dangerouslySetInnerHTML={{ __html: post.content.html }}
            ></div>
        </main>
    );
};

export default BlogPost;
