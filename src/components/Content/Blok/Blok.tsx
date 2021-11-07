import { useRouter } from 'next/router';
import { ComponentType } from 'react';
import SbEditable from 'storyblok-react';

import Button from '../Button/Button';
import TopNavigation from '../Header/TopNavigation/TopNavigation';
import BlokProps from './Blok.interface';

// resolve Storyblok components to Next.js components
type ComponentMapping = Record<string, ComponentType<any>>;

const Blok = ({ BlokModel }: BlokProps) => {
    const { isPreview } = useRouter();

    const Component = getComponent(BlokModel.blok.component);

    if (typeof Component !== 'undefined') {
        return isPreview ? (<SbEditable content={BlokModel.blok}><Component blok={BlokModel} /></SbEditable>) : <Component blok={BlokModel} />
    }

    return (<p>The component <strong>{BlokModel.blok.component}</strong> has not been created yet.</p>)
}

function getComponent(componentName: string) {
    const mappings: ComponentMapping = {
        'button': Button,
        'topnavigation': TopNavigation,
    }

    if (typeof mappings[componentName] !== 'undefined') {
        return mappings[componentName];
    }

    return undefined;
}

export default Blok;