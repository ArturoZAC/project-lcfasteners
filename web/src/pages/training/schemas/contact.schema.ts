import z from "zod";

export const contactSchema = z.object({
  fullName: z.string().min(2, "El nombre es obligatorio"),
  email: z.string().email("El email es obligatorio"),
  company: z.string().min(2, "El nombre de la empresa es obligatorio"),
  phone: z
    .string()
    .regex(
      /^\+?\d{6,15}$/,
      "Ingrese un teléfono válido con dígitos, puede incluir '+' y código de país",
    ),
  message: z.string().nonempty("El mensaje es obligatorio"),
});

export type ContactSchemaType = z.infer<typeof contactSchema>;
