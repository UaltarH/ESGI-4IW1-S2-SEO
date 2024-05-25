import type {Component} from "vue";
import {type Tag} from "~/data/tag.dto";

export interface Article {
    title: string;
    tags: Tag[];
    content: string;
    icon: Component;
    date: string;
    url: string;
}
export function getLatestArticles(articles: Article[], count: number): Article[] {
    let articlesCopy = articles.slice();
    let finalArticles: Article[] = [];
    let latestDate:{date:Date, title:string}[] = [];
    for(let i = 0; i < count; i++) {
        for(let article of articlesCopy) {
            let date = new Date(article.date);
            let title = article.title;
            if(!latestDate[i]) {
                latestDate[i] = {date, title};
            }
            else if(date > latestDate[i].date) {
                latestDate[i] = {date, title};
            }
        }
        articlesCopy = articlesCopy.filter(article => article.title !== latestDate[i].title);
    }
    for(let latest of latestDate) {
        let article = articles.find(article => article.title === latest.title);
        if(article)
            finalArticles.push(article);
        else
            throw new Error(`Article with title ${latest.title} not found`);
    }
    return finalArticles;
}