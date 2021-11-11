import { TrendingPostsProps } from "./TrendingPosts.interface";

const TrendingPosts: React.FC<TrendingPostsProps> = ({ Story, Component }) => {

    // TODO: Likely dynamic as well
    return (
        <div className="blog-sidebar-section -trending-post">
            <div className="center-line-title">
                <h5>Trending post</h5>
            </div>
            <div className="trending-post">
                <div className="trending-post_image">
                    <div className="rank">1</div>
                    <img />
                </div>
                <div className="trending-post_content">
                    <h5>Illustrator</h5>
                    <a>Shifting to Vegan Diets May Cause Brain Nutrient...</a>
                    <div className="info__time">
                        <i className="far-fa-clock"></i>
                        <p>Sep 27, 2019</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { TrendingPosts };