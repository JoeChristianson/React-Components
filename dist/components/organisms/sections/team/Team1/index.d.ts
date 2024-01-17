import TeamMember from "../../../../../types/TeamMember";
import React from "react";
type Props = {
    heading?: string;
    className?: string;
    team: TeamMember[];
    steleBgs?: string[];
};
declare const Team1: ({ className, team, steleBgs, heading }: Props) => React.JSX.Element;
export default Team1;
