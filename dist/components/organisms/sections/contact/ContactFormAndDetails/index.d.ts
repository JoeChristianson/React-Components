import ContactDetailsType from "../../../../../types/ContactDetailsType";
import React, { ReactNode } from "react";
import { ContactDetailKey } from "../../../../../utils/contact/getContactDetailItem";
import FormInputType from "../../../../../types/FormInput";
type Props = {
    className?: string;
    handleSubmit?: any;
    header?: ReactNode;
    footer?: ReactNode;
    contactDetails?: ContactDetailsType;
    detailsOrder?: ContactDetailKey[];
    inputs?: FormInputType[];
};
declare const ContactFormAndDetails: ({ className, handleSubmit, header, footer, detailsOrder, inputs }: Props) => React.JSX.Element;
export default ContactFormAndDetails;
