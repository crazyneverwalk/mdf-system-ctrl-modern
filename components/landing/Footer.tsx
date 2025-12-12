import Logo from "@/components/Logo"

export default function Footer() {
    return (
        <footer className="bg-slate-800 text-white py-12">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <Logo textClassName="text-white" />
                    <div className="text-center md:text-right mt-4 md:mt-0">
                        <p className="text-slate-400 text-sm">© 2024 MDF System Ctrl. Todos los derechos reservados.</p>
                        <p className="text-slate-500 text-xs mt-1">Reparación y mantenimiento de sistemas informáticos</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
