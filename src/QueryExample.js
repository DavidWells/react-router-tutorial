import React, { PropTypes } from 'react'

/* http://localhost:3000/query?test=hehehe */
export default function QueryExample (props) {
  const location = props.location
  return (
    <div>
      The query param test = {location.query.test}
    </div>
  )
}