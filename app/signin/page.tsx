import { CustomButton, InputData, SearchBar } from "@/components";
import Link from "next/link";

import React from "react";

export default async function page() {
  return (
    <main className="overflow-hidden">
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <InputData placeholder={"Sign In"} />
        <InputData placeholder={"Sign Up"} />
        <CustomButton title="Sign In" btnType="button" containerStyles="bg-primary-blue text-white rounded-full mt-10" />
        <Link href="/signup">
          <p className="text-grey text-sm mt-4 ">Register Account</p>
        </Link>
      </div>
    </main>
  );
}
