"use client";
import { useState } from "react";

export default function FavColor(){
    const [warna, SetWarna] = useState('Ungu');
    return(
        <div className="container mx-auto p-4 text-center">
            <h1>Warna Favorite Saya adalah {warna}</h1>
            <hr className="m-10" />
            <p>Ubah state ke warna:</p>
            <button
            className="bg-red-500 hover:bg-red-700 text-white font-blod py-2 px-4 rounded"
            onClick={() => SetWarna("Merah")}
            >
                Merah
            </button>
            <button
            className="bg-yellow-500 hover:bg-yellow-700 text-white font-blod py-2 px-4 rounded"
            onClick={() => SetWarna("Kuning")}
            >
                Kuning
            </button>
            <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-blod py-2 px-4 rounded"
            onClick={() => SetWarna("Biru")}
            >
                Biru
            </button>
            <button
            className="bg-green-500 hover:bg-green-700 text-white font-blod py-2 px-4 rounded"
            onClick={() => SetWarna("Hijau")}
            >
                Hijau
            </button>
            <button
            className="bg-purple-500 hover:bg-purple-700 text-white font-blod py-2 px-4 rounded"
            onClick={() => SetWarna("Ungu")}
            >
                Ungu
            </button>
        </div>
    );
}