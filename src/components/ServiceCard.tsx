"use client"
import React, { useState } from "react"
import Link from "next/link"

type Props = {
  title: string
  description: string
  price: string
  href?: string
}

export default function ServiceCard({ title, description, price, href = "#" }: Props) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="group relative p-6 rounded-2xl shadow-xl bg-white border hover:shadow-2xl transition-all duration-300 ease-in-out"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-sm text-gray-600 mb-6">{description}</p>

      <div className="h-10 overflow-hidden mb-4 text-lg font-bold text-indigo-600">
        {hovered ? (
          <span className="transition-opacity duration-500 opacity-100">{price}</span>
        ) : (
          <span className="transition-opacity duration-500 opacity-50 italic">Survolez pour voir</span>
        )}
      </div>

      <Link
        href={href}
        className="inline-block bg-indigo-600 text-white px-4 py-2 mt-2 rounded-full text-sm font-medium shadow hover:bg-indigo-700 transition duration-300"
      >
        Commencer maintenant
      </Link>
    </div>
  )
}
