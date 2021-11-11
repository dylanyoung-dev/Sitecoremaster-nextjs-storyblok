import { BlogSideBarCategories } from "../../Posts/Categories/Categories";
import { Grid } from "../../Posts/Grid/Grid";
import { TrendingPosts } from "../../Posts/TrendingPosts/TrendingPosts";
import { SubscribeSidebar } from "../../Subscribe/Subscribe";


const BlogSidebar: React.FC<any> = () => {

    return (
        <div className="blog-with-sidebar">
            <div className="row">
                <div className="col-12 col-md-5 col-lg-4 order-md-2">
                    <div className="blog-sidebar">
                        <BlogSideBarCategories></BlogSideBarCategories>
                        <TrendingPosts></TrendingPosts>
                        <SubscribeSidebar></SubscribeSidebar>
                    </div>
                </div>
                <div className="col-12 col-md-7 col-lg-8 order-md-1">
                    <div className="row">
                        <Grid></Grid>
                    </div>
                </div>
            </div>
        </div>
    );
}