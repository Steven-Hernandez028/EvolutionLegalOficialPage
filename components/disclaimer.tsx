import { Shield } from "lucide-react";



export default function Disclaimer() {
    return (
        < div className="flex items-center justify-center space-x-2 text-white/50 text-xs pb-10" >
            <Shield className="h-3 w-3" />
            <span>Todas las fotos publicadas son clientes reales que ha trabajado con nuestra firma legal y nos han dado la autorizacion escrita que podemos publicar sus imagenes </span>
        </div >
    )
}