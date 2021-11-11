import { TwoColumnProps } from "./TwoColum.interface"
import { useEffect } from 'react';

const TwoColumn: React.FC<TwoColumnProps> = ({ Story, Component }) => {
    const PAGE_SIZE = 8;

    const types = 'image|slide|split|video';

    useEffect(() => {
        //dispatchEvent();
    }, []);
    
    return (
        <div className="container">
            <div className="row">
                <div className="col-12"></div>
            </div>
        </div>
    )
};