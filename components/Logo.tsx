import Link from "next/link"
import { Cpu } from "lucide-react"

interface LogoProps {
  textClassName?: string
}

const Logo = ({ textClassName = "text-slate-800" }: LogoProps) => {
  return (
    <Link href="/" className="flex items-center gap-2 group">
      <div className="bg-blue-600 p-2 rounded-lg group-hover:bg-blue-700 transition-colors">
        <Cpu className="h-6 w-6 text-white" />
      </div>
      <div className={`font-bold text-xl tracking-tight ${textClassName}`}>
        MDF <span className="text-blue-600">System</span> Ctrl
      </div>
    </Link>
  )
}

export default Logo
