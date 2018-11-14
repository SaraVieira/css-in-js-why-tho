import { Query } from 'react-apollo'
import { GET_MODAL } from './queries'

export default () => (
  <Query query={GET_MODAL}>
    {({ loading, error, data: { modal } }) => {
      if (loading) {
        return 'loading'
      }
      if (error) return `Error!: ${error}`
      return <Modal isOpen={modal.isOpen}>Of course they do</Modal>
    }}
  </Query>
)
