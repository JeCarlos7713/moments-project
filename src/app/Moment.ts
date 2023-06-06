export interface Moment{
    id?: number, //optional
    title: string,
    description: string,
    image: string,
    created_at?: string, //optional
    update_at?: string, //optional
    comments?: [{text: string; username: string}]
}