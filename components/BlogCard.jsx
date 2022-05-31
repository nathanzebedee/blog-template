import React from 'react';
import Link from 'next/link';

const BlogCard = (props) => {

    const styles = {
        card: `flex flex-col cursor-pointer shadow-2xl mt-8 m-4 w-1/3 rounded-2xl p-4`,
        imageContainer: `mb-auto`,
        coverPhoto: `w-full object-cover rounded-lg`,
        details: `mt-4 flex justify-between items-center text-sm`,
        author: `w-12 flex items-center `,
        postTitle: `mt-2 font-semibold text-lg`
    };

    return (
        <div className={styles.card}>
            <Link href={`/posts/${props.slug}`}>
                <div className={styles.imageContainer}>
                    <img className={styles.coverPhoto} src={props.coverPhoto.url} alt="Cover photo" />
                </div>
            </Link>
            <div className={styles.text}>
                <h2 className={styles.postTitle}>{props.title}</h2>
                <div className={styles.details}>
                    <div className={styles.author}>
                        <img className='rounded-full' src={props.author.avatar.url} alt="Author avatar" />
                        <h3 className='ml-2'>{props.author.name}</h3>
                    </div>
                    <div className={styles.date}>
                        <h3 className='text-md'>{props.datePublished}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogCard;
