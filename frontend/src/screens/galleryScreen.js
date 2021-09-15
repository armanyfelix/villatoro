function Gallery({ imageUrl, name }) {
    return (
        <div className="container grid bg-black text-white">
            <div className="">
                <h1 className=" m-8 justify-center text-3xl font-extralight font-serif text-center ">
                    Humanidad
                </h1>
                <div className="mx-auto text-center ">
                    <img src="/img/cholofilosofoo.jpg" className="m-10 mx-auto" alt="cholo filosofo" />
                    <span>Cholofilosofo</span>

                    <img src={'./img/gtah.jpg'} className="m-10 mx-auto" alt="gtah" />
                    <img src={'./img/GTAVzoom.jpg'} className="m-10 mx-auto" alt="gtavzoom" />
                    <img src={'./img/hng_kng.jpg'} className="m-10 mx-auto" alt="hnk_kng" />
                    <img src={'./img/libertecrt.jpg'} className="m-10 mx-auto" alt="libertecrt" />
                    <img src={'./img/pndrocrt.jpg'} className="m-10 mx-auto" alt="pndrocrt" />
                    <img src={'./img/REDfull.jpg'} className="m-10 mx-auto" alt="redfull" />
                    <img src={'./img/vidavrg.jpg'} className="m-10 mx-auto" alt="vidavrg" />
                    <img src={'./img/topopinturas_2.jpg'} className=" mx-auto" alt="topopinturas 2" />
                </div>

            </div>
            <div>
                <h1 className=" m-8 justify-center text-center ">
                    Animales
                </h1>
                <img src={'./img/gatito.jpg'} alt="gatito" />
                <img src={'./img/mairqon.jpg'} alt="mairqon" />
                <img src={'./img/patito.jpg'} alt="patito" />
            </div>
        </div>
    )
}

export default Gallery;
