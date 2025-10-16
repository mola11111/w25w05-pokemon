import { useParams, Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { getPokemonDetail, getPokemonSpecies } from '../api/pokemonApi'

const PokemonDetail = () => {
  const { id } = useParams()

  const { data: pokemon, isLoading } = useQuery({
    queryKey: ["pokemon", id],
    queryFn: async () => {
      const detail = await getPokemonDetail(id);
      const species = await getPokemonSpecies(detail.id)
      const koreanName = species.names.find((n) => n.language.name === "ko")?.name

      return {
        id: detail.id,
        name: koreanName || detail.name,
        image: detail.sprites.other["official-artwork"].front_default,
        types: detail.types.map((t) => t.type.name),
        height: detail.height,
        weight: detail.weight,
      }
    },
  })

  if (isLoading) return <p className="text-center mt-10">불러오는 중...</p>

  return (
    <div className="p-6 flex flex-col items-center">
      <img 
        src={pokemon.image} 
        alt={pokemon.name}
        className="w-48 h-48 mb-4"
      />
      <h2 className="text-2xl font-bold">{pokemon.name}</h2>
      <p className="text-gray-500 mb-4">#{pokemon.id}</p>
      <div className="space-y-2 text-center">
        <p>타입: {pokemon.types.join(", ")}</p>
        <p>키: {pokemon.height / 10} m</p>
        <p>몸무게: {pokemon.weight / 10} kg</p>
      </div>
      <Link 
        to="/"
        className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
      >
        돌아가기
      </Link>
    </div>
  )
}

export default PokemonDetail