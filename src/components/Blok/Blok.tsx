import { useRouter } from 'next/router';
import SbEditable from 'storyblok-react';

import Button from '../Button/Button';
import BlokProps from './Blok.interface';

// resolve Storyblok components to Next.js components
const Components = {
    'button': Button
}

const Blok = ({ blok }: BlokProps) => {
    const { isPreview } = useRouter();

    if (typeof Components[blok.component] !== 'undefined') {
        const Component = Components[blok.component];

        return isPreview ? (<SbEditable content={blok}><Component blok={blok} /></SbEditable>) : <Component blok={blok} />
    }

    return (<p>The component <strong>{blok.component}</strong> has not been created yet.</p>)
}

export default Blok;