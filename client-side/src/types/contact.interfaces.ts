export interface IContact {
  name: string,
  email: string,
  phone: string,
  _id?: string,
}

export interface IContactFetch {
  _id: string,
  name: string,
  email: string,
  phone: string,
  owner: Object ,
  createdAt: Date,
  updatedAt: Date,
  __v: number,
}