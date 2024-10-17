"use client";

import * as React from "react";

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
import { useRef, useState, useEffect } from "react";
import QrScanner from "qr-scanner";
import { CameraIcon, UserRoundCheck } from "lucide-react";

const QRScanner = React.forwardRef(({ className, ...props }, ref) => {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const [open, setOpen] = React.useState(false);

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button className="max-w-sm space-x-2" variant="stikom"><CameraIcon/><span className="hidden lg:block">Absensi Kehadiran</span></Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Absen Kehadiran</DialogTitle>
            <DialogDescription>
              Absensi dilakukan dengan cara memindai langsung kode QR dari anggota UKM.
            </DialogDescription>
          </DialogHeader>
          {/* here */}
          <Scanner />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button className="max-w-sm space-x-2" variant="stikom"><CameraIcon/><span className="hidden lg:block ml-2">Absensi Kehadiran</span></Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Absen Kehadiran</DrawerTitle>
          <DrawerDescription>
            Absensi dilakukan dengan cara memindai langsung kode QR dari anggota UKM.
          </DrawerDescription>
        </DrawerHeader>
        {/* here */}
        <Scanner />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Kembali</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
});
QRScanner.displayName = "QRScanner";

const Scanner = () => {
  const scanner = useRef();
  const videoEl = useRef(null);
  const qrBoxEl = useRef(null);
  const [qrOn, setQrOn] = useState(true);

  const [hold, onHold] = useState(false);

  const [scannedResult, setScannedResult] = useState("");

  const generatePreview = (video) => {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    context.translate(canvas.width, 0);
    context.scale(-1, 1);

    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    return canvas.toDataURL();
  };

  const resumeScanner = () => {
    scanner.current.start();
    onHold(false);
  };

  const onScanSuccess = (result) => {
    // console.log(result);

    scanner.current.stop();

    scanner.preview = generatePreview(videoEl.current);

    onHold(true);

    setScannedResult(result?.data);
  };

  const onScanFail = (err) => {
    // console.log(err);

  };

  useEffect(() => {
    if (videoEl?.current && !scanner.current) {
      scanner.current = new QrScanner(videoEl?.current, onScanSuccess, {
        onDecodeError: onScanFail,
        preferredCamera: "environment",
        highlightScanRegion: true,
        highlightCodeOutline: true,
        overlay: qrBoxEl?.current || undefined,
      });

      scanner?.current
        ?.start()
        .then(() => setQrOn(true))
        .catch((err) => {
          if (err) setQrOn(false);
        });
    }

    return () => {
      if (!videoEl?.current) {
        scanner?.current?.stop();
      }
    };
  }, []);

  useEffect(() => {
    if (!qrOn)
      alert(
        "Camera is blocked or not accessible. Please allow camera in your browser permissions and Reload."
      );
  }, [qrOn]);

  return (
    <div className="qr-reader h-min">
      <video ref={videoEl} className={cn("h-auto", hold ? "hidden" : "")}></video>
      <div ref={qrBoxEl} className="qr-box">
        {/* Overlay disabled for some reason v: */}
        {/* {!videoEl?.current && (
          <svg className="w-full h-min" width="250" height="250" viewBox="0 0 250 250" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect y="-0.000976562" width="55.1552" height="11.6408" fill="white"/>
            <rect x="11.6408" y="-0.000976562" width="55.1551" height="11.6408" transform="rotate(90 11.6408 -0.000976562)" fill="white"/>
            <rect y="249.999" width="55.1551" height="11.6408" transform="rotate(-90 0 249.999)" fill="white"/>
            <rect y="238.357" width="55.1552" height="11.6408" fill="white"/>
            <rect x="250" y="249.999" width="55.1552" height="11.6408" transform="rotate(-180 250 249.999)" fill="white"/>
            <rect x="238.359" y="249.999" width="55.1551" height="11.6408" transform="rotate(-90 238.359 249.999)" fill="white"/>
            <rect x="250" y="-0.00146484" width="55.1551" height="11.6408" transform="rotate(90 250 -0.00146484)" fill="white"/>
            <rect x="250" y="11.6392" width="55.1552" height="11.6408" transform="rotate(180 250 11.6392)" fill="white"/>
          </svg>
        )} */}
      </div>

      {(scannedResult && hold) && (
        <div className={"px-4"}>
          <img src={scanner.preview} alt="Scanned QR Code" />
          <div className="grid gap-2 py-4">
            <div>
              <p className="text-sm">
                Kode Unik
              </p>
              <b>{scannedResult ? scannedResult : "Oops, terjadi kegagalan sistem."}</b>
            </div>
            <div>
              <p className="text-sm">
                Nomor Induk Mahasiswa
              </p>
              <b>24000000</b>
            </div>
            <div>
              <p className="text-sm">
                Nama Mahasiswa
              </p>
              <b>Wayan</b>
            </div>
            <div>
              <p className="text-sm">
                Kegiatan
              </p>
              <b>UKM KSL - Pelatihan 14</b>
            </div>
          </div>
          <Button className={"w-full space-y-4"} onClick={resumeScanner}>Absen</Button>
        </div>
      )}
    </div>
  );
};

export default QRScanner;