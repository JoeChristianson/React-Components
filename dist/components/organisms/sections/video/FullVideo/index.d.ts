import React, { ReactNode } from "react";
type Props = {
    className?: string;
    videoURL?: string;
    children?: ReactNode;
};
declare const FullVideo: ({ className, videoURL, children }: Props) => React.JSX.Element;
export default FullVideo;
