import Logo from "@/components/Logo"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Header() {
    const navItems = [
        { label: "Servicios", href: "#servicios" },
        { label: "Nosotros", href: "#nosotros" },
        { label: "Contacto", href: "#contacto" },
    ]

    return (
        <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    <Logo />

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-6">
                        {navItems.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className="text-slate-600 hover:text-blue-600 transition-colors font-medium"
                            >
                                {item.label}
                            </a>
                        ))}
                    </nav>

                    {/* Mobile Navigation */}
                    <div className="md:hidden">
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon">
                                    <Menu className="h-6 w-6" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent>
                                <div className="flex flex-col space-y-4 mt-8">
                                    {navItems.map((item) => (
                                        <a
                                            key={item.href}
                                            href={item.href}
                                            className="text-lg font-medium text-slate-800 hover:text-blue-600"
                                        >
                                            {item.label}
                                        </a>
                                    ))}
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </header>
    )
}
