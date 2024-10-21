import foto from "../foto.jpg";

export default function Hero() {
    return (
      <div className="container mx-auto p-2 text-center">
        <h1 className="text-gray-300 font-bold">CV ONLINE</h1>
        <h2 className="text-3xl">Kineta Putri Aurelia</h2>
        <Profile />
        <p>
           Saya Kineta Putri Aurelia
        </p>
       </div>
    );
}

function Profile () {
    return <img src={foto.src} alt="Kineta Putri Aurelia Profile" className="fotoku" />;
   }

