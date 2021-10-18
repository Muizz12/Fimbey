

function Slider({ img, name }) {

    return (
        <div id="Slide" className='flex items-center m-2 my-5 space-x-4 rounded-xl 
        cursor-pointer hover:bg-gray-100 hover:scale-105 motion-reduce:transition-none motion-reduce:transform-none
        transition transform duration-200 shadow-lg ease-Out transition-all'>


            <div className="relative h-70 w-70">
                <img src={img} layout='fill' objectFit='contain' className='rounded-lg' />
                <div>
                    <h2 className='flex items-center justify-center'>{name}</h2>
                </div>

            </div>

        </div>





        // <div className='flex items-center m-2 my-5 space-x-4 rounded-xl 
        // cursor-pointer hover:bg-gray-100 hover:scale-105 
        // transition transform duration-200 ease-Out'>

        //     {/* <Carousel
        //         autoPlay
        //         infiniteLoop
        //         showStatus={false}
        //         showIndicators={false}
        //         showThumbs={false}
        //         interval={5000}
        //     >
        //         <div>
        //             <img
        //                 oading="lazy" src="Images/beauty.png"
        //                 width={300}
        //                 height={300}
        //                 objectFit="contain"
        //                 className="cursor-pointer active:transform active:scale-90" alt='Banner' />
        //             <h2>BEAUTY</h2>
        //         </div>
        //         <div >
        //             <img loading="lazy" width={300}
        //                 height={300}
        //                 objectFit="contain"
        //                 className="cursor-pointer active:transform active:scale-90" src="Images/sunglasses.png" alt='Banner' />
        //             <h2>SUNGLASSES</h2>
        //         </div>
        //         <div>
        //             <img loading="lazy" width={300}
        //                 height={300}
        //                 objectFit="contain"
        //                 className="cursor-pointer active:transform active:scale-90" src="Images/jackets.png" alt='Banner' />
        //             <h2>JACKETS</h2>
        //         </div>
        //         <div>
        //             <img loading="lazy" width={300}
        //                 height={300}
        //                 objectFit="contain"
        //                 className="cursor-pointer active:transform active:scale-90" src="Images/shoe.png" alt='Banner' />
        //             <h2>SHOES</h2>
        //         </div>
        //     </Carousel> */}


        // </div>
    )
}

export default Slider

