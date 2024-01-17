import FormInput from "../../../types/FormInput";
import React from "react";
type Props = {
    className?: string;
    formInput: FormInput;
    handleInputChange: ({ value, name }: {
        value: string;
        name: string;
    }) => void;
    side?: "right" | "left" | "full";
};
declare const FormInput: ({ className, formInput, handleInputChange, side }: Props) => React.JSX.Element;
export default FormInput;
