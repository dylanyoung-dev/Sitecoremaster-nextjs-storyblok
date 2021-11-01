import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
    const [isOpenNavMobile, setIsOpenNavMobile] = useState<boolean>(false);
    const [shouldShowSearch, setShouldShowSearch] = useState<boolean>(false);

    return (
        <>
            <div className="header-spacing" />
            <header className="">
                <div className="container">
                    <div className="header-wrapper">
                        <Link href="/">
                            
                        </Link>

                        <div className="header-icons">
                            
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;