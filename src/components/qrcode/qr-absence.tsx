"use client";

 
import { cn } from "~/lib/utils";
import { useMediaQuery } from "@uidotdev/usehooks";
import { Button } from "~/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "~/components/ui/drawer";
import QRCode from "react-qr-code";
import { useState } from "react";

const QRAbsence = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const [open, setOpen] = useState(false);
 
  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button className={"w-full"} variant="outline">Absensi Kehadiran</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Absen Kehadiran</DialogTitle>
            <DialogDescription>
              Lakukan absensi kehadiran dengan memberikan kode QR yang kemudian discan oleh Pengurus UKM.
            </DialogDescription>
          </DialogHeader>
          <QrAbsence />
        </DialogContent>
      </Dialog>
    );
  }
 
  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button className={"w-full"} variant="outline">Absensi Kehadiran</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Absen Kehadiran</DrawerTitle>
          <DrawerDescription>
            Lakukan absensi kehadiran dengan memberikan kode QR yang kemudian discan oleh Pengurus UKM.
          </DrawerDescription>
        </DrawerHeader>
        <QrAbsence className="px-4" />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Kembali</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

function QrAbsence({ className }) {
  return (
    <div className={cn("grid items-start gap-4 py-4", className)}>
      <QRCode
        size={256}
        style={{ height: "auto", maxWidth: "100%", width: "80%", margin: "0 auto" }}
        value={"hehe siapa iseng ni scan"}
        viewBox={"0 0 256 256"}
      />
    </div>
  );
}

export default QRAbsence;