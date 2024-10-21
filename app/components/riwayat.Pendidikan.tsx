export default function RiwayatPendidikan() {
  return (
    <div className="container mx-auto p-2 text-center pt-20">
        <h2 className="text-2x1">Riwayat Pendidikan</h2>
        <RowRiwayat jenjang="SD" sekolah="SDN Linggar 1" tahun="2010" />
        <RowRiwayat jenjang="SMP" sekolah="SMP FK Bina Muda" tahun="2016" />
        <RowRiwayat jenjang="SMK" sekolah="SMK Bakti Nusantara 666" tahun="2019" />
        <RowRiwayat jenjang="Kuliah" sekolah="Universitas Ma'soem" tahun="2022" />
    </div>
  );
}

interface RowRiwayatProps {
    jenjang: string;
    sekolah: string;
    tahun: string;
}

function RowRiwayat(props: RowRiwayatProps) {
    return (
        <div className="border-2 border-indigo-500/75 rounded-lg bg-purple-700 p-2 my-5">
            <div className="container mx-auto">
                <div className="grid grid-cols-12 gap-1">
                    <div className="col-span-12 md:col-span-4 ">{props.jenjang}</div>
                    <div className="col-span-12 md:col-span-4 ">{props.sekolah}</div>
                    <div className="col-span-12 md:col-span-4 ">{props.tahun}</div>
                </div>
            </div>
        </div>
    );
}
