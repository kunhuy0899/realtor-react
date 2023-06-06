import React from 'react'

export default function CreateListing() {
  return (
    <main className='max-w-md px-2 mx-auto'>
        <h1 className='text-3xl '>Create a Listing</h1>
        <form>
            <p className='text-lg mt-6 font-semibold'>Sell / Rent</p>
            <div className="">
                <button type='button'>
                    Sell
                </button>
            </div>
        </form>
    </main>
  )
}
