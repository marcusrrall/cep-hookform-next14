import { z } from "zod";
import { schemaForm } from "./cep.schema";

export type FormProps = z.infer<typeof schemaForm>;

export type AddressProps = {
  logradouro: string;
  bairro: string;
  complemento: string;
  localidade: string;
  uf: string;
};
