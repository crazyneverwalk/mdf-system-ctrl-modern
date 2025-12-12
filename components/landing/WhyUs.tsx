import { Badge } from "@/components/ui/badge"
import { Clock, Shield, Users } from "lucide-react"

export default function WhyUs() {
    return (
        <section id="nosotros" className="py-20 bg-slate-100">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <Badge className="mb-4 bg-blue-100 text-blue-700">¿Por qué elegirnos?</Badge>
                    <h3 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Experiencia y Confiabilidad</h3>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="text-center">
                        <div className="bg-gradient-to-br from-blue-600 to-cyan-600 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                            <Clock className="h-8 w-8 text-white" />
                        </div>
                        <h4 className="text-xl font-semibold text-slate-800 mb-3">Servicio Rápido</h4>
                        <p className="text-slate-600">
                            Diagnóstico y reparación eficiente para minimizar el tiempo de inactividad de tus equipos
                        </p>
                    </div>

                    <div className="text-center">
                        <div className="bg-gradient-to-br from-green-600 to-emerald-600 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                            <Users className="h-8 w-8 text-white" />
                        </div>
                        <h4 className="text-xl font-semibold text-slate-800 mb-3">Atención Personalizada</h4>
                        <p className="text-slate-600">Nos adaptamos a las necesidades específicas de cada cliente y proyecto</p>
                    </div>

                    <div className="text-center">
                        <div className="bg-gradient-to-br from-purple-600 to-violet-600 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                            <Shield className="h-8 w-8 text-white" />
                        </div>
                        <h4 className="text-xl font-semibold text-slate-800 mb-3">Garantía de Calidad</h4>
                        <p className="text-slate-600">Todos nuestros servicios incluyen garantía y seguimiento post-reparación</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
