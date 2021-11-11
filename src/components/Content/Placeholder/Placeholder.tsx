import { useRouter } from 'next/router';
import { ComponentType } from 'react';
import SbEditable from 'storyblok-react';
import { Grid } from '..';
import { Component } from '~/interfaces/StoryBlok.interface';

import { Button } from '../Button/Button';
import TopNavigation from '../Header/TopNavigation/TopNavigation';
import { PlaceholderProps } from './Placeholder.interface';

// resolve Storyblok components to Next.js components
type ComponentMapping = Record<string, ComponentType<any>>;

const Placeholder = ({ Story, PlaceholderName }: PlaceholderProps) => {
    const { isPreview } = useRouter();
    let output: string = "";

    if (typeof Story === 'undefined') {
        return (<p>No Story Set</p>);
    }

    if (typeof Story.body === 'undefined') {
        return (<p>Story is Set but no Components defined</p>)
    }

    // Loop through array of components for the current page
    for (let blok in Story.body) {
        let ComponentDefinition: Component = Story.body[blok];
        const Component = getComponent(ComponentDefinition, PlaceholderName);
 
        if (typeof Component !== 'undefined') {
            output += isPreview ? 'javascript:' :<SbEditable content={ComponentDefinition}><Component Component={Component} /></SbEditable>;
        }
    }

    if (output === '') {
        return (<p>The component has not been created yet.</p>);
    }

    return output;
}


function getComponent(ComponentDefinition: Component, PlaceholderName: string) {

    // TODO: Move mapping information to a global location
    const mappings: ComponentMapping = {
        'button': Button,
        'top-navigation': TopNavigation,
        'posts-grid': Grid,
    }

    // Confirm Placeholder Keys match since we only want to render this placeholders components
    if (typeof mappings[ComponentDefinition.component] !== 'undefined' && ComponentDefinition.placeholder_key === PlaceholderName) {
        return mappings[ComponentDefinition.component];
    }

    return undefined;
}

export { Placeholder };