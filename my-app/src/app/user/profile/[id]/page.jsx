import React from 'react'

const page = ({params}) => {
  console.log(params)
  return (
    <div>
      Dynamic Route {params.id}
    </div>
  )
}

export default page
