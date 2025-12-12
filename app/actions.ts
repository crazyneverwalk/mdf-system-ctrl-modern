"use server"

import { z } from "zod"

const contactFormSchema = z.object({
    name: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres" }),
    phone: z.string().min(6, { message: "El teléfono debe tener al menos 6 caracteres" }),
    email: z.string().email({ message: "Email inválido" }),
    message: z.string().min(10, { message: "El mensaje debe tener al menos 10 caracteres" }),
})

export type ContactFormState = {
    errors?: {
        name?: string[]
        phone?: string[]
        email?: string[]
        message?: string[]
    }
    message?: string
    success?: boolean
}

export async function submitContactForm(prevState: ContactFormState, formData: FormData): Promise<ContactFormState> {
    const validatedFields = contactFormSchema.safeParse({
        name: formData.get("name"),
        phone: formData.get("phone"),
        email: formData.get("email"),
        message: formData.get("message"),
    })

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: "Por favor revisa los campos del formulario.",
            success: false,
        }
    }

    // Simulate email sending delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Here you would implement the actual email sending logic using nodemailer or an API
    // const { name, email, phone, message } = validatedFields.data;
    // await sendEmail({ ... });

    console.log("Form submitted:", validatedFields.data)

    return {
        success: true,
        message: "¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.",
    }
}
