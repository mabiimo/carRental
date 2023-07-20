import { CustomButton, InputData, SearchBar } from "@/components";
import Link from "next/link";

import React from "react";

export default async function page() {
  return (
    <main className="overflow-hidden">
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <CustomButton title="Sign Up" btnType="button" containerStyles="bg-primary-blue text-white rounded-full mt-10" />
        <Link href="/signin">
          <p>Have you own account ?</p>
        </Link>
      </div>
    </main>
  );
}
