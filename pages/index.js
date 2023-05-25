import { useState } from 'react'
import axios from 'axios'

export default function Home() {
  const [test, setTest] = useState('')

  const fetchData = async () => {
    const res = await axios.get('https://icy-drink-production.up.railway.app/api/test/show')
    setTest(res.data)
  }

  return (
    <div>
      {test}
      <button onClick={() => fetchData()}>
        Get
      </button>
    </div>
  )
}
