import { SubscribeSidebarProps } from "./Subscribe.interface";

const SubscribeSidebar: React.FC<SubscribeSidebarProps> = ({ BlokModel }) => {

    return (
        <form className="subscribe-box" action="/" method="POST">
            <h5>Subscribe</h5>
            <p>Lorem ipsum dolor amet, consectetur adipiscing elit, sed tempor.</p>
            <input placeholder="Your email" name="email" type="email" />
            <a className="btn -normal">Subscribe</a>
        </form>
    );
}

export { SubscribeSidebar };