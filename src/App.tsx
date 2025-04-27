import { AuthLayout } from './auth/layout/AuthLayout'
import ChatLayout from './chat/layout/ChatLayout'
import ChatPages from './chat/pages/ChatPages'

const App = () => {
  return (
    // <AuthLayout />
    <ChatLayout children={<ChatPages />} />
  )
}

export default App