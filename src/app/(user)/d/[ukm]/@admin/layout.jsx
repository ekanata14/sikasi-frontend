import React from "react";
import { Backdrop } from "~/components/backdrop";
import { Sidebar } from "~/components/sidebar";

export default function Layout({children, params}) {
    return (
        <main className='h-screen w-full'>
            {children}
            <Sidebar CurrentParams={params}></Sidebar>
            {/* <Backdrop/> */}
        </main>
    );
};

Layout;