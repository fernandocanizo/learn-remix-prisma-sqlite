import { useLoaderData, json } from "@remix-run/react"
import { prisma } from "~/only.server/db"

export const loader = async () => {
  const branding = await prisma.branding.findMany()
  console.debug(">>> loader", {branding})

  return json(branding)
}

export default function Index() {
  const branding = useLoaderData<typeof loader>()
  console.debug(">>> component", {branding})

  return (
    <>
      <div>
        <h1>Branding Data</h1>
      </div>
      <ul>
        {branding.map(v => (
          <li>
            <strong>{v.tenant} - {v.locale}</strong>
            <ul>
              <li><strong>logotype:</strong> {v.logotype}</li>
              <li><strong>servicePoint:</strong> {v.servicePoint}</li>
              <li><strong>servicePointID:</strong> {v.servicePointID}</li>
              <li><strong>servicePointReferenceFormat:</strong> {v.servicePointReferenceFormat}</li>
              <li><strong>account:</strong> {v.account}</li>
              <li><strong>meterID:</strong> {v.meterID}</li>
              <li><strong>meterReferenceFormat:</strong> {v.meterReferenceFormat}</li>
              <li><strong>client:</strong> {v.client}</li>
              <li><strong>clientID:</strong> {v.clientID}</li>
              <li><strong>clientReferenceFormat:</strong> {v.clientReferenceFormat}</li>
              <li><strong>deviceReferenceFormat:</strong> {v.deviceReferenceFormat}</li>
              <li><strong>defaultLatitude:</strong> {v.defaultLatitude}</li>
              <li><strong>defaultLongitude:</strong> {v.defaultLongitude}</li>
              <li><strong>defaultAddress:</strong> {v.defaultAddress}</li>
              <li><strong>createdAt:</strong> {v.createdAt}</li>
              <li><strong>updatedAt:</strong> {v.updatedAt}</li>
            </ul>
          </li>
        ))}
      </ul>
    </>
  )
}
