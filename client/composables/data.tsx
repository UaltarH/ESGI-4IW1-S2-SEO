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
        content: '<p>Dans cet article, nous allons vous expliquer comment identifier un <b>terrain confus</b> et comment le rendre plus lisible.<br/>' +
            'Nous allons vous donner des astuces pour identifier les zones de votre terrain qui sont confuses et comment les rendre plus lisibles.</p>' +
            '<p>Tout d\'abord, il est important de comprendre ce qu\'est un <b>terrain confus</b>. Un terrain confus est un terrain qui manque de clarté et de lisibilité. Il est difficile de savoir où se trouvent les différentes zones du terrain et comment elles sont reliées entre elles.</p>' +
            '<p>Pour identifier un terrain confus, il est important de regarder la disposition des différentes zones du terrain. Si les zones sont mal délimitées ou mal reliées entre elles, il est probable que le terrain soit confus.</p>' +
            '<p>Pour rendre un terrain plus lisible, il est important de délimiter clairement les différentes zones du terrain. Il est également important de créer des chemins et des connexions entre les différentes zones du terrain pour les relier entre elles.</p>' +
            '<p>En suivant ces astuces, vous pourrez identifier un terrain confus et le rendre plus lisible.</p>',
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
        content: '<p>Dans cet article, nous allons vous expliquer pourquoi il est important d\'identifier un terrain confus et comment cela peut vous aider à améliorer votre terrain.</p>' +
            '<p>Identifier un terrain confus est important, car cela vous permet de comprendre comment votre terrain est structuré et comment les différentes zones du terrain sont reliées entre elles.<br/>' +
            'En identifiant un terrain confus, vous pourrez améliorer la lisibilité de votre terrain et le rendre plus agréable à regarder et à utiliser.</p>' +
            '<p>Un terrain confus peut être difficile à naviguer et à utiliser. En identifiant les zones de votre terrain qui sont confuses, vous pourrez les améliorer et les rendre plus lisibles.</p>' +
            '<p>En suivant les astuces que nous vous avons données dans notre article précédent, vous pourrez identifier un terrain confus et le rendre plus lisible.</p>',
        icon: logo,
        date: '2024-05-25',
        url: '/article/pourquoi-identifier-un-terrain-confus',
    },
    {
        title: 'Qu\'est-ce qu\'un terrain confus',
        tags: [
            {
                name: 'Tutoriel',
                icon: Tutorial,
                color: TagType.TUTORIAL,
            }
        ],
        content: '<h2>Définition d\'un "Terrain Confus"</h2>' +
            '<p>Un "<b>terrain confus</b>" désigne un espace géographique caractérisé par un ensemble de structures, éléments naturels et/ou anthropiques qui créent une atmosphère de mystère, de désordre ou de complexité. Ces terrains confus sont souvent marqués par une combinaison de friches industrielles, de bâtiments abandonnés, de végétation sauvage et de vestiges historiques ou culturels, donnant lieu à un environnement hétérogène et intrigant.</p>' +
            '<h3>Caractéristiques principales d\'un terrain confus :</h3>' +
            '<ol>' +
            '<li><b>Abandon et Décadence</b> : Présence de bâtiments ou d\'infrastructures laissés à l\'abandon, souvent en ruines ou partiellement détruits.</li>' +
            '<li><b>Nature Reprenant Ses Droits</b> : Végétation non contrôlée qui envahit les structures humaines, créant un mélange fascinant de nature et d\'artifice.</li>' +
            '<li><b>Vestiges Historiques</b> : Restes d\'activités humaines passées, comme des machines rouillées, des objets du quotidien ou des traces d\'anciennes occupations.</li>' +
            '<li><b>Accessibilité Variable</b> : Les terrains confus souvent difficiles d\'accès, non balisés, avec des sentiers informels tracés par les visiteurs.</li>' +
            '<li><b>Mystère et Exploration</b> : Lieux suscitant curiosité et intérêt pour leur aspect énigmatique et leur potentiel de découverte.</li>' +
            '<li><b>Interactions Humaines</b> : Traces de passages contemporains, comme des graffitis, des installations artistiques ou des déchets laissés par des visiteurs.</li>' +
            '</ol>' +
            '<p>Un terrain confus se distingue par son atmosphère unique, résultant de l\'interaction entre l\'abandon humain et la régénération naturelle, offrant un cadre riche pour l\'exploration et la découverte de l\'inattendu.</p>',
        icon: logo,
        date: '2024-05-28',
        url: '/article/qu-est-ce-qu-un-terrain-confus',
    }
];