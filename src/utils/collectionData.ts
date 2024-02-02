import { getCollection, type CollectionEntry } from 'astro:content';

export const getSortedBlogPosts = async (): Promise<CollectionEntry<'blog'>[]> => {
    return (await getCollection('blog')).sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
};

export const getSortedPostsByTag = async (tag: string): Promise<CollectionEntry<'blog'>[]> => {
    const allPosts = await getSortedBlogPosts();
    return allPosts.filter((post) => post.data.tags.includes(tag));
};
