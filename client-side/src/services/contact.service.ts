import { useEffect } from 'react';
import { IContact } from "../types/contact.interfaces";
import { retrieveToken } from "../utils/utils";
import api from "./api.service";

const API_URL: string = import.meta.env.VITE_API_URL as string;

const token = retrieveToken();

const config = {
  headers: { Authorization: `Bearer ${token}` }
};

export const createContact = async ({ name, email, phone }: IContact) => {
  const data = {
    name: name,
    email: email,
    phone: phone,
  }

  return await api.post(API_URL + 'createContact', data, config);
}

export const getContacts = async () => {
  return await api.get(API_URL + 'getContacts', config);
}

export const deleteContact = async (_id: string) => {
  return await api.delete(API_URL + `deleteContact/${_id}`, config)
}

export const updateContact = async ({ name, email, phone, _id }: IContact) => {
  const data = {
    name,
    email, 
    phone
  }

  return await api.put(API_URL + `updateContact/${_id}`, data)
}