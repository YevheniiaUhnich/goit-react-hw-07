import s from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";

const getVisibleContacts = (contacts, statusFilter, nameFilter) => {
  let filtered = contacts;

  switch (statusFilter) {
    case "active":
      filtered = filtered.filter((contact) => !contact.completed);
      break;
    case "completed":
      filtered = filtered.filter((contact) => contact.completed);
      break;
    default:
      break;
  }
  if (nameFilter.trim() !== "") {
    filtered = filtered.filter((contact) =>
      contact.name.toLowerCase().includes(nameFilter.toLowerCase())
    );
  }
  return filtered;
};

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.items);
  const statusFilter = useSelector((state) => state.filters.status);
  const nameFilter = useSelector((state) => state.filters.name);

  const visibleContacts = getVisibleContacts(
    contacts,
    statusFilter,
    nameFilter
  );

  return (
    <ul className={s.contactList}>
      {visibleContacts.map((contact) => (
        <li className={s.contactLi} key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
