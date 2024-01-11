import React from "react";
type Props = {
    className?: string;
    label?: string;
    name: string;
    formValues: any;
    setFormValues: React.Dispatch<any>;
};
declare const FormInput: ({ label, className, name, formValues, setFormValues }: Props) => React.JSX.Element;
export default FormInput;
