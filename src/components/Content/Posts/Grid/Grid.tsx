import GridProps from "./Grid.interface";
import { ArticlePost, VideoPost, PodcastPost } from '~/components/Content/Posts/ContentCard/ContentCard';

const Grid: React.FC<GridProps> = ({ BlokModel }) => {

    return (
        <div className="blog-masonry blog-masonry-sidebar__content">
            <ArticlePost BlokModel={BlokModel}></ArticlePost>
            <PodcastPost BlokModel={BlokModel}></PodcastPost>
            <VideoPost BlokModel={BlokModel}></VideoPost>
        </div>
    )
}

export { Grid };