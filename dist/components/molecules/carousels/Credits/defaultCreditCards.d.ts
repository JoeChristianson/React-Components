export interface IAwardDetail {
    top: string;
    bottom: string;
    group?: string;
    href?: string;
    other?: string;
}
declare class AwardDetail implements IAwardDetail {
    top: string;
    bottom: string;
    other: string;
    constructor(top: string, bottom: string, other: string);
}
declare const defaultCreditCards: AwardDetail[][];
export default defaultCreditCards;
