import { useState } from 'react'
import Notnotunhappy from './tests/notnotunhappy.tsx'
import Verifybutton from './tests/verifybutton.tsx'
import Mouse from './tests/mouse.tsx'

function App() {
  const [text, setText] = useState("Verify that you are human");
  const [verified, setVerified] = useState(false);
  const [rng] = useState(Math.floor(Math.random() * 100));

  const cleared = () => {
    setText("Verified. You may now talk to Andrew.");
    setVerified(true);
  }

  return (
    <>
      <h1>{text}</h1>
      { !verified && rng > 66 &&
      <Notnotunhappy cleared={cleared} />
      }
      { !verified && rng <= 66 && rng > 33 &&
        <Verifybutton cleared={cleared} />
      }
      { !verified && rng <= 33 &&
        <Mouse cleared={cleared} />
      }
    </>
  )
}

export default App
