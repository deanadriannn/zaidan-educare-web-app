import { DataTable } from "@/components/DataTable"
import { studentColumns } from "@/lib/columns"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus, Search, Upload } from "lucide-react"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { useState } from "react"

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
  const [name, setName] = useState('')
  const [nis, setNis] = useState('')
  const [kelas, setKelas] = useState('')


  const handleFilter = (e) => {
    e.preventDefault()
    console.log('Filtering')
    console.log(name, nis, kelas)
  }

  return (
    <>
      <Card className="mx-4 mt-4">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">Filters</CardTitle>
        </CardHeader>
        <form onSubmit={handleFilter}>
          <CardContent className="flex justify-center items-center gap-4">
            <div className="w-full flex flex-col space-y-2">
              <Label htmlFor="nama" className="text-md">Nama</Label>
              <Input
                id="nama"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="w-full flex flex-col space-y-2">
              <Label htmlFor="nis" className="text-md">NIS</Label>
              <Input
                id="nis"
                type="text"
                value={nis}
                onChange={(e) => setNis(e.target.value)}
              />
            </div>
            <div className="w-full flex flex-col space-y-2">
              <Label htmlFor="kelas" className="text-md">Kelas</Label>
              <Input
                id="kelas"
                type="text"
                value={kelas}
                onChange={(e) => setKelas(e.target.value)}
              />
            </div>
          </CardContent>
          <CardFooter className="flex justify-end gap-4">
            <Button variant="ghost hover:bg-transparent">
              Reset
            </Button>
            <Button type="submit">
              <Search /> Cari
            </Button>
          </CardFooter>
        </form>
      </Card>
      <Card className="rounded-lg border mx-4 mt-4 shrink-0 flex flex-col gap-4 px-4 pt-4">
        <div className="flex justify-end gap-4">
          <Button>
            <Upload /> Unggah
          </Button>
          <Button onClick={() => window.location.href = '/input-student'}>
            <Plus /> Tambah
          </Button>
        </div>
        <DataTable columns={studentColumns} data={data} />
      </Card>
    </>
  )
}

export default MasterStudent