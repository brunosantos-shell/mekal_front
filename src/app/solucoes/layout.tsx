import { type ReactNode } from "react"



interface LayoutSolucoesProps {
    children: ReactNode;
}



export default function LayoutSolucoes ({children}: LayoutSolucoesProps) {
    return (
                <div>
                    {children}
                </div>
    )
}
