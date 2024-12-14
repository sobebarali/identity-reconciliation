import { api } from "encore.dev/api";
import { SQLDatabase } from "encore.dev/storage/sqldb";

const db = new SQLDatabase("identity", { migrations: "./migrations" });

interface IdentifyParams {
  email?: string;
  phoneNumber?: string;
}

interface Contact {
  primaryContactId: number;
  emails: string[];
  phoneNumbers: string[];
  secondaryContactIds: number[];
}

export const identify = api(
  { expose: true, auth: false, method: "POST", path: "/identify" },
  async ({
    email,
    phoneNumber,
  }: IdentifyParams): Promise<{ contact: Contact }> => {
    // TODO: Implement the logic 
    return { contact: {} as Contact };
  }
);
