import { ReactNode } from "react";

export default interface LayoutProps {
    blok: BlokModel,
    children: ReactNode;
    locale: string;
    locales: []
}