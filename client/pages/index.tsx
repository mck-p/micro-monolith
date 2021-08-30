const Page = ({ result }) => (
    <div>Hello</div>
  )

export async function getServerSideProps(context) {
  const result = await fetch(`${process.env.API_BASE}/healthcheck`).then(x => x.json())

  return {
    props: {
      result
    },
  }
}
export default Page