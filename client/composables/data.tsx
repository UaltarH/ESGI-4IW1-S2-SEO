import type {Article} from "~/data/article.dto";
import logo from "@/components/icons/logo.vue";
import Tag from "@/components/icons/tag.vue";
import Tutorial from "~/components/icons/tutorial.vue";
import {TagType} from "~/data/tag.dto";

export const articles: Article[] = [
    {
        title: 'Comment identifier un terrain confus',
        tags: [
            {
                name: 'Tutoriel',
                icon: Tutorial,
                color: TagType.TUTORIAL,
            }
        ],
        content: 'Dans cet article, nous allons vous expliquer comment identifier un <b>terrain confus</b> et comment le rendre plus lisible.<br/>' +
            'Nous allons vous donner des astuces pour identifier les zones de votre terrain qui sont confuses et comment les rendre plus lisibles.<br/>' +
            'Tout d\'abord, il est important de comprendre ce qu\'est un terrain confus. Un terrain confus est un terrain qui manque de clarté et de lisibilité. Il est difficile de savoir où se trouvent les différentes zones du terrain et comment elles sont reliées entre elles.<br/>' +
            'Pour identifier un terrain confus, il est important de regarder la disposition des différentes zones du terrain. Si les zones sont mal délimitées ou mal reliées entre elles, il est probable que le terrain soit confus.<br/>' +
            'Pour rendre un terrain plus lisible, il est important de délimiter clairement les différentes zones du terrain. Il est également important de créer des chemins et des connexions entre les différentes zones du terrain pour les relier entre elles.<br/>' +
            'En suivant ces astuces, vous pourrez identifier un terrain confus et le rendre plus lisible.<br/>',
        icon: logo,
        date: '2024-05-24',
        url: '/article/comment-identifier-un-terrain-confus',
    },
    {
        title: 'Pourquoi identifier un terrain confus',
        tags: [
            {
                name: 'Tutoriel',
                icon: Tutorial,
                color: TagType.TUTORIAL,
            }
        ],
        content: 'Dans cet article, nous allons vous expliquer pourquoi il est important d\'identifier un terrain confus et comment cela peut vous aider à améliorer votre terrain.<br/>' +
            'Identifier un terrain confus est important, car cela vous permet de comprendre comment votre terrain est structuré et comment les différentes zones du terrain sont reliées entre elles.<br/>' +
            'En identifiant un terrain confus, vous pourrez améliorer la lisibilité de votre terrain et le rendre plus agréable à regarder et à utiliser.<br/>' +
            'Un terrain confus peut être difficile à naviguer et à utiliser. En identifiant les zones de votre terrain qui sont confuses, vous pourrez les améliorer et les rendre plus lisibles.<br/>' +
            'En suivant les astuces que nous vous avons données dans notre article précédent, vous pourrez identifier un terrain confus et le rendre plus lisible.<br/>',
        icon: logo,
        date: '2025-05-24',
        url: '/article/pourquoi-identifier-un-terrain-confus',
    },
];