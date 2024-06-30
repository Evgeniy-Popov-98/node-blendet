import { Contact } from "../db/models/contact.js";

export const getContacts = (owner) => Contact.find({owner});