import React from 'react'

const FormattedText = ({label, value}) => {
  return (
    <div>
        <p>{label}: {value}</p>
    </div>
  )
}

export default FormattedText