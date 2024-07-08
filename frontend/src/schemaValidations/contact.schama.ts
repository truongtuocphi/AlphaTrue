import z from "zod";

export const ContactBody = z.object({
  name: z.string().trim().min(2).max(255),
  email: z.string().email(),
  message: z.string().trim().min(10),
});

export type ContactBodyType = z.TypeOf<typeof ContactBody>;
