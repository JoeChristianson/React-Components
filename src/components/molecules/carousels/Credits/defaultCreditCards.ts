export interface IAwardDetail {
    top:string
    bottom:string
    group?:string
    href?:string
    other?:string
}



class AwardDetail implements IAwardDetail {
    top: string;
    bottom: string;
    other: string;

    constructor(top: string, bottom: string, other: string) {
        this.top = top;
        this.bottom = bottom;
        this.other = other;
    }
}


const defaultCreditCards = [
    [
        new AwardDetail("Sundance Film Festival", "Best Narrative Feature", "Eternal Shadows"),
        new AwardDetail("Sundance Film Festival", "Audience Award", "Whispers of the Wind")
    ],
    [
        new AwardDetail("Cannes Film Festival", "Palme d'Or", "The Last Canvas"),
        new AwardDetail("Cannes Film Festival", "Best Director", "The Last Canvas"),
        new AwardDetail("Cannes Film Festival", "Best Screenplay", "Mirrored Dreams")
    ],
    [
        new AwardDetail("BAFTA Awards", "Best Film", "Echoes of Time"),
        new AwardDetail("BAFTA Awards", "Best Cinematography", "Echoes of Time"),
        new AwardDetail("BAFTA Awards", "Best Original Screenplay", "Labyrinth of Fate")
    ],
    [
        new AwardDetail("Berlin International Film Festival", "Golden Bear", "Moments of Clarity"),
        new AwardDetail("Berlin International Film Festival", "Best Director", "Distant Echoes")
    ],
    [
        new AwardDetail("Toronto International Film Festival", "People's Choice Award", "Under the Open Sky"),
        new AwardDetail("Toronto International Film Festival", "Best Canadian Feature", "Northern Lights")
    ],
    [
        new AwardDetail("Venice Film Festival", "Golden Lion", "Shadows and Light"),
        new AwardDetail("Venice Film Festival", "Silver Lion", "Glimpse of Eternity"),
        new AwardDetail("Venice Film Festival", "Best Actor", "The Unseen Path")
    ],
    [
        new AwardDetail("Oscars", "Best Picture", "A Journey Within"),
        new AwardDetail("Oscars", "Best Director", "A Journey Within"),
        new AwardDetail("Oscars", "Best Original Screenplay", "A Journey Within"),
        new AwardDetail("Oscars", "Best Cinematography", "A Journey Within")
    ],
    [
        new AwardDetail("Golden Globe Awards", "Best Drama", "Whispering Shadows"),
        new AwardDetail("Golden Globe Awards", "Best Director", "Whispering Shadows"),
        new AwardDetail("Golden Globe Awards", "Best Screenplay", "The Infinite Maze")
    ],
    [
        new AwardDetail("Screen Actors Guild Awards", "Best Ensemble", "The Last Stand"),
        new AwardDetail("Screen Actors Guild Awards", "Best Actress", "The Last Stand")
    ],
    [
        new AwardDetail("Independent Spirit Awards", "Best Feature", "Dreams of Tomorrow"),
        new AwardDetail("Independent Spirit Awards", "Best Director", "Lost Horizons"),
        new AwardDetail("Independent Spirit Awards", "Best Screenplay", "The Mirage")
    ]
];


export default defaultCreditCards