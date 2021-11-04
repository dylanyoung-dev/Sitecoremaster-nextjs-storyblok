import React from 'react';
import Layout from '../components/Layout/Layout';
import Blok from '../components/Blok/Blok';

import { useStoryblok } from '../utils/storyblok';

export default function Page404({ preview, locale, locales}) {
    const enableBridge = true;

    const storyLoaded = useStoryblok(null, enableBridge, locale);

    let content = (<h1>Not found</h1>);

    if (storyLoaded && storyLoaded.content) content = (<Blok blok={storyLoaded.content} />);

    return (
        <Layout locale={locale} locales={locales}>
            {content}
        </Layout>
    )
}

// export async function getStaticProps({ locale, locales, preview = false }) {
//     return {
//         props: {
//             preview,
//             locale,
//             locales,
//         },
//     }
// }