import React from 'react'

export const Icon = ({ size = 24, fill = '#000', children }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill={fill}>
      {children}
    </svg>
  )
}
