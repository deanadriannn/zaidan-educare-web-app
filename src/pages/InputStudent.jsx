import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ArrowLeft, CircleUserRound, CloudUpload, Save } from 'lucide-react'
import { useNavigate } from "react-router";
import { format } from 'date-fns'
import { CalendarIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Calendar } from '@/components/ui/calendar'
import { 
  Popover,
  PopoverContent,
  PopoverTrigger,
 } from '@/components/ui/popover'
import { useCallback, useState } from 'react'
import { Card, CardHeader } from '@/components/ui/card'
import { useDropzone } from 'react-dropzone'
import { useDayPicker } from 'react-day-picker'
import toast from 'react-hot-toast'

const InputStudent = () => {
  let navigate = useNavigate();
  const [bornDate, setBornDate] = useState()
  const [entranceData, setEntranceData] = useState()
  const [dataUrl, setDataUrl] = useState(null)

  const onDrop = useCallback(acceptedFiles => {
    acceptedFiles.forEach(file => {
      const reader = new FileReader()
      reader.onabort = () => console.log('file reading was aborted')
      reader.onerror = () => console.log('file reading has failed')
      reader.onload = () => {
        const binaryStr = reader.result
        setDataUrl(binaryStr)
      }
      reader.readAsDataURL(file)
    })
  }, [])

  const {
    getRootProps,
    getInputProps,
    acceptedFiles,
    isDragActive,
  } = useDropzone({ onDrop })

  const selectedFiles = acceptedFiles[0]

  const handleSubmit = () => {
    toast.success("Data siswa berhasil ditambahkan")
    navigate("/student");
  }

  return (
    <Card className="mx-4 mt-4 px-10 py-4">
      <CardHeader className='px-0'>
        <div className="flex flex-row justify-start items-center gap-4">
          <Button variant="ghost" className="p-0 hover:bg-transparent" onClick={() => navigate("/student")}>
            <ArrowLeft />
          </Button>
          <span className="text-lg font-bold">Tambah Data Siswa</span>
        </div>
      </CardHeader>
      <form className='flex-1 rounded-xl'>
        <Label htmlFor="photo" className="text-lg">Foto</Label>
        <div className='flex flex-col justify-center items-center gap-4'>
          <div className='bg-muted h-60 w-60 rounded-full hover:cursor-pointer group' {...getRootProps()}>
          <Input type="file" id="photo" {...getInputProps()} />
            {dataUrl ? (
              <div className='w-full h-full rounded-full relative group-hover:opacity-50 duration-200'>
                <img src={dataUrl} className='absolute inset-0 w-full h-full object-cover rounded-full' />
              </div>
            ): (
              <div className='w-full h-full'>
                {isDragActive ? (
                  <div className="flex flex-col justify-center items-center h-full w-full">
                    <CloudUpload className="w-14 h-14" />
                    <span>Pilih Gambar</span>
                  </div>
                ): (
                  <div className="flex flex-col justify-center items-center h-full w-full group-hover:opacity-50 duration-200">
                    <CircleUserRound className="w-14 h-14" />
                    <span>Pilih Gambar</span>
                  </div>
                )}
              </div>
            )}
          </div>
          <div className='font-semibold text-lg text-muted-foreground'>Disarankan upload foto dengan rasio 1:1</div>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10'>
          <div className='grid gap-2'>
            <Label htmlFor="nama" className="text-lg">Nama</Label>
            <Input id="nama" type="text" placeholder="Jane" />
          </div>
          <div className='grid gap-2'>
            <Label htmlFor="nis" className="text-lg">NIS</Label>
            <Input id="nis" type="text" placeholder="1234567" />
          </div>
          <div className='grid gap-2'>
            <Label htmlFor="jenis-kelamin" className="text-lg">Jenis Kelamin</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Jenis Kelamin" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="laki-laki">Laki-laki</SelectItem>
                <SelectItem value="perempuan">Perempuan</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className='grid gap-2'>
            <Label htmlFor="tanggal-lahir" className="text-lg">Tanggal Lahir</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !bornDate && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon />
                  {bornDate ? format(bornDate, "PPP") : <span>Pilih Tanggal</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={bornDate}
                  onSelect={setBornDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
          <div className='grid gap-2'>
            <Label htmlFor="kelas" className="text-lg">Kelas</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Kelas" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1</SelectItem>
                <SelectItem value="2">2</SelectItem>
                <SelectItem value="3">3</SelectItem>
                <SelectItem value="4">4</SelectItem>
                <SelectItem value="5">5</SelectItem>
                <SelectItem value="6">6</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className='grid gap-2'>
            <Label htmlFor="tahun-masuk" className="text-lg">Tahun Masuk</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !entranceData && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon />
                  {entranceData ? format(entranceData, "PPP") : <span>Pilih Tanggal</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={entranceData}
                  onSelect={setEntranceData}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
          <div className='grid gap-2'>
            <Label htmlFor="alamat" className="text-lg">Alamat Rumah</Label>
            <Input id="alamat" type="text" placeholder="Jl. Jalan" />
          </div>
          <div className='grid gap-2'>
            <Label htmlFor="nama-wali" className="text-lg">Nama Wali</Label>
            <Input id="nama-wali" type="text" placeholder="John" />
          </div>
          <div className='grid gap-2'>
            <Label htmlFor="jenis-kelamin" className="text-lg">Hubungan Wali</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Hubungan Wali" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ayah">Ayah</SelectItem>
                <SelectItem value="ibu">Ibu</SelectItem>
                <SelectItem value="kakek">Kakek</SelectItem>
                <SelectItem value="nenek">Nenek</SelectItem>
                <SelectItem value="paman">Paman</SelectItem>
                <SelectItem value="bibi">Bibi</SelectItem>
                <SelectItem value="saudara">Saudara</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className='grid gap-2'>
            <Label htmlFor="jenis-kelamin-wali" className="text-lg">Jenis Kelamin Wali</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Jenis Kelamin Wali" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="laki-laki">Laki-laki</SelectItem>
                <SelectItem value="perempuan">Perempuan</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className='grid gap-2'>
            <Label htmlFor="email-wali" className="text-lg">Email Wali</Label>
            <Input id="email-wali" type="email" placeholder="example@email.com" />
          </div>
          <div className='grid gap-2'>
            <Label htmlFor="nomor-telepon-wali" className="text-lg">Nomor Telepon Wali</Label>
            <Input id="nomor-telepon-wali" type="tel" placeholder="081234567890" />
          </div>
        </div>
        <div className='flex justify-end'>
          <Button 
            type="button" 
            className="mt-10"
            onClick={handleSubmit}
          >
            <Save />
            Simpan
          </Button>
        </div>
      </form>
    </Card>
  )
}

export default InputStudent