import { GetServerSideProps, NextPage } from 'next'

interface Props {
  ready: string
}

const IndexPage: NextPage<Props> = ({ ready }) => {
  return (
    <main>
      {ready}
      <button className="btn btn-primary">click me</button>
    </main>
  )
}

export default IndexPage

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  return {
    props: {
      ready: 'yes',
    },
  }
}
