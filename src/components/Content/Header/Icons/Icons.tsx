import { IconProps } from "./Icons.interface"

const Icons: React.FC<IconProps> = ({Story, Component}) => {

    return (
        <div className="header__icon-group">
            <a id="search">
                <i className="fas fa-search"></i>
            </a>
            <div className="social">
                <a>
                    <i className="fab fa-facebook-f"></i>
                </a>
                <a>
                    <i className="fab fa-instagram"></i>
                </a>
                <a>
                    <i className="fab fa-dribble"></i>
                </a>
                <a id="mobile-menu-controller">
                    <i className="fas fa-bars"></i>
                </a>
            </div>
        </div>
    )
}