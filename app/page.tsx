import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Cpu,
  Monitor,
  Smartphone,
  HardDrive,
  Wrench,
  Shield,
  Clock,
  Users,
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  ArrowRight,
  Zap,
  Settings,
  HeadphonesIcon,
} from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-br from-blue-600 to-cyan-600 p-2 rounded-lg">
                <Cpu className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-800">MDF System Ctrl</h1>
                <p className="text-sm text-slate-600">Soporte Técnico Profesional</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#servicios" className="text-slate-600 hover:text-blue-600 transition-colors">
                Servicios
              </a>
              <a href="#nosotros" className="text-slate-600 hover:text-blue-600 transition-colors">
                Nosotros
              </a>
              <a href="#contacto" className="text-slate-600 hover:text-blue-600 transition-colors">
                Contacto
              </a>
              <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700">
                <Phone className="h-4 w-4 mr-2" />
                Llamar Ahora
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-cyan-600/10"></div>
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="circuit" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <path
                  d="M 0 10 L 10 10 L 10 0 M 10 10 L 20 10 M 10 10 L 10 20"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  fill="none"
                />
                <circle cx="10" cy="10" r="1" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit)" />
          </svg>
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-blue-100 text-blue-700 hover:bg-blue-200">
              <Zap className="h-3 w-3 mr-1" />
              Soporte Técnico Especializado
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6 leading-tight">
              Reparación y Mantenimiento de
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                {" "}
                Sistemas Informáticos
              </span>
            </h2>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
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
              <Button size="lg" variant="outline" className="border-slate-300 hover:bg-slate-50">
                <HeadphonesIcon className="h-5 w-5 mr-2" />
                Consulta Gratuita
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
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
            <Card className="group hover:shadow-xl transition-all duration-300 border-slate-200 hover:border-blue-200">
              <CardHeader>
                <div className="bg-gradient-to-br from-blue-100 to-cyan-100 p-3 rounded-lg w-fit group-hover:from-blue-200 group-hover:to-cyan-200 transition-colors">
                  <Monitor className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-slate-800">Reparación de PC</CardTitle>
                <CardDescription>
                  Diagnóstico y reparación completa de computadoras de escritorio y portátiles
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Diagnóstico completo
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Reparación de hardware
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Optimización del sistema
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-slate-200 hover:border-blue-200">
              <CardHeader>
                <div className="bg-gradient-to-br from-green-100 to-emerald-100 p-3 rounded-lg w-fit group-hover:from-green-200 group-hover:to-emerald-200 transition-colors">
                  <Smartphone className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-slate-800">Dispositivos Móviles</CardTitle>
                <CardDescription>
                  Reparación especializada de smartphones, tablets y dispositivos electrónicos
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Cambio de pantallas
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Reparación de placas
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Recuperación de datos
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-slate-200 hover:border-blue-200">
              <CardHeader>
                <div className="bg-gradient-to-br from-purple-100 to-violet-100 p-3 rounded-lg w-fit group-hover:from-purple-200 group-hover:to-violet-200 transition-colors">
                  <HardDrive className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle className="text-slate-800">Recuperación de Datos</CardTitle>
                <CardDescription>
                  Recuperación profesional de información perdida en discos duros y dispositivos
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Análisis forense
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Recuperación avanzada
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Backup y migración
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-slate-200 hover:border-blue-200">
              <CardHeader>
                <div className="bg-gradient-to-br from-orange-100 to-red-100 p-3 rounded-lg w-fit group-hover:from-orange-200 group-hover:to-red-200 transition-colors">
                  <Wrench className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle className="text-slate-800">Mantenimiento Preventivo</CardTitle>
                <CardDescription>
                  Servicios de mantenimiento regular para prevenir fallas y optimizar rendimiento
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Limpieza profunda
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Actualización de software
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Revisión de componentes
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-slate-200 hover:border-blue-200">
              <CardHeader>
                <div className="bg-gradient-to-br from-cyan-100 to-blue-100 p-3 rounded-lg w-fit group-hover:from-cyan-200 group-hover:to-blue-200 transition-colors">
                  <Shield className="h-6 w-6 text-cyan-600" />
                </div>
                <CardTitle className="text-slate-800">Seguridad Informática</CardTitle>
                <CardDescription>
                  Protección y análisis de seguridad para sistemas y redes empresariales
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Análisis de vulnerabilidades
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Instalación de antivirus
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Configuración de firewall
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-slate-200 hover:border-blue-200">
              <CardHeader>
                <div className="bg-gradient-to-br from-indigo-100 to-purple-100 p-3 rounded-lg w-fit group-hover:from-indigo-200 group-hover:to-purple-200 transition-colors">
                  <HeadphonesIcon className="h-6 w-6 text-indigo-600" />
                </div>
                <CardTitle className="text-slate-800">Soporte Técnico</CardTitle>
                <CardDescription>
                  Asistencia técnica remota y presencial para resolver problemas informáticos
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Soporte remoto
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Asistencia presencial
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Consultoría técnica
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="nosotros" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
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

      {/* Contact Section */}
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
                      <Phone className="h-5 w-5 text-blue-600" />
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

              <Card className="border-slate-200">
                <CardHeader>
                  <CardTitle>Solicitar Presupuesto</CardTitle>
                  <CardDescription>Describe tu problema y te contactaremos a la brevedad</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-slate-700 block mb-2">Nombre</label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-slate-700 block mb-2">Teléfono</label>
                      <input
                        type="tel"
                        className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Tu teléfono"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-700 block mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="tu@email.com"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-700 block mb-2">Describe tu problema</label>
                    <textarea
                      rows={4}
                      className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Cuéntanos qué problema tienes con tu equipo..."
                    />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700">
                    <Mail className="h-4 w-4 mr-2" />
                    Enviar Consulta
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="bg-gradient-to-br from-blue-600 to-cyan-600 p-2 rounded-lg">
                <Cpu className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold">MDF System Ctrl</h1>
                <p className="text-sm text-slate-400">Soporte Técnico Profesional</p>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-slate-400 text-sm">© 2024 MDF System Ctrl. Todos los derechos reservados.</p>
              <p className="text-slate-500 text-xs mt-1">Reparación y mantenimiento de sistemas informáticos</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
