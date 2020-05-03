export interface Channels {
    page:     number;
    limit:    number;
    explicit: boolean;
    total:    number;
    has_more: boolean;
    list:     Channel[];
}

export interface ChannelsList {
    channels: Channel[];
}

export interface Channel {
    id:          string;
    name:        string;
    description: string;
}
