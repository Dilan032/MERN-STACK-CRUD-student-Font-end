import React from 'react'

function Home() {
  return (
    <>
     <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="bg-gray-200 p-4">Column 1</div>
          <div class="bg-gray-200 p-4">Column 2</div>
          <div class="bg-gray-200 p-4">Column 3</div>
      </div>
      
      <hr />

      <div class="flex">
          <div class="w-1/2 bg-blue-200 p-4">50% width</div>
          <div class="w-1/2 bg-blue-200 p-4">50% width</div>
      </div>
    </>
  )
}

export default Home