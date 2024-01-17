import FormInputType from "../../../../types/FormInput";
import React from "react";
type Props = {
    className?: string;
    inputs: FormInputType[];
};
declare const GenericForm: ({ className, inputs }: Props) => React.JSX.Element;
export default GenericForm;
