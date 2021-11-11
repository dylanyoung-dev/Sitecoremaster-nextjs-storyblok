import { BlogSideBarCategoryProps } from './Categories.interface';

const BlogSideBarCategories: React.FC<BlogSideBarCategoryProps> = ({ BlokModel }) => {

    return (
        <div className="blog-sidebar-section -category">
            <div className="center-line-title">
                <h5>Categories</h5>
            </div>
            <a className="category -bar">
                <div className="category__background" style="background-image: url(assets/images/backgrounds/category-1.png">
                    <h5 className="title">Design</h5>
                    <h5 className="quantity">12</h5>
                </div>
            </a>
        </div>
    )
}

export { BlogSideBarCategories };