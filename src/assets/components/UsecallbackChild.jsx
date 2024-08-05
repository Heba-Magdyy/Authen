import React, { memo } from 'react'

function UsecallbackChild({onChange}) {
  console.log("Rendering search...");

  return (  
    <>
    <input
      type="text"
      className="form-control"
      onChange={(e) => onChange(e.target.value)}
      placeholder="search"
    />
    </>
  )
}
export default memo(UsecallbackChild);