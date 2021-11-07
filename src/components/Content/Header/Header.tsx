import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import HeaderProps from './Header.interface';
import TopNavigation from './TopNavigation/TopNavigation';

const Header = ({ BlokModel }: HeaderProps) => {
    const [isOpenNavMobile, setIsOpenNavMobile] = useState<boolean>(false);
    const [shouldShowSearch, setShouldShowSearch] = useState<boolean>(false);

    return (
        <>
            <div className="header-spacing" />
            <header className="">
                <div className="container">
                    <div className="header-wrapper">
                        <Link href="/">
                            <a className="header-logo">
                                <Image src="/assets/images/logo.png" alt="Logo" height="114" width="407" />
                            </a>
                        </Link>
                        <TopNavigation blok={BlokModel}></TopNavigation>
                        <div className="header-icons">
                            
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;