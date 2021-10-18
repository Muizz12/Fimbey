import React from 'react'

function Footer() {
    return (
        <div className='flex flex-grow items-center justify-evenly px-4 py-4 mx-4 my-4 bg-gray-100 text-gray-600 cursor-pointer'>
            <div className=' space-y-4 text-xs text-gray-800'>
                <h5 className="font-lora font-extrabold">INFORMATION</h5>
                <p>ABOUT US</p>
                <p>DELIVERY INFORMATION</p>
                <p>TERMS & CONDITIONS</p>

            </div>
            <div className='space-y-4 text-xs text-gray-800'>
                <h5 className="font-lora font-extrabold">HELP</h5>
                <p>FAQ</p>
                <p>PRIVACY POLICY</p>
                <p>FEEDBACK</p>

            </div>
            <div className='space-y-4 text-xs text-gray-800'>
                <h5 className="font-lora font-extrabold">ACCOUNT</h5>
                <p>MY ACCOUNT</p>
                <p>REPORT A PROBLEM</p>
                <p>TRACK ORDER</p>
            </div>

        </div>
    )
}

export default Footer
