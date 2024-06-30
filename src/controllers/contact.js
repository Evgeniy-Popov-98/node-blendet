import { getContacts } from "../services/contact.js";

export const contactController = async (req, res) => {
    const contacts = await getContacts(req.user._id);
    res.json(contacts);
};