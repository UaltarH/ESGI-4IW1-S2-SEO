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