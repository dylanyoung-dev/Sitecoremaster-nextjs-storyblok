import LayoutProps from './Layout.interface';
import { Header, Footer } from '~/components/Content';

const Layout: React.FC<LayoutProps> = ({ BlokModel, children, locale, locales }) => {
    return (
        <div>
            <Header BlokModel={BlokModel}></Header>
            <div id="content">
                <div className="container">
                    {children}
                </div>
            </div>
            <Footer BlokModel={BlokModel}></Footer>
        </div>
    )
};

export default Layout;