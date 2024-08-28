import { z } from 'zod';

export const loginFormSchema = z.object({
  email: z.string().trim().email().min(1),
  password: z.string().min(1),
  persist: z.boolean().default(false),
});

export type LoginFormValues = z.infer<typeof loginFormSchema>;
