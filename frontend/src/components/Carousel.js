import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Carousel() {
    const settings = {
        className: 'border-none',
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: false,
        autoplaySpeed: 3200,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true
      };
    return (
       <div className="px-20 border-none">
            <Slider {...settings}>
                <div className="  ">
                    <img src={'./img/cholofilosofoo.jpg'} alt="cholo filosofo" className=" mx-auto" />
                    <p className="text-center mb-10 text-gray-200 text-xl mt-3 font-mate">Cholo Filosofo</p>
                </div>
                <div className="">
                    <img src={'./img/gatito.jpg'} alt="gatito" className=" mx-auto"/>
                    <p className="text-center mb-10 text-gray-200 text-xl mt-3 font-mate">Gatito</p>
                </div>
                <div >
                    <img src={'./img/gtah.jpg'} alt="gtah" className=" mx-auto"/>
                    <p className="text-center mb-10 text-gray-200 text-xl mt-3 font-mate">Gtah</p>
                </div>
                <div >
                    <img src={'./img/GTAVzoom.jpg'} alt="gtavzoom" className=" mx-auto"/>
                    <p className="text-center mb-10 text-gray-200 text-xl mt-3 font-mate">GTAVzoom</p>
                </div>
                <div >
                    <img src={'./img/hng_kng.jpg'} alt="hnk_kng" className=" mx-auto"/>
                    <p className="text-center mb-10 text-gray-200 text-xl mt-3 font-mate">hng_kng</p>
                </div>
                <div >
                    <img src={'./img/libertecrt.jpg'} alt="libertecrt" className=" mx-auto"/>
                    <p className="text-center mb-10 text-gray-200 text-xl mt-3 font-mate">Libertécrt</p>
                </div>
                <div >
                    <img src={'./img/mairqon.jpg'} alt="mairqon" className=" mx-auto"/>
                    <p className="text-center mb-10 text-gray-200 text-xl mt-3 font-mate">Mairqon</p>
                </div>
                <div >
                    <img src={'./img/patito.jpg'} alt="patito" className=" mx-auto"/>
                    <p className="text-center mb-10 text-gray-200 text-xl mt-3 font-mate">Patito</p>
                </div>
                <div >
                    <img src={'./img/pndrocrt.jpg'} alt="pndrocrt" className=" mx-auto"/>
                    <p className="text-center mb-10 text-gray-200 text-xl mt-3 font-mate">Pndrocrt</p>
                </div>
                <div >
                    <img src={'./img/REDfull.jpg'} alt="redfull" className=" mx-auto"/>
                    <p className="text-center mb-10 text-gray-200 text-xl mt-3 font-mate">REDfull</p>
                </div>
                <div >
                    <img src={'./img/vidavrg.jpg'} alt="vidavrg" className=" mx-auto"/>
                    <p className="text-center mb-10 text-gray-200 text-xl mt-3 font-mate">Vidavrg</p>
                </div>
                <div >
                    <img src={'./img/topopinturas_2.jpg'} alt="topopinturas 2" className=" mx-auto"/>
                    <p className="text-center mb-10 text-gray-200 text-xl mt-3 font-mate">Topopinturas 2</p>
                </div>
            </Slider>
        </div>
    )
}

export default Carousel
