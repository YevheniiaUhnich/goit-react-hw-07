import s from "./Contact.module.css";
import { IoPerson } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <div className={s.listItem}>
      <div className={s.wrapperContact}>
        <div className={s.wrapper}>
          <IoPerson className={s.icon} />
          <p className={s.titleContact}>{contact.name}</p>
        </div>
        <div>
          <BsFillTelephoneFill className={s.icon} />
          <span className={s.titleNumber}>{contact.number}</span>
        </div>
      </div>

      <div className={s.btnBox}>
        <button onClick={handleDelete} className={s.btnContact}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Contact;
