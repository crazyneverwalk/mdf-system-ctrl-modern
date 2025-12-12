"use client"

import { useActionState, useEffect, useRef } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, MapPin, Loader2 } from "lucide-react"
import { toast } from "sonner"
import { submitContactForm, type ContactFormState } from "@/app/actions"
import { Badge } from "@/components/ui/badge"

const formSchema = z.object({
    name: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres" }),
    phone: z.string().min(6, { message: "El teléfono debe tener al menos 6 caracteres" }),
    email: z.string().email({ message: "Email inválido" }),
    message: z.string().min(10, { message: "El mensaje debe tener al menos 10 caracteres" }),
})

type FormData = z.infer<typeof formSchema>

const initialState: ContactFormState = {
    message: "",
    success: false,
}

export default function ContactForm() {
    const [state, formAction, isPending] = useActionState(submitContactForm, initialState)
    const formRef = useRef<HTMLFormElement>(null)

    const {
        register,
        formState: { errors },
        reset,
    } = useForm<FormData>({
        resolver: zodResolver(formSchema),
        mode: "onBlur",
    })

    useEffect(() => {
        if (state.success) {
            toast.success(state.message)
            reset()
            formRef.current?.reset()
        } else if (state.message && !state.success) {
            toast.error(state.message)
        }
    }, [state, reset])

    return (
        <section id="contacto" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <Badge className="mb-4 bg-slate-100 text-slate-700">Contacto</Badge>
                        <h3 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">¿Necesitas Ayuda Técnica?</h3>
                        <p className="text-slate-600">Contáctanos para una consulta gratuita y presupuesto sin compromiso</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <h4 className="text-xl font-semibold text-slate-800 mb-6">Información de Contacto</h4>
                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="bg-blue-100 p-3 rounded-lg">
                                        <Mail className="h-5 w-5 text-blue-600" />
                                    </div>
                                    <div>
                                        <h5 className="font-medium text-slate-800">Teléfono</h5>
                                        <p className="text-slate-600">+54 11 XXXX-XXXX</p>
                                        <p className="text-sm text-slate-500">Lunes a Viernes 9:00 - 18:00</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="bg-green-100 p-3 rounded-lg">
                                        <Mail className="h-5 w-5 text-green-600" />
                                    </div>
                                    <div>
                                        <h5 className="font-medium text-slate-800">Email</h5>
                                        <p className="text-slate-600">info@mdfsystemctrl.com.ar</p>
                                        <p className="text-sm text-slate-500">Respuesta en 24 horas</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="bg-purple-100 p-3 rounded-lg">
                                        <MapPin className="h-5 w-5 text-purple-600" />
                                    </div>
                                    <div>
                                        <h5 className="font-medium text-slate-800">Ubicación</h5>
                                        <p className="text-slate-600">Buenos Aires, Argentina</p>
                                        <p className="text-sm text-slate-500">Servicio a domicilio disponible</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Card className="border-slate-200 shadow-lg">
                            <CardHeader>
                                <CardTitle>Solicitar Presupuesto</CardTitle>
                                <CardDescription>Describe tu problema y te contactaremos a la brevedad</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <form ref={formRef} action={formAction}>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label htmlFor="name" className="text-sm font-medium text-slate-700 block mb-2">
                                                Nombre
                                            </label>
                                            <input
                                                {...register("name")}
                                                id="name"
                                                className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                placeholder="Tu nombre"
                                            />
                                            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                                            {state.errors?.name && <p className="text-red-500 text-xs mt-1">{state.errors.name[0]}</p>}
                                        </div>
                                        <div>
                                            <label htmlFor="phone" className="text-sm font-medium text-slate-700 block mb-2">
                                                Teléfono
                                            </label>
                                            <input
                                                {...register("phone")}
                                                type="tel"
                                                id="phone"
                                                className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                placeholder="Tu teléfono"
                                            />
                                            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                                            {state.errors?.phone && <p className="text-red-500 text-xs mt-1">{state.errors.phone[0]}</p>}
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <label htmlFor="email" className="text-sm font-medium text-slate-700 block mb-2">
                                            Email
                                        </label>
                                        <input
                                            {...register("email")}
                                            type="email"
                                            id="email"
                                            className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="tu@email.com"
                                        />
                                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                                        {state.errors?.email && <p className="text-red-500 text-xs mt-1">{state.errors.email[0]}</p>}
                                    </div>
                                    <div className="mt-4">
                                        <label htmlFor="message" className="text-sm font-medium text-slate-700 block mb-2">
                                            Describe tu problema
                                        </label>
                                        <textarea
                                            {...register("message")}
                                            id="message"
                                            rows={4}
                                            className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="Cuéntanos qué problema tienes con tu equipo..."
                                        />
                                        {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
                                        {state.errors?.message && <p className="text-red-500 text-xs mt-1">{state.errors.message[0]}</p>}
                                    </div>
                                    <Button
                                        type="submit"
                                        className="w-full mt-6 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
                                        disabled={isPending}
                                    >
                                        {isPending ? (
                                            <>
                                                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                                                Enviando...
                                            </>
                                        ) : (
                                            <>
                                                <Mail className="h-4 w-4 mr-2" />
                                                Enviar Consulta
                                            </>
                                        )}
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    )
}
