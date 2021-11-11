import { LayoutProps } from './Layout.interface';
import { Header, Footer } from '~/components/Content';

const Layout: React.FC<LayoutProps> = ({ Story, Component, children }) => {
    return (
        <div>
            <Header Story={Story}></Header>
            <div id="content">
                <div className="container">
                    {children}
                </div>
            </div>
            <Footer Story={Story}></Footer>
        </div>
    )
};

export default Layout;