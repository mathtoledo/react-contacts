import {
  Container,
  UserInfo
} from './styles'
import { formatDate } from '../../utils/formatDate'

export interface User {
  _id: string
  name: string
  email: string
  createdAt: string
  updatedAt: string
}

interface UserProps {
  user: User
  handleRemoveUser: (id: string) => void
}

export default function UserCard({ user, handleRemoveUser } : UserProps) {
  return (
    <Container>
      <UserInfo>
        <strong>{user.name}</strong>
        <p>{user.email}</p>
        <p>@TODO Número de telefone</p>
        <p>@TODO Endereço</p>
        <p>Desde {formatDate(user.createdAt)}</p>
      </UserInfo>

      <button onClick={() => handleRemoveUser(user._id)}>Remover</button>
    </Container>
  )
}
