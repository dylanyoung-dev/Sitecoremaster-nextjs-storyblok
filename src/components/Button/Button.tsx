import ButtonProps from './Button.interface';
import classNames from 'classnames';
import Link from 'next/link';

const Button = ({variant, className, weight, shape, size, style, href, fullwidth, disabled, buttonType, onClick, children, prefix, color }: ButtonProps) => {

    const renderVariantClassName = (param: any, prefix?: string) => {
        if (param) {
            return prefix ? `-${prefix}--${param}` : `-${param}`;
        }
        return '';
    };

    const renderButtonClassName = () => {
        return classNames(
            'btn',
            renderVariantClassName(shape, 'shape'),
            className,
        );
    };

    if (href) {
        return (
            <Link href={href}>
                <a 
                    style={style}
                    href={href}
                    className={renderButtonClassName()}
                    onClick={(e) => {
                        disabled ? e.preventDefault() : onClick && onClick(e);
                    }}>
                    {prefix && <div className="btn-prefix">{prefix}</div>}
                    {children}
                </a>
            </Link>
        );
        }

    return (
        <button
            style={style}
            type={}>
                <span>
                    {prefix && <div className="btn-prefix">{prefix}</div>}
                    {children}
                </span>
            </button>
    );
};