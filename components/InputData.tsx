"use client";

import { Combobox } from "@headlessui/react";

const InputData = ({ placeholder }) => {
  return (
    <div className="search-manufacturer">
      <Combobox>
        <div className="relative w-full ">
          <Combobox.Input className="search-manufacturer__input" placeholder={placeholder} />
        </div>
      </Combobox>
    </div>
  );
};

export default InputData;
