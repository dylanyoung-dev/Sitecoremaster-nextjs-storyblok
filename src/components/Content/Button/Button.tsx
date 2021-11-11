import { ButtonProps } from './Button.interface';
import Link from 'next/link';

const Button: React.FC<ButtonProps> = ({ Component }) => {

    // const renderVariantClassName = (param: any, prefix?: string) => {
    //     if (param) {
    //         return prefix ? `-${prefix}--${param}` : `-${param}`;
    //     }
    //     return '';
    // };
    return (
        <></>
    );

    // const renderButtonClassName = () => {
    //     return classNames(
    //         'btn',
    //         renderVariantClassName(shape, 'shape'),
    //         renderVariantClassName(weight, 'weight'),
    // //         renderVariantClassName(size, 'size'),
    // //         renderVariantClassName(variant, 'variant'),
    // //         renderVariantClassName(color, 'color'),
    // //         { '-disabled': disabled, '-fullwidth': fullwidth },
    // //         className,
    // //     );
    // // };

    // if (href) {
    //     return (
    //         <Link href={href}>
    //             <a 
    //                 style={style}
    //                 href={href}
    //                 className={renderButtonClassName()}
    //                 onClick={(e) => {
    //                     disabled ? e.preventDefault() : onClick && onClick(e);
    //                 }}>
    //                 {prefix && <div className="btn-prefix">{prefix}</div>}
    //                 {children}
    //             </a>
    //         </Link>
    //     );
    //     }

    // return (
    //     <button
    //         style={style}
    //         type={buttonType}
    //         className={renderButtonClassName()}
    //         onClick={(e) => {
    //             disabled ? e.preventDefault() : onClick && onClick(e);
    //         }}>
    //             <span>
    //                 {prefix && <div className="btn-prefix">{prefix}</div>}
    //                 {children}
    //             </span>
    //         </button>
    // );
};

export { Button };