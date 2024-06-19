import { Metadata } from "next"

/* eslint-disable @next/next/no-img-element */
interface Card {
  id: string
  name: string
  imageUrl: string
}

interface CardProps {
  params: {
    card: string
  }
}

export function generateMetadata(): Metadata {
  return {
    title: `Detalhes do card | Magic: The Gathering`
  }
}

export default async function Card({ params }: CardProps) {
  const response = await fetch(`https://api.magicthegathering.io/v1/cards/${params.card}`)
  const { card } = await response.json()

  return (
    <div className="flex flex-col items-center p-24">
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 pt-8">
      <img className="rounded-lg mx-auto" src={card.imageUrl} alt={card.name} />

      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{card.name}</h5>

        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{card.text}</p>
      </div>
    </div>
    </div>
  )
}