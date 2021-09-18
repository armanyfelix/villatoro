import { Typography } from "@material-ui/core";

function About() {
    return ( 
        <section className="bg-gray-600 w-full lg:flex items-center  lg:py-40 md:py-32  xl:p-20 lg:p-10 md:p-7 p-2">
            <div className="px-10 text-white mb-10">
                <Typography variant="h2">About</Typography>
                <p className="text-justify ">Omar Villatoro, artist and soldier, throughout his life had interests in the arts and culture, which led him to practice different disciplines, but in which he stood out the most was in painting, which little by little led him to digital art. Coming from a military family throughout his childhood he lived in different cities in Mexico, his experiences in his travels gave him a great knowledge of Mexican culture, he currently lives in Los Mochis Sinaloa, when he finished high school he decided to study international business motivated by His great passion for languages ​​but soon after he realized that the career was not really what he expected, losing interest in what he was doing and disappointed in what he could do in his life. Thus, upon graduating without any motivation and wishing to have a more meaningful life, he decided to follow the path of his father and enlist in the army. Omar is still in active service, but he has never stopped working on what he likes, painting, he has created a reputation in different media and even now he has a collection of his best works that you can buy on this site.</p>
            </div>
            <img src="/img/soldier.jpeg" alt="el toro en la chamba" className="lg:w-1/5 lg:h-1/5 md:w-1/2 rounded mx-auto" />
        </section>
     );
}
 
export default About;
