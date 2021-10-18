import { useState } from "react"

function Header() {
    const [currency, setcurrency] = useState([{
        name: 'PKR',
    },
    {
        name: 'INR',
    },
    {
        name: 'USD',
    },
    {
        name: 'EUR',
    },

    ])
    const [counrty, setcountry] = useState([{
        name: 'Pakistan',
    },
    {
        name: 'India',
    },
    {
        name: 'USA',
    },
    {
        name: 'England',
    },

    ])
    const [language, setlanguage] = useState([{
        name: 'Urdu',
    },
    {
        name: 'Hindi',
    },
    {
        name: 'English',
    },
    {
        name: 'French',
    },

    ])
    const [currencyvalue, setcurrencyvalue] = useState("")
    const [countryvalue, setcountryvalue] = useState("")
    const [languagevalue, setlanguagevalue] = useState("")

    console.log(currencyvalue);
    console.log(countryvalue);
    console.log(languagevalue);

    return (
        <div className='font-lora bg-gray-50'>
            {/* Top Header */}
            <div className='flex flex-grow mt-2 ml-5 pl-5 '>
                <div className='flex flex-grow justify-start space-x-4'>
                    <p className="hover:border-b-2 hover:shadow-lg cursor-pointer ">Account</p>
                    <p className="hover:border-b-2 hover:shadow-lg cursor-pointer">Contact</p>
                    <p className="hover:border-b-2 hover:shadow-lg cursor-pointer">Seller </p>
                </div>
                <div className=' ml-4 flex flex-grow justify-end mr-4 space-x-4'>

                    <p className="">Currency

                        <select value={currencyvalue} onChange={(e) => setcurrencyvalue(e.target.value)} className="ml-2 text-xs text-gray-400  outline-none hover:border-b-2 hover:shadow-lg cursor-pointer border border-gray-200 rounded-md">
                            {currency.map((curreny) => (
                                <option onClick={(e) => (setcountryvalue(e.target.value))} >{curreny.name}</option>
                            ))}
                        </select>

                    </p>
                    <p className="">Country
                        <select value={countryvalue} onChange={(e) => setcountryvalue(e.target.value)} className="ml-2 text-xs text-gray-400  outline-none hover:border-b-2 hover:shadow-lg cursor-pointer border border-gray-200 rounded-md">
                            {counrty.map((counrty) => (
                                <option >{counrty.name}</option>
                            ))}
                        </select>
                    </p>
                    <p className="">language
                        <select value={languagevalue} onChange={(e) => setlanguagevalue(e.target.value)} className="ml-2 text-xs text-gray-400  outline-none hover:border-b-2 hover:shadow-lg cursor-pointer border border-gray-200 rounded-md">
                            {language.map((language) => (
                                <option >{language.name}</option>
                            ))}
                        </select>
                    </p>



                </div>
            </div>
        </div>
    )
}

export default Header
