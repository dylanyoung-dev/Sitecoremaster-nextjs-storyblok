import LayoutProps from './Layout.interface';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Layout = ({ blok, children, locale, locales }: LayoutProps) => {
    return (
        <div>
            <Header></Header>
            {children}
            <Footer></Footer>
        </div>
    )
};

export default Layout;