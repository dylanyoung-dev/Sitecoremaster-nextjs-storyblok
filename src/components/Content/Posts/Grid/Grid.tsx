import { GridProps } from "./Grid.interface";
import { ArticlePost, VideoPost, PodcastPost } from '~/components/Content/Posts/ContentCard/ContentCard';

const Grid: React.FC<GridProps> = ({ Story, Component }) => {

    // TODO: This component will dynamically pull content using the parameters from Component object
    return (
        // <div className="blog-masonry blog-masonry-sidebar__content">
        //     <ArticlePost Story={Story} Component={Component}
        //     <ArticlePost BlokModel={BlokModel}></ArticlePost>
        //     <PodcastPost BlokModel={BlokModel}></PodcastPost>
        //     <VideoPost BlokModel={BlokModel}></VideoPost>
        // </div>
        <></>
    );
}

export { Grid };