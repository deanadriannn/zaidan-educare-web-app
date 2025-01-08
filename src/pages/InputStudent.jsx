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
import { Save } from 'lucide-react'
import { useToast } from "@/hooks/use-toast"
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
import { useState } from 'react'
import DragDropPhoto from '@/components/DragDropPhoto'

const InputStudent = () => {
  const { toast } = useToast()
  let navigate = useNavigate();
  const [date, setDate] = useState()

  return (
    <form className='flex-1 rounded-xl md:min-h-min'>
      <DragDropPhoto />
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 mt-10'>
        <div className='grid gap-2'>
          <Label htmlFor="nama">Nama</Label>
          <Input id="nama" type="text" placeholder="Jane" />
        </div>
        <div className='grid gap-2'>
          <Label htmlFor="nis">NIS</Label>
          <Input id="nis" type="text" placeholder="1234567" />
        </div>
        <div className='grid gap-2'>
          <Label htmlFor="jenis-kelamin">Jenis Kelamin</Label>
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
          <Label htmlFor="tanggal-lahir">Tanggal Lahir</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon />
                {date ? format(date, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
        <div className='grid gap-2'>
          <Label htmlFor="alamat">Alamat</Label>
          <Input id="alamat" type="text" placeholder="Jl. Jalan" />
        </div>
        <div className='grid gap-2'>
          <Label htmlFor="nama-wali">Nama Wali</Label>
          <Input id="nama-wali" type="text" placeholder="John" />
        </div>
        <div className='grid gap-2'>
          <Label htmlFor="jenis-kelamin">Hubungan Wali</Label>
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
          <Label htmlFor="jenis-kelamin-wali">Jenis Kelamin Wali</Label>
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
          <Label htmlFor="email-wali">Email Wali</Label>
          <Input id="email-wali" type="email" placeholder="example@email.com" />
        </div>
        <div className='grid gap-2'>
          <Label htmlFor="nomor-telepon-wali">Nomor Telepon Wali</Label>
          <Input id="nomor-telepon-wali" type="tel" placeholder="081234567890" />
        </div>
      </div>
      <Button 
        type="button" 
        className="mt-4"
        onClick={() => {
          toast({
            variant: "success",
            description: "Student data has been saved",
          })
          navigate("/master/student");
        }}
      >
        <Save />
        Save
      </Button>
    </form>
  )
}

export default InputStudent