import React, { ReactNode } from 'react';
interface Props {
    children: ReactNode;
    duration?: number;
}
declare const FadeInDiv: ({ children, duration }: Props) => React.JSX.Element;
export default FadeInDiv;
