import { DataTable } from "@/components/DataTable"
import { studentColumns } from "@/lib/columns"

const data = [
  {
    nis: "123456",
    nama: "John Doe",
    jenisKelamin: "Laki-laki",
    kelas: "XII RPL",
    tempatLahir: "Jakarta",
    tanggalLahir: "2000-01-01",
    alamatRumah: "Jl. Lorem Ipsum",
    namaWali: "Vi",
    hubungan: "Ibu",
    jenisKelaminWali: "Perempuan",
    emailWali: "email@example.com",
    nomorTeleponWali: "08123456789",
    foto: ""
  },
  {
    nis: "123457",
    nama: "Jane Doe",
    jenisKelamin: "Perempuan",
    kelas: "XII RPL",
    tempatLahir: "Jakarta",
    tanggalLahir: "2000-01-01",
    alamatRumah: "Jl. Lorem Ipsum",
    namaWali: "Luke",
    hubungan: "Ayah",
    jenisKelaminWali: "Laki-laki",
    emailWali: "email2@example.com",
    nomorTeleponWali: "08123456789",
    foto: ""
  }
]

const MasterStudent = () => {
  return (
    <div className="flex-1 rounded-xl md:min-h-min">
      <DataTable columns={studentColumns} data={data} />
    </div>
  )
}

export default MasterStudent