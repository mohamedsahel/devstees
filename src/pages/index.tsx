import { GetServerSideProps, NextPage } from 'next'

interface Props {
  ready: string
}

const IndexPage: NextPage<Props> = ({ ready }) => {
  return <main>{ready}</main>
}

export default IndexPage

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  return {
    props: {
      ready: 'yes',
    },
  }
}
