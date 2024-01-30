import { faPhone, // Telephone
faEnvelope, // Email
faMapMarkerAlt, // Location
faMobileAlt, // Mobile Phone
faFax, // Fax
faAddressBook, // Address Book
faGlobe, // Website
faBuilding, // Company or Office Building
faPhoneSquare // Alternate Telephone
 } from '@fortawesome/free-solid-svg-icons';
// Create a new map for contact details
var contactDetailsIcons = new Map();
// Set the icons for each contact detail
contactDetailsIcons.set("Telephone", faPhone);
contactDetailsIcons.set("Email", faEnvelope);
contactDetailsIcons.set("Location", faMapMarkerAlt);
contactDetailsIcons.set("Mobile", faMobileAlt);
contactDetailsIcons.set("Fax", faFax);
contactDetailsIcons.set("AddressBook", faAddressBook);
contactDetailsIcons.set("Website", faGlobe);
contactDetailsIcons.set("Office", faBuilding);
contactDetailsIcons.set("AltTelephone", faPhoneSquare);
// Function to get the icon for a contact detail
var getContactDetailIcon = function (detail) {
    var icon = contactDetailsIcons.get(detail);
    return icon;
};
export default getContactDetailIcon;
