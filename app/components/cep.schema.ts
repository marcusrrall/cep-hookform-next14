import { z } from "zod";

export const schemaForm = z
  .object({
    address: z.object({
      zipCode: z.string().min(9, "Por favor, informe um CEP válido"),
      street: z.string().min(1, "Campo é obrigátorio"),
      number: z.string().min(1, "Campo é obrigátorio"),
      district: z.string().min(1, "Campo é obrigátorio"),
      complement: z.string(),
      city: z.string().min(1, "Campo é obrigátorio"),
      state: z.string().min(1, "Campo é obrigátorio"),
    }),
  })
  .transform((field) => ({
    address: {
      zipCode: field.address.zipCode,
      street: field.address.street,
      number: field.address.number,
      district: field.address.district,
      complement: field.address.complement,
      city: field.address.city,
      state: field.address.state,
    },
  }));
