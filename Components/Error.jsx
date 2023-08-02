import React from 'react'

export default function Error({errorMsg}) {
  return (
    <div className="movietype_container">
      <h2 className="category_titles">{errorMsg}</h2>
      <div className="movielist_container">
      </div>
    </div>
  )
}
