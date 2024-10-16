// App.js
import ReactDOM from 'react-dom';

function Event() {
    return (
        <div className="container mx-auto">
            <div className="relative">
                <img src="\carousel.jpg" alt="Athletes running on a track" className="w-full h-96 object-cover" />
                <div className="absolute inset-0 flex items-center pl-8">
                    <h1 className="text-5xl font-bold text-black">SHAURYA PRESENTS</h1>
                </div>
            </div>
            <div className="flex items-center justify-center my-8">
                <img src="\shaurya .jpg" alt="Logo" className="w-28 h-29 object-cover mr-4" />
                <h2 className="text-6xl font-bold">GLIMPSES OF 2024 EVENTS</h2>
            </div>
            <div className="grid grid-cols-1 gap-8 px-4">
                <div className="flex flex-col md:flex-row items-center">
                    <img src="\sports.png" alt="National Sports Day poster" className="w-80 h-80 object-cover" />
                    <p className="mt-4 md:mt-0 md:ml-4 text-center md:text-left flex-1">
                        The SPORTS DAY at NIT Raipur, organized by SHAURYA - The Sports Committee, is a vibrant celebration of athleticism and team spirit. The event kicks off with a grand inauguration and march past, followed by a variety of competitions including track and field events, team sports like football and basketball, and fun activities such as sack races and tug-of-war. The day ends with a closing ceremony where winners are honored, making it a memorable occasion filled with energy, unity, and sportsmanship.
                    </p>
                </div>
                <div className="flex flex-wrap justify-center">
                    <img src="\dodge ball.jpg" alt="Tug of War illustration" className="w-90 h-80 object-cover m-2" />
                    <img src="\tow.png" alt="Engineer's Day Sports Events poster" className="w-80 h-80 object-cover m-2" />
                </div>
                <div className="flex flex-col md:flex-row items-center">
                    <img src="\engn day.jpg" alt="Engineers day poster" className="w-80 h-90 object-cover" />
                    <p className="mt-4 md:mt-0 md:ml-4 text-center md:text-left flex-1">
                    ENGINEER'S DAY ,  is an additional event organized by SHAURYA, showcasing the diverse range of activities and competitions that NIT Raipur offers. The event includes various sports and cultural activities, promoting a spirit of unity and enthusiasm among the students. It is a day filled with excitement, teamwork, and memorable experiences, highlighting the vibrant campus life at NIT Raipur.
                        
                    </p>
                </div>
                <div className="flex flex-wrap justify-center">
                    <img src="https://i.pinimg.com/564x/ea/af/d2/eaafd241616fa8abc6e5a4cebca4e016.jpg" alt="Muscular arm illustration" className="w-80 h-80 object-cover m-2" />
                    <img src="\mchairs.jpg" alt="Musical note illustration" className="w-80 h-80 object-cover m-2" />
                    <img src="https://i.pinimg.com/564x/c9/d5/44/c9d54483c7e242c9e817cb77d06bb99a.jpg" alt="Fight illustration" className="w-80 h-80 object-cover m-2" />
                </div>
                <div className="flex flex-col md:flex-row items-center mt-8">
                    <img src="\samar.jpg" alt="Additional Event poster" className="w-80 h-90 object-cover" />
                    <p className="mt-4 md:mt-0 md:ml-4 text-center md:text-left flex-1">
                    SAMAR organized by SHAURYA, the sports committee of NIT Raipur, is the institute's premier sports festival, bringing together students to compete in various sports like cricket, football, basketball, volleyball, and athletics. It promotes sportsmanship, teamwork, and fitness while fostering a vibrant atmosphere of competition and camaraderie. With enthusiastic participation and enthusiastic participation, Samar is a celebration of athletic passion and perseverance at NIT Raipur.
                       ENGINEER'S DAY ,  is an additional event organized by SHAURYA, showcasing the diverse range of activities and competitions that NIT Raipur offers. The event includes various sports and cultural activities, promoting a spirit of unity and enthusiasm among the students. It is a day filled with excitement, teamwork, and memorable experiences, highlighting the vibrant campus life at NIT Raipur.
                    </p>
                </div>
            </div>
            <div className="flex flex-wrap justify-center mt-8">
                <img src="\ball.jpg" alt="cricketball illustration" className="w-80 h-80 object-cover m-2" />
                <img src="\9.jpg" alt="basketball illustration" className="w-80 h-80 object-cover m-2" />
                <img src="https://i.pinimg.com/564x/64/c1/37/64c1373463221d705b308bce2dc0669c.jpg" alt=" volleyball illustration" className="w-80 h-80 object-cover m-2" />
            </div>
            <div className="flex flex-wrap justify-center mt-8">
                <img src="\11.jpg" alt="Running athlete illustration" className="w-80 h-80 object-cover m-2" />
                <img src="\10.jpg" alt="Horse riding illustration" className="w-80 h-80 object-cover m-2" />
            </div>
        </div>
    );
}
export default Event;

