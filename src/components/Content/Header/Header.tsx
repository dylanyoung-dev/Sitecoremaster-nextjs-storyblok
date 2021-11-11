import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Placeholder } from '~/components/Content/Placeholder/Placeholder';
import { HeaderProps } from './Header.interface';

const Header: React.FC<HeaderProps> = ({ Story }) => {
    const [isOpenNavMobile, setIsOpenNavMobile] = useState<boolean>(false);
    const [shouldShowSearch, setShouldShowSearch] = useState<boolean>(false);

    return (
        <>
            <div className="header-spacing" />
            <header className="theme-default">
                <div className="container">
                    <div className="header-wrapper">
                        <Link href="/">
                            <a className="header-logo">
                                <Image src="/assets/images/logo.png" alt="Logo" height="114" width="407" />
                            </a>
                        </Link>
                        <Placeholder Story={Story} PlaceholderName='navigation'></Placeholder>
                        <div className="header-icons">
                            
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export { Header };