import {useContext} from 'react'
import SocialModal from "./SocialModal"
import AppContext from '../context/app-context'
import ProfileCard from './ProfileCard'

export default function Dashboard() {

  const [appState, setAppState] = useContext(AppContext)
  return (
    <div style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
        {appState.socials.map((social) => {
          return <a target="_blank"
          rel="noopener noreferrer" href={social.socialURL}>{social.socialName}</a>
        })}
        <ProfileCard/>
        <h2>Socials</h2>
        <SocialModal/>
    </div>
  )
}
