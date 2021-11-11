

interface Story {
    _uid: string,
    body: [{
        component: string,
        _uid: string,
    }]
}

interface Component {
    _uid: string,
    component: string,
    placeholder_key?: string
}

export type { Story, Component };