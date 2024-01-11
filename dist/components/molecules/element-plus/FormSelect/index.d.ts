import React from "react";
type Props = {
    className?: string;
    name: string;
    options: string[];
    formValues: any;
    setFormValues: React.Dispatch<any>;
};
declare const FormSelect: ({ className, options, name, formValues, setFormValues }: Props) => React.JSX.Element;
export default FormSelect;
