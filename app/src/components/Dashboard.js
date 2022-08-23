import { useContext } from 'react'
import ListSocials from './ListSocials'
import AppContext from "../components/context/app-context"

export default function Dashboard(){


  const [appState, setAppState] = useContext(AppContext)


  return (
    <div>
      <ListSocials/>
    </div>
  )
}

