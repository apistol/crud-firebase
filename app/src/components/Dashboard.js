import {useContext} from 'react'
import SocialModal from "./SocialModal"
import AppContext from '../context/app-context'

export default function Dashboard() {

  const [appState, setAppState] = useContext(AppContext)
  return (
    <div style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
        <h2>Socials</h2>
        {appState.socials.map((e) => {
          return <a href={e.socialURL.value}>{e.socialName.value}</a>
        })}
        <SocialModal/>
    </div>
  )
}
