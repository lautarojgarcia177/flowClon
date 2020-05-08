import { Url } from 'url';

export interface VideosList {
    page:     number;
    limit:    number;
    explicit: boolean;
    total:    number;
    has_more: boolean;
    list:     Video[];
}

export interface Video {
    id:          string;
    name:        string;
    description: string;
}

export interface VideoDetail {
    thumbnail_240_url: string;
    thumbnail_360_url: string;
    thumbnail_1080_url: string;
    views_total:       number;
    description:       string;
    title:             string;
    id: string;
    duration: number;
    created_time: Date;
    explicit: boolean;
    tags: string;
    channel: string;
    owner: {
        username: string
    }
}
