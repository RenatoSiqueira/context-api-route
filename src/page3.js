import React, { useContext } from 'react'
import { RouteContext } from './ContextB'

const Page3 = () => {
  const { status, alterarStatus } = useContext(RouteContext)
  return (
    <div>
      Page 3: {JSON.stringify(status)}
      <button onClick={() => alterarStatus('name')(new Date())}>Add New Value</button>
    </div>
  )
}

export default Page3