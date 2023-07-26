import { ResetCss } from './styles/reset'
import { GlobalStyles } from './styles/global'

import { Feed } from './pages/Feed'

export const App = () => {
  return (
    <>
    <ResetCss/>
    <GlobalStyles/>

    <Feed/>

    </>
  )
}

