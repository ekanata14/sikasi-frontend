"use client"

import * as React from "react";

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form"
import { Button } from "~/components/ui/button"
import { Input } from "~/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select"
import { toast } from "~/components/ui/use-toast"
import { cn } from "~/lib/utils";

const formSchema = z.object({
  name: z.string().min(2).max(20),
})

const ProfileEditForm = React.forwardRef(({ className, ...props }, ref) => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });

  function onSubmit(data) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="nim"
          render={({ field }) => (
            <FormItem>
              <FormLabel>NIM</FormLabel>
              <FormControl>
                <Input placeholder="nomor induk mahasiswa" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nama Lengkap</FormLabel>
              <FormControl>
                <Input placeholder="nama aktivitas" {...field} />
              </FormControl>
              <FormDescription>
                Isikan nama lengkapmu sesuai dengan SION.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nomor Handphone</FormLabel>
              <FormControl>
                <Input placeholder="nomor handphone" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="study"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Program Studi</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Pilih Program Studi" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Sistem Informasi">Sistem Informasi</SelectItem>
                  <SelectItem value="Sistem Komputer">Sistem Komputer</SelectItem>
                  <SelectItem value="Teknologi Informasi">Teknologi Informasi</SelectItem>
                </SelectContent>
              </Select>
              <FormDescription>
                Pastikan Prodi sesuai dengan SION.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="picture"
          render={({ field: { value, onChange, ...fieldProps } }) => (
            <FormItem>
              <FormLabel>Foto Profile</FormLabel>
              <FormControl>
                <Input
                  {...fieldProps}
                  placeholder="Picture"
                  type="file"
                  accept="image/jpg"
                  onChange={(event) =>
                    onChange(event.target.files && event.target.files[0])
                  }
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button variant="stikom" type="submit">Simpan</Button>
      </form>
    </Form>
  );

})
ProfileEditForm.displayName = "ProfileEditForm";

export default ProfileEditForm;