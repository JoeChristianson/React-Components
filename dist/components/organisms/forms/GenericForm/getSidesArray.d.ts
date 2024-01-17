import FormInputType from "types/FormInput";
type Args = {
    inputs: FormInputType[];
};
type Side = "left" | "right" | "full";
declare const getSidesArray: ({ inputs }: Args) => Side[];
export default getSidesArray;
