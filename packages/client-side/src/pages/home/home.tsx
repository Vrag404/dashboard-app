import {
  Button,
  FormContainer,
  Input,
  InputWrapper,
  Label,
  RefreshContainer,
  Table,
  Tbody,
  Td,
  TdIcon,
  Th,
  Thead,
  Tr
} from "./styles/home.styled";

import { IContactFetch } from "../../types/contact.interfaces";
import { retrieveToken } from "../../utils/utils";
import { FaTrash, FaEdit } from "react-icons/fa";
import { useEffect, useState } from "react";
import { BiRefresh } from "react-icons/bi";

import * as ContactService from "../../services/contact.service";
import * as Styled from "../../styles/base-components";

import api from "../../services/api.service";

const Home = () => {
  const [data, setData] = useState<IContactFetch[]>([]);
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [name, setName] = useState<string>("");

  const handleName = (event: React.FormEvent<HTMLInputElement>) => {
    setName(event.currentTarget.value);
  }

  const handleEmail = (event: React.FormEvent<HTMLInputElement>) => {
    setEmail(event.currentTarget.value);
  }

  const handlePhone = (event: React.FormEvent<HTMLInputElement>) => {
    setPhone(event.currentTarget.value);
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    return await ContactService.createContact({ name, email, phone })
  }

  const handleDelete = async (_id: string) => {
    return await ContactService.deleteContact(_id)
  }

  const handleEdit = async () => {
    // return await ContactService.updateContact({ name, email, phone });
  }

  const fetchData = async () => {
    const API_URL: string = import.meta.env.VITE_API_URL as string;

    const token = retrieveToken();

    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };
    
    await api.get(API_URL + 'getContacts', config)
    .then(res => {
      setData(res.data)
    });
   }

  useEffect(() => {
   fetchData()
  }, []);

  console.log(data)

  return (
    <Styled.Container>

      <Styled.Content>
        <Styled.SectionTitle>
          Contacts
        </Styled.SectionTitle>

        <FormContainer onSubmit={handleSubmit}>

          <InputWrapper>
            <Label>Name</Label>

            <Input
              name="name"
              value={name}
              onChange={handleName}
            />
          </InputWrapper>

          <InputWrapper>
            <Label>Email</Label>

            <Input
              value={email}
              name="email"
              onChange={handleEmail}
            />
          </InputWrapper>

          <InputWrapper>
            <Label>Phone Number</Label>

            <Input
              name="phone"
              value={phone}
              onChange={handlePhone}
            />
          </InputWrapper>

          <Button
            type="submit"
          >
            Save
          </Button>

        </FormContainer>

          <Table>
            <Thead>
              <Tr>
                <Th onlyWeb>Name</Th>
                <Th>Email</Th>
                <Th onlyWeb>Phone</Th>
                <Th></Th>
                <Th>
                  <RefreshContainer>
                    <BiRefresh 
                      size={23} 
                      onClick={() => fetchData()}
                    />
                  </RefreshContainer>
                </Th>
              </Tr>
            </Thead>

            <Tbody>

              {data?.map((contact, index) => (
                <Tr key={index}>
                  <Td width="30%">{contact.name}</Td>
                  <Td width="30%">{contact.email}</Td>
                  <Td onlyWeb width="30%">{contact.phone}</Td>

                  <Td alignCenter width="5%">
                    <TdIcon>
                      <FaEdit onClick={() => {}} />
                    </TdIcon>
                  </Td>

                  <Td alignCenter width="5%">
                    <TdIcon>
                      <FaTrash onClick={() => handleDelete(contact._id)} />
                    </TdIcon>
                  </Td>

                </Tr>
              ))}

            </Tbody>
          </Table>

      </Styled.Content>

    </Styled.Container>
  )
}

export default Home;