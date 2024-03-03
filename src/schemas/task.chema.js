import { z } from "zod";

export const createTaskSchema = z.object({
    title: z.string({
        required_error: "Title is requered",
    }),
    description: z
        .string({
            required_error: "Description must be a Strink",
        }),
    date: z.string().datetime().optional(),
});