import { Pencil, Trash2 } from "lucide-react"
 
import { Button } from "@/components/ui/button"

export const studentColumns = [
  {
    accessorKey: "nis",
    header: "Nis",
  },
  {
    accessorKey: "nama",
    header: "Nama",
  },
  {
    accessorKey: "jenisKelamin",
    header: "Jenis Kelamin",
  },
  {
    accessorKey: "kelas",
    header: "Kelas"
  },
  {
    accessorKey: "tempatLahir",
    header: "Tempat Lahir"
  },
  {
    accessorKey: "tanggalLahir",
    header: "Tanggal Lahir"
  },
  {
    accessorKey: "alamatRumah",
    header: "Alamat Rumah"
  },
  {
    accessorKey: "namaWali",
    header: "Nama Wali"
  },
  {
    accessorKey: "hubungan",
    header: "Hubungan"
  },
  {
    accessorKey: "jenisKelaminWali",
    header: "Jenis Kelamin Wali"
  },
  {
    accessorKey: "emailWali",
    header: "Email Wali"
  },
  {
    accessorKey: "nomorTeleponWali",
    header: "Nomor Telepon Wali"
  },
  {
    accessorKey: "foto",
    header: "Foto"
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const student = row.original
 
      return (
        <div className="flex justify-center items-center space-x-2">
          <Button size="icon" variant="ghost">
            <Pencil className="text-yellow-500"/>
          </Button>
          <Button size="icon" variant="ghost">
            <Trash2 className="text-destructive"/>
          </Button>
        </div>
      )
    },
  },
]