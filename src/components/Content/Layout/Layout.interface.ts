import { ReactNode } from "react";
import BlokModel from '~/interfaces/StoryBlok.interface';

export default interface LayoutProps {
    BlokModel: BlokModel,
    children: ReactNode;
    locale: string;
    locales: [];
}