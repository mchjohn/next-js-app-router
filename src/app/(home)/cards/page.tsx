/* eslint-disable @next/next/no-img-element */

import { Metadata } from "next"
import Link from "next/link"

interface Card {
  id: string
  name: string
  imageUrl: string
}

export const metadata: Metadata = {
  title: "Lista de cards",
}

export default async function Cards() {
  const response = await fetch('https://api.magicthegathering.io/v1/cards')
  const { cards } = await response.json()

  const cardsWithImg = cards.filter((card: Card)  => card.imageUrl)

  return (
    <div className="p-4">
      <ul className="grid grid-cols-4 gap-8">
        {cardsWithImg.map((card: Card) => (
          <li key={card.id}>
            <Link href={`/cards/${card.id}`}>
            <img src={card.imageUrl} alt={card.name} className="hover:scale-110 transition duration-500 cursor-pointer object-cover rounded-lg" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}