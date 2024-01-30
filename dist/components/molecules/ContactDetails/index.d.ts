import ContactDetailsType from "types/ContactDetailsType";
import React from "react";
type Props = {
    className?: string;
    details?: ContactDetailsType;
};
declare const ContactDetails: ({ className, details }: Props) => React.JSX.Element;
export default ContactDetails;
