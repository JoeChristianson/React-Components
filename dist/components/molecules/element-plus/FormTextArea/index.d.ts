import React from "react";
type Props = {
    className?: string;
    label?: string;
    name: string;
    formValues: any;
    setFormValues: React.Dispatch<any>;
};
declare const FormTextarea: ({ label, className, name, formValues, setFormValues }: Props) => React.JSX.Element;
export default FormTextarea;
