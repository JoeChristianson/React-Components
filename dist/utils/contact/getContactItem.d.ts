type ContactDetail = 'Telephone' | 'Email' | 'Location' | 'Mobile' | 'Fax' | 'AddressBook' | 'Website' | 'Office' | 'AltTelephone';
export type ContactDetailKey = ContactDetail;
declare const getContactDetailIcon: (detail: ContactDetailKey) => any;
export default getContactDetailIcon;
