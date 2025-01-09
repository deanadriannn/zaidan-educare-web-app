import { DataTable } from "@/components/DataTable"
import { studentColumns } from "@/lib/columns"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus, Upload } from "lucide-react"

const data = [
  {
    nis: "1",
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
    nis: "2",
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
  },
  {
    nis: "3",
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
    nis: "4",
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
  },
  {
    nis: "5",
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
    nis: "6",
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
  },
  {
    nis: "7",
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
    nis: "8",
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
  },
  {
    nis: "9",
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
    nis: "10",
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
  },
  {
    nis: "11",
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
    nis: "12",
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
  },
  {
    nis: "13",
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
    nis: "14",
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
  },
  {
    nis: "15",
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
    nis: "16",
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
  },
  {
    nis: "17",
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
    nis: "18",
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
  },
  {
    nis: "19",
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
    nis: "20",
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
  },
  {
    nis: "21",
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
    nis: "22",
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
  },
  {
    nis: "23",
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
    nis: "24",
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
  },
]

const MasterStudent = () => {
  return (
    <>
      <Card className="mx-4 mt-4">
        <CardHeader>
          <CardTitle>Filters</CardTitle>
        </CardHeader>
        <CardContent>
          
        </CardContent>
      </Card>
      <Card className="rounded-lg border mx-4 mt-4 shrink-0 flex flex-col gap-4 px-4 pt-4">
        <div className="flex justify-end gap-4">
          <Button>
            <Upload /> Unggah
          </Button>
          <Button>
            <Plus /> Tambah
          </Button>
        </div>
        <DataTable columns={studentColumns} data={data} />
      </Card>
    </>
  )
}

export default MasterStudent