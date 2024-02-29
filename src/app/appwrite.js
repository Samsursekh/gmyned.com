import { Client, Databases, ID } from "appwrite";

export const client = new Client();

client
  .setEndpoint(`${process.env.NEXT_PUBLIC_APP_SET_ENDPOINT}`)
  .setProject(`${process.env.NEXT_PUBLIC_APP_PROJECT_ID}`);

export const database = new Databases(client);

export { ID } from "appwrite";
