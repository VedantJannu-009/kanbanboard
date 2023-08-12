import React from 'react'

const card = ({ id, title, tags })=> {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text"><strong>ID:</strong> {id}</p>
        <p className="card-text"><strong>Tags:</strong> {tags.join(', ')}</p>
      </div>
    </div>
  )
}

export default card;