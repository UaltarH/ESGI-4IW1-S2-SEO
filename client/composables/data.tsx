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
        content: '<p>Chez TerrainConfus.fr, nous nous consacrons à la découverte et au référencement des terrains confus, ces lieux mystérieux et souvent oubliés qui suscitent curiosité et fascination. Mais pourquoi est-il important d’identifier ces terrains confus ? Voici quelques raisons clés qui expliquent l\'importance de cette démarche.</p>' +
        '<ol>' +
        '<li><b>Préserver le Patrimoine Oublié</b>' +
        '<p>Les terrains confus sont souvent des témoins silencieux de notre histoire. En les identifiant, nous contribuons à la préservation de vestiges architecturaux, industriels ou culturels qui pourraient autrement être perdus à jamais. Chaque site a une histoire unique à raconter, et en les documentant, nous conservons ces récits pour les générations futures.</p></li>' +
        '<li><b>Favoriser l\'Exploration et la Découverte</b>' +
        '<p>Les explorateurs urbains et les amateurs de lieux insolites trouvent dans les terrains confus des opportunités uniques d\'aventure et de découverte. Identifier ces lieux permet de créer des itinéraires d’exploration pour ceux qui cherchent à sortir des sentiers battus et à vivre des expériences inoubliables.</p></li>' +

        '<li><b>Sensibiliser à la Conservation de l\'Environnement</b>' +
        '<p>Les terrains confus offrent un aperçu fascinant de la façon dont la nature reprend ses droits sur les structures abandonnées. En mettant en lumière ces processus naturels, nous sensibilisons le public à l\'importance de la conservation de l\'environnement et à la résilience de la nature face à l’abandon humain.</p></li>' +

        '<li><b>Promouvoir l\'Art et la Créativité</b>' +
        '<p>De nombreux artistes trouvent l\'inspiration dans les terrains confus. Les graffitis, les installations éphémères et les photographies de ces lieux deviennent des œuvres d’art à part entière. Identifier ces terrains permet de créer des espaces où l’art et la créativité peuvent s’exprimer librement, tout en respectant l\'intégrité des lieux.</p></li>' +

        '<li><b>Éducation et Recherche</b>' +
        '<p>Les terrains confus sont des laboratoires vivants pour les chercheurs en histoire, en architecture, en écologie et en sociologie. En répertoriant ces lieux, nous fournissons des ressources précieuses pour l’étude des dynamiques urbaines, des processus de dégradation et de la renaissance naturelle, ainsi que des comportements humains face à l\'abandon.</p></li>' +

        '<li><b>Prévenir les Risques</b>' +
        '<p>Identifier et documenter les terrains confus permet également de mettre en lumière les dangers potentiels qu\'ils peuvent représenter, tels que les structures instables ou les substances toxiques. En informant le public des risques, nous contribuons à une exploration plus sûre et plus responsable de ces sites.</p></li>' +

        '<li><b>Encourager la Revitalisation</b>' +
        '<p>Dans certains cas, l’identification des terrains confus peut être le premier pas vers leur réhabilitation. En attirant l’attention sur ces lieux, nous pouvons susciter des projets de revitalisation qui transforment des espaces abandonnés en ressources utiles pour la communauté, comme des parcs, des centres culturels ou des zones de conservation.</p></li>' +
        '</ol>' +

        '<p>Identifier un terrain confus va bien au-delà de la simple curiosité. C\'est un acte de préservation, de sensibilisation, et de valorisation de notre environnement et de notre patrimoine. En répertoriant ces lieux sur TerrainConfus.fr, nous ouvrons une fenêtre sur un monde méconnu, plein de mystères et de beautés cachées. Rejoignez-nous dans cette aventure et contribuez à la découverte et à la protection des terrains confus.</p>' +

        '<p>Explorez, découvrez et protégez avec TerrainConfus.fr.</p>',
        icon: logo,
        date: '2024-05-25',
        updateDate: '2024-05-31',
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