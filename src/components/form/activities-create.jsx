"use client"

import * as React from "react";

import { z } from "zod";
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

import { CalendarIcon } from "lucide-react"
import { Calendar } from "~/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover"
import { toast } from "~/components/ui/use-toast"
import { cn } from "~/lib/utils";
import { format } from "date-fns"

const formSchema = z.object({
  name: z.string().min(2).max(20),
  tgl: z.date({
    required_error: "Tanggal pelaksanaan diperlukan.",
  }),
  sttime: z.string().time({
    required_error: "Waktu mulai diperlukan.",
  }),
  endtime: z.string().time({
    required_error: "Waktu selesai diperlukan.",
  })
})

const ActivitiesCreateForm = React.forwardRef(({ className, ...props }, ref) => {
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
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nama Aktivitas</FormLabel>
              <FormControl>
                <Input placeholder="nama aktivitas" {...field} />
              </FormControl>
              <FormDescription>
                Berisikan nama aktivitas atau kegiatan UKM.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="place"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tempat Aktivitas</FormLabel>
              <FormControl>
                <Input placeholder="tempat aktivitas" {...field} />
              </FormControl>
              <FormDescription>
                Berisikan tempat aktivitas atau kegiatan UKM.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="tgl"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Tanggal Aktivitas</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[240px] pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "dd-MM-yyyy")
                      ) : (
                        <span>tanggal</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date > new Date() || date < new Date("1900-01-01")
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormDescription>
                Berisikan tanggal pelaksanaan aktivitas UKM.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className={cn("grid grid-cols-2 gap-4")}>
          <FormField
            control={form.control}
            name="sttime"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Waktu Mulai</FormLabel>
                <FormControl>
                  <Input placeholder="waktu mulai" type="time" {...field} />
                </FormControl>
                <FormDescription>
                  Waktu dimulainya aktivitas.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="endtime"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Waktu Selesai</FormLabel>
                <FormControl>
                  <Input placeholder="waktu mulai" type="time" {...field} />
                </FormControl>
                <FormDescription> 
                  Waktu berakhirnya aktivitas.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button className={cn("w-full")} type="submit">Simpan</Button>
      </form>
    </Form>
  );

})
ActivitiesCreateForm.displayName = "ActivitiesCreateForm";

export default ActivitiesCreateForm;