import { BlogSidebarProps } from "~/components/Content/Layout/BlogSidebar/BlogSidebar.interface";
import { Placeholder } from "../../Placeholder/Placeholder";

const BlogSidebar: React.FC<BlogSidebarProps> = ({Story, Component}) => {

    return (
        <div className="blog-with-sidebar">
            <div className="row">
                <div className="col-12 col-md-5 col-lg-4 order-md-2">
                    <div className="blog-sidebar">
                        <Placeholder Story={Story} PlaceholderName="sidebar"></Placeholder>
                        {/* <BlogSideBarCategories Story={Story}></BlogSideBarCategories>
                        <TrendingPosts></TrendingPosts>
                        <SubscribeSidebar></SubscribeSidebar> */}
                    </div>
                </div>
                <div className="col-12 col-md-7 col-lg-8 order-md-1">
                    <div className="row">
                        <Placeholder Story={Story} PlaceholderName="primary"></Placeholder>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { BlogSidebar };