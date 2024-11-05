import { z } from "zod";

export type FormState =
  | {
      error?: {
        name?: string[];
        email?: string[];
        password?: string[];
      };
      message?: string;
    }
  | undefined;

export const SignupFormSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: "Нэр дор хаяж 2 тэмдэгттэй байх ёстой.",
    })
    .trim(),
  email: z
    .string()
    .email({ message: "Бүртгэлтэй имэйл оруулна уу." })
    .trim(),
  password: z
    .string()
    .min(8, { message: "Дор хаяж 8 тэмдэгттэй байх" })
    .regex(/[a-zA-Z]/, {
      message: "Дор хаяж нэг үсэг агуулна.",
    })
    .regex(/[0-9]/, {
      message: "Дор хаяж нэг тоог агуулна.",
    })
    .regex(/[^a-zA-Z0-9]/, {
      message: "Дор хаяж нэг тусгай тэмдэгт агуулсан.",
    })
    .trim(),
});

export const LoginFormSchema = z.object({
  email: z.string().email({ message: "Pleasa enter a valid email."}),
  password: z.string().min(1, { message: "Password field must not be empty."}),
});