const Page = ({ result }) => {
  console.log(result)

  return (
    <div>Hello</div>
  )
}

export async function getServerSideProps(context) {
  const result = await fetch(`${process.env.API_BASE}`).then(x => x.json())

  return {
    props: {
      result
    },
  }
}
export default Page