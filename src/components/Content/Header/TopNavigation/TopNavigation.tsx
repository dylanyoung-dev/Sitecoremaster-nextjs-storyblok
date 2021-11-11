import TopNavigationProps from './TopNavigation.interface';
import Link from 'next/link';

const TopNavigation: React.FC<TopNavigationProps> = ({ Story, Component }) => {
    return (
        <nav>
            <ul>
                <li className="nav-item">
                    <Link href="/videos">
                        <a title="Videos">Videos</a>
                    </Link>
                    <ul className="dropdown-menu">
                        <li>
                            <Link href="/videos/series">
                                <a title="Series">Series</a>
                            </Link>
                        </li>
                    </ul>
                </li>
                <li className="nav-item">
                    <Link href="/insights">
                        <a title="Insights">Insights</a>
                    </Link>
                </li>
            </ul>
        
        </nav>
    )
}

export default TopNavigation;