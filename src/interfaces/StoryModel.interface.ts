export interface Stories {
    data: {
        stories: {
            alternatives: string[],
            content: {
                [index: string]: string
            },
            created_at: string,
            full_slug: string,
            group_id: string,
            id: number,
            is_startpage: boolean,
            meta_data: any,
            name: string,
            parent_id: number,
            position: number,
            published_at: string | null,
            slug: string,
            sort_by_date: string | null,
            tag_list: string[],
            uuid: string
        }
    }
}