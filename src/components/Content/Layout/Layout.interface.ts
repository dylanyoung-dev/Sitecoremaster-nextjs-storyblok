import { ReactNode } from "react";
import { Story, Component } from '~/interfaces/StoryBlok.interface';

interface LayoutProps {
    Story: Story,
    Component: Component,
    children: ReactNode
}

export type { LayoutProps };