export const useArticleDescription = () => {
    const getArticleDescription = (content: string): string => {
        // Extract 100 first characters from content and close tags if not closed properly
        let description = content.substring(0, 90).concat('...');
        let tags = description.match(/<\w+>/g);
        if(tags) {
            let closingTags = tags.map(tag => tag.replace('<', '</'));
            let closingTagsString = closingTags.join('');
            description += closingTagsString;
        }
        return description;
    };
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };
    const dateText = (articleDate: string):string => {
        return new Date(articleDate).toLocaleDateString('fr-FR', options)
    };
    return {getArticleDescription, dateText};
};