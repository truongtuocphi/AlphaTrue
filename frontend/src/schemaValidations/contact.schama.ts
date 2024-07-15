import z from "zod";

export const ContactBody = z.object({
  email: z.string().email(),
});

export type ContactBodyType = z.TypeOf<typeof ContactBody>;
