import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
    const allPosts = await getCollection('blog');

    const sortedPosts = allPosts.sort((a, b) => b.data.date - a.data.date);

    return rss({
        title: 'Patrick McDermott Official Blog',
        description: 'The official blog of Patrick McDermott',
        customData: '<language>en-us</language>',
        site: context.site,
        items: sortedPosts.map((post) => ({
            title: post.data.title,
            description: post.data.excerpt,
            link: `/blog/${post.slug}`,
            pubDate: post.data.date,
        })),
    });
}
