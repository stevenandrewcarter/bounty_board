export interface Bounty {
    id: number;
    name: string;
    description: string;
    status: boolean;    
    dateCreated: string;
    dateExpires: string;
    dateClosed: string;
    category: string;
    priority: number;
    minimumBid: number;
}
