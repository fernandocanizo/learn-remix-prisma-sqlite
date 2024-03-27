import { useLoaderData, Links, json } from "@remix-run/react"
import { prisma } from "~/only.server/db"

export const loader = async () => {
  const data = {
    teams: await prisma.team.findMany(),
  }

  return json(data)
}

export default function Index() {
  const { teams } = useLoaderData<typeof loader>()

  return (
    <>
      <div>
        <h1>Soccer Teams around the world</h1>
      </div>
      <ul>
        {teams.map(team => (
          <li key={team.id}>
            <span>{team.team}</span>
            |
            <span>{team.country}</span>
          </li>
        ))}
      </ul>
    </>
  )
}
