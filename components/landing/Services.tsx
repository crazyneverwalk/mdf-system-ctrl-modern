import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, HardDrive, HeadphonesIcon, Monitor, Shield, Smartphone, Wrench } from "lucide-react"

export default function Services() {
    const serviceCategories = [
        {
            title: "Reparación de PC",
            description: "Diagnóstico y reparación completa de computadoras de escritorio y portátiles",
            icon: Monitor,
            iconColor: "text-blue-600",
            gradient: "from-blue-100 to-cyan-100",
            hoverGradient: "group-hover:from-blue-200 group-hover:to-cyan-200",
            items: ["Diagnóstico completo", "Reparación de hardware", "Optimización del sistema"],
        },
        {
            title: "Dispositivos Móviles",
            description: "Reparación especializada de smartphones, tablets y dispositivos electrónicos",
            icon: Smartphone,
            iconColor: "text-green-600",
            gradient: "from-green-100 to-emerald-100",
            hoverGradient: "group-hover:from-green-200 group-hover:to-emerald-200",
            items: ["Cambio de pantallas", "Reparación de placas", "Recuperación de datos"],
        },
        {
            title: "Recuperación de Datos",
            description: "Recuperación profesional de información perdida en discos duros y dispositivos",
            icon: HardDrive,
            iconColor: "text-purple-600",
            gradient: "from-purple-100 to-violet-100",
            hoverGradient: "group-hover:from-purple-200 group-hover:to-violet-200",
            items: ["Análisis forense", "Recuperación avanzada", "Backup y migración"],
        },
        {
            title: "Mantenimiento Preventivo",
            description: "Servicios de mantenimiento regular para prevenir fallas y optimizar rendimiento",
            icon: Wrench,
            iconColor: "text-orange-600",
            gradient: "from-orange-100 to-red-100",
            hoverGradient: "group-hover:from-orange-200 group-hover:to-red-200",
            items: ["Limpieza profunda", "Actualización de software", "Revisión de componentes"],
        },
        {
            title: "Seguridad Informática",
            description: "Protección y análisis de seguridad para sistemas y redes empresariales",
            icon: Shield,
            iconColor: "text-cyan-600",
            gradient: "from-cyan-100 to-blue-100",
            hoverGradient: "group-hover:from-cyan-200 group-hover:to-blue-200",
            items: ["Análisis de vulnerabilidades", "Instalación de antivirus", "Configuración de firewall"],
        },
        {
            title: "Soporte Técnico",
            description: "Asistencia técnica remota y presencial para resolver problemas informáticos",
            icon: HeadphonesIcon,
            iconColor: "text-indigo-600",
            gradient: "from-indigo-100 to-purple-100",
            hoverGradient: "group-hover:from-indigo-200 group-hover:to-purple-200",
            items: ["Soporte remoto", "Asistencia presencial", "Consultoría técnica"],
        },
    ]

    return (
        <section id="servicios" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <Badge className="mb-4 bg-slate-100 text-slate-700">Nuestros Servicios</Badge>
                    <h3 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Soluciones Técnicas Integrales</h3>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        Ofrecemos servicios especializados para mantener tus equipos funcionando de manera óptima
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {serviceCategories.map((service, index) => (
                        <Card
                            key={index}
                            className="group hover:shadow-xl transition-all duration-300 border-slate-200 hover:border-blue-200"
                        >
                            <CardHeader>
                                <div
                                    className={`bg-gradient-to-br ${service.gradient} p-3 rounded-lg w-fit ${service.hoverGradient} transition-colors`}
                                >
                                    <service.icon className={`h-6 w-6 ${service.iconColor}`} />
                                </div>
                                <CardTitle className="text-slate-800">{service.title}</CardTitle>
                                <CardDescription>{service.description}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-sm text-slate-600">
                                    {service.items.map((item, i) => (
                                        <li key={i} className="flex items-center">
                                            <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
