import { MoreHorizontal } from "lucide-react"
 
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

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
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuItem>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]