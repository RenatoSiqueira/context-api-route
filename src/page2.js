import React, { useContext } from 'react'
import { RouteContext } from './ContextB'

const Page2 = () => {
  const { status, alterarStatus } = useContext(RouteContext)
  return (
    <div>
      Page 2: {JSON.stringify(status)}
      <button onClick={() => alterarStatus('name')(new Date())}>Add New Value</button>
    </div>
  )
}

export default Page2