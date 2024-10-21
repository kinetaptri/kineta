export default function RiwayatPk() {
    interface RowRiwayatKerjaProps {
        tahun: string;
        instansi: string;
        bekerja: string;
      }
    function RowRiwayatKerja(props: RowRiwayatKerjaProps) {
        return (
          <div className="border-2 border-indigo-500/75 rounded-lg bg-purple-700 p-2 my-5">
            <div className="container mx-auto ">
              <div className="grid grid-cols-12 gap-1">
                <div className="col-span-12 md:col-span-4 ">{props.tahun}</div>
                <div className="col-span-12 md:col-span-4">{props.instansi}</div>
                <div className="col-span-12 md:col-span-4">{props.bekerja}</div>
                
              </div>
            </div>
          </div>
        )
      }
    return (
        <div className="container mx-auto p-2 text-center pt-20">
          <h2 className="text-2xl">Riwayat Pekerjaan</h2>
         <RowRiwayatKerja tahun="2019" instansi="PT. Shopee Indonesia" bekerja="Business Analyst" />
         <RowRiwayatKerja tahun="2021" instansi="PT. Unilever Indonesia" bekerja="HRD" />
         <RowRiwayatKerja tahun="2022" instansi="PT. Telkom Indonesia" bekerja="Manager" />
         <RowRiwayatKerja tahun="2024" instansi="PT. Pertamina" bekerja="Staff Administrasi" />
        </div>
    )
}