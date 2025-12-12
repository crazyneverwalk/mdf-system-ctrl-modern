import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, HeadphonesIcon, Settings, Zap } from "lucide-react"

export default function Hero() {
    return (
        <section
            className="relative py-40 bg-cover bg-center text-white"
            style={{ backgroundImage: "url('/images/hero-background.jpg')" }}
        >
            <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" />
            <div className="container mx-auto px-4 relative">
                <div className="max-w-4xl mx-auto text-center">
                    <Badge className="mb-6 bg-white/10 text-blue-300 hover:bg-white/20 border border-white/20">
                        <Zap className="h-3 w-3 mr-1" />
                        Soporte Técnico Especializado
                    </Badge>
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                        Reparación y Mantenimiento de
                        <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                            {" "}
                            Sistemas Informáticos
                        </span>
                    </h2>
                    <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                        Nos especializamos en la reparación, mantenimiento y análisis de equipos y sistemas
                        informáticos/electrónicos, adaptándonos a los requisitos específicos de cada cliente.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                            size="lg"
                            className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
                        >
                            <Settings className="h-5 w-5 mr-2" />
                            Solicitar Servicio
                            <ArrowRight className="h-4 w-4 ml-2" />
                        </Button>
                        <Button size="lg" variant="outline" className="border-slate-300 text-white hover:bg-white/10 hover:text-white">
                            <HeadphonesIcon className="h-5 w-5 mr-2" />
                            Consulta Gratuita
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
