export const formatDate = (date: Date): string => {
    const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };

    return new Date(date).toLocaleDateString(undefined, options);
};

export const capitalize = (str: string): string => {
    if (typeof str !== 'string' || str.length === 0) {
        return str;
    }
    const strArr = str.split(' ');
    return strArr.map((str) => str.charAt(0).toUpperCase() + str.slice(1)).join(' ');
};

export const slugify = (str: string): string => {
    if (!str) return '';
    let slug = str.toLowerCase().trim();
    slug = slug.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    slug = slug.replace(/[^a-z0-9\s-]/g, ' ').trim();
    slug = slug.replace(/[\s-]+/g, '-');

    return slug;
};
