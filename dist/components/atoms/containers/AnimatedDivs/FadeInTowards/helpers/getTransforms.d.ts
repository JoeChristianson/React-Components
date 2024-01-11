import Direction from "../../../../../../types/animation/Direction";
type Args = {
    direction?: Direction;
    scale?: number;
};
declare const getTransforms: ({ direction, scale }: Args) => {
    hiddenTransform: string;
    visibleTransform: string;
};
export default getTransforms;
