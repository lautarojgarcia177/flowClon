export interface TrendingVerifiedVideos {
    page:     number;
    limit:    number;
    explicit: boolean;
    total:    number;
    has_more: boolean;
    list:     TrendingVideo[];
}

export interface TrendingVideo {
    id:      string;
    title:   string;
    channel: string;
    owner:   string;
}
