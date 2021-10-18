function Icon() {
    return (
        <div className="-mt-15 sm:-mt-18 md:-mt-20">
            <div className='flex flex-grow items-center justify-center' >
                <img
                    src="Images/png.png"
                    width={300}
                    height={50}
                    objectFit="contain"
                    className="cursor-pointer active:transform active:scale-90 animate-pulse "
                />
            </div>
        </div>
    )
}

export default Icon
//