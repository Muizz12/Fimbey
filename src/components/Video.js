function Video() {
    return (
        <div className="relative mr-5 ml-5  mt-5 mb-5 pb-5 flex flex-grow items-center justify-center ">
            <video muted autoPlay={true} height={450} width={500} loop={true} playsInline={true} >
                <source src="videos/Fimbay - a global marketplace.mp4" type="video/mp4" />
            </video>
        </div>
    )
}

export default Video
