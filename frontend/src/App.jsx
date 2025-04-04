import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1> PKL`S LOL</h1>
      <h3> Pro Kabaddi leauge Funny Moments </h3>
      <p> Funny Moments Gallery: A scrollable list of clips/photos/viedos  showcasing funny PKL moments</p>
     <p>Like and comment System: Users can Like and comment the funniest moments in PKL.
 Comment Section: Fans can leave funny comments or their reactions.
 Search & Filter: Search by teams, players, or specific seasons.
 Top Moments Leaderboard: A section showing the all-time funniest PKL moments.
 User Submissions: Allow users to upload and share their own funny clips/memes.
</p>
    </>
  )
}

export default App
