import { Request, Response } from 'express';

import Contact from '../models/Contacts';
import User from '../models/User';

export const getAllContacts = async (req: Request, res: Response) => {
  return await Contact
    .find({ owner: req.userID })
    .populate("owner", "username")
    .exec()
    .then(contacts => {
      res.json(contacts)
    }).catch(error => {
      res.status(400).json(error)
    });
}

export const getSingleContact = async (req: Request, res: Response) => {
  const contactID = req.params.id;

  return await Contact
    .findOne({ _id: contactID, owner: req.userID })
    .populate("owner", "username")
    .exec()
    .then(contact => {
      res.json(contact)
    }).catch(error => {
      res.status(400).json(error)
    });
}

export const createContact = (req: Request, res: Response) => {
  const { name, email, phone } = req.body;

  User.findById(req.userID, () => {

    const newContact = {
      name,
      email,
      phone,
      owner: req.userID
    };

    Contact.create(newContact);

    res.json(newContact);
  });
}

export const updateContact = async (req: Request, res: Response) => {
  const contactID = req.params.id;
  const { name, email, phone } = req.body;

  await Contact.findOneAndUpdate({
    _id: contactID,
    owner: req.userID
  }, {
    name,
    email,
    phone
  });

  const contact = await Contact.findById(contactID);
  res.json({ contact });
}

export const deleteContact = async (req: Request, res: Response) => {
  const contactID = req.params.id;

  try {
    await Contact.deleteOne({ id: contactID });
    res.json({ sucess: "Contact deleted." })
  } catch (err) {
    res.json({ error: err });
  }
}