
import {
    CalendarIcon,
    CameraIcon,
    MenuIcon,
    SearchIcon,
    ShoppingCartIcon,
} from "@heroicons/react/outline"
import {
    UserIcon,
    UserAddIcon
} from "@heroicons/react/solid"
import { useState } from "react"

function Search() {
    const [searchinput, setsearchinput] = useState()

    console.log(searchinput);
    return (
        <header className="sticky top-0 z-50 bg-gray-50 ">
            <div className="-mt-20  ">
                <div className='flex flex-grow mt-2 ml-5 pl-5  '>
                    <div className='flex flex-grow justify-start space-x-4 border rounded-full'>
                        {!searchinput ? <input
                            type="text"
                            placeholder="Search"
                            className="p-2 h-full w-6 flex-grow px-4 flex-shrink rounded-full outline-none"
                            onChange={(e) => (setsearchinput(e.target.value))} /> : <input type="text"
                                placeholder={searchinput}
                                value={searchinput}
                                className="p-2 h-full w-6 flex-grow px-4 flex-shrink rounded-full outline-none"
                                onChange={(e) => (setsearchinput(e.target.value))} />
                        }
                        <SearchIcon className="h-12 p-4 " />
                    </div>
                    <div className='flex flex-grow justify-end space-x-2 mr-5 pr-5 '>
                        <p className="hover:border-b-2 hover:shadow-lg cursor-pointer"><UserIcon className="h-12 p-4 " /></p>
                        <p className="hover:border-b-2 hover:shadow-lg cursor-pointer"><UserAddIcon className="h-12 p-4" /></p>
                        <p className="hover:border-b-2 hover:shadow-lg cursor-pointer"><CalendarIcon className="h-12 p-4" /></p>
                        <p className="hover:border-b-2 hover:shadow-lg cursor-pointer"><ShoppingCartIcon className="h-12 p-4" /></p>
                    </div>
                </div>

            </div>
        </header>
    )
}

export default Search
