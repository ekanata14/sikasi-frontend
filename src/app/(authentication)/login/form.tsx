"use client";

import * as React from "react";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { cn } from "~/lib/utils";
import Link from "next/link";
import { useRouter } from 'next/navigation';

// Define form schema
const FormSchema = z.object({
  username: z.string().min(1, { message: "Kolom tidak boleh kosong" }),
  password: z.string().min(1, { message: "Kolom tidak boleh kosong" }),
});

export function LoginForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const router = useRouter();

  const onSubmit = (data) => {
    console.log(data);
    // Post login data to the backend
    fetch("http://localhost:80/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: data.email,
        password: data.password,
      }),
    })
      .then(async (response) => {
        const data = await response.json();
        console.log(data);
        if (data.status) {
          router.push("/welcome");
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            // @ts-ignore
            <FormItem>
              {/* @ts-ignore */}
              <FormLabel>NIM</FormLabel>
              {/* @ts-ignore */}
              <FormControl>
                <Input type="text" autoComplete="username" placeholder="NIM pengguna" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            // @ts-ignore
            <FormItem>
              <FormLabel className={cn("flex justify-between")}>
                Password{" "}
                <Link
                  href={"/forgot-password"}
                  className={cn("text-blue-600 cursor-pointer")}
                >
                  lupa password
                </Link>
              </FormLabel>
              <FormControl>
                <Input type="password" autoComplete="current-password" placeholder="password" {...field} />
              </FormControl>
              <FormMessage />
              {/* @ts-ignore */}
              {error && <FormMessage>{error}</FormMessage>}
            </FormItem>
          )}
        />
        <div className="grid gap-2">
          <Button
            className={cn("w-full bg-blue-600 hover:bg-blue-400")}
            type="submit"
          >
            Simpan
          </Button>
          {/* Divide Line */}
          <div className="grid grid-cols-7 justify-center items-center text-center gap-2 text-slate-800">
            <span className="col-span-3 border-slate-800 border-b h-1"></span>
            <p>atau</p>
            <span className="col-span-3 border-slate-800 border-b h-1"></span>
          </div>

          {/* Sign in Google */}
          <Button
            asChild
            className="w-full bg-blue-600 hover:bg-blue-400 shadow-md gap-2 pl-2"
          >
            <Link href="http://localhost:80/auth/google" className="">
              <svg
                className="w-auto max-h-8 bg-white rounded-full p-1"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 48 48"
              >
                {" "}
                <path
                  fill="#FFC107"
                  d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                ></path>
                <path
                  fill="#FF3D00"
                  d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                ></path>
                <path
                  fill="#4CAF50"
                  d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                ></path>
                <path
                  fill="#1976D2"
                  d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                ></path>
              </svg>
              Sign in with Google
            </Link>
          </Button>
        </div>
      </form>
    </Form>
  );
});

LoginForm.displayName = "LoginForm";

export default LoginForm;
