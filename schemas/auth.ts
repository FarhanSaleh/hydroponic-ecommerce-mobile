import { z } from "zod";

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

export const schemaFormLogin = z.object({
  email: z.email("Format email salah"),
  password: z.string().min(1, "Password harus diisi"),
});

export const schemaFormRegister = z.object({
  name: z.string().min(1, "Nama harus diisi"),
  email: z.email("Format email salah"),
  phone_number: z.string().regex(phoneRegex, "Format nomor telepon salah"),
  password: z.string().min(6, "Password harus terdiri dari minimal 6 karakter"),
});

export type SchemaFormLogin = z.infer<typeof schemaFormLogin>;
export type SchemaFormRegister = z.infer<typeof schemaFormRegister>;
