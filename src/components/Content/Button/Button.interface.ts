import React, { ReactNode } from "react";
import { Component, Story } from '~/interfaces/StoryBlok.interface';

interface ButtonProps {
    Component: Component,
    Story: Story
    // variant?: 'contained' | 'outline' | 'link';
    // className?: string;
    // weight?: 'light' | 'regular' | 'medium' | 'bold';
    // shape?: 'circle' | 'round';
    // size?: 'small' | 'regular' | 'large';
    // style?: React.CSSProperties;
    // href?: string;
    // fullwidth?: boolean;
    // disabled?: boolean;
    // buttonType?: 'submit' | 'reset' | 'button';
    // onClick?: (event: React.MouseEvent<any, MouseEvent>) => void;
    // children?: ReactNode;
    // prefix?: ReactNode;
    // color?: 'primary' | 'secondary' | 'third' | 'four';
}

export type { ButtonProps };