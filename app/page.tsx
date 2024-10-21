import Hero from "./components/hero";
import RiwayatPendidikan from "./components/riwayat.Pendidikan";
import RiwayatPk from "./components/riwayatPk";
import FavColor from "./components/favColor";
import "./kineta-style.css"

export default function MyApp() {
  return ( 
    <section>
      <Hero />
      <RiwayatPendidikan />
      <RiwayatPk />
      <FavColor />
    </section>
  );
}