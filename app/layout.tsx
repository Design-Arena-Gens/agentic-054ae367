import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Guia da Beleza Express - Make perfeita em 10 minutos',
  description: 'Um passo a passo simples pra você se sentir arrumada, confiante e bonita no dia a dia — mesmo sem tempo.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
