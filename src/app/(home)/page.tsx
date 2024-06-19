import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center p-24 gap-4">
      <h1 className="text-2xl">🪄 Magic: The Gathering 🪄</h1>

      <Image
        src="/mtg.jpg"
        alt="Magic: The Gathering - LOTR"
        width={1000}
        height={100}
        className="rounded-lg"
      />

      <p className="text-center max-w-[1000px] mb-8">
        Magic: The Gathering é um jogo de cartas colecionáveis onde os jogadores assumem o papel
        de poderosos magos, conhecidos como &quot;planeswalkers&quot;, que usam decks personalizados de cartas
        para lançar feitiços, convocar criaturas e derrotar seus oponentes.
        Lançado em 1993, combina estratégia, sorte e habilidade, e é famoso por sua complexidade
        e a riqueza de seu universo fictício.
      </p>
    </main>
  );
}
