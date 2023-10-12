"use client";

import { useForm, Controller } from "react-hook-form";

import Input, { TInputProps } from "@/components/common/Input";
import Table from "@/components/common/Table";
import Form from "@/components/common/Form";
import { useState } from "react";

const fields: TInputProps[] = [
  {
    label: "First Name",
    id: "firstName",
  },
  {
    label: "Last Name",
    id: "lastName",
  },
  {
    label: "Age",
    id: "age",
  },
];

export default function Stores() {
  const [stores, setStores] = useState([
    {
      firstName: "Stathis",
      lastName: "Stathopoulos",
      age: "25",
    },
    {
      firstName: "Andra",
      lastName: "Toterman",
      age: "25",
    },
  ]);

  return (
    <div>
      <div className="my-10 flex justify-between">
        <h1 className="text-3xl font-bold">Stores</h1>
      </div>
      <Table
        searchable
        columns={[
          {
            Header: "First Name",
            accessor: "firstName",
          },
          {
            Header: "Last Name",
            accessor: "lastName",
          },
          {
            Header: "Age",
            accessor: "age",
          },
        ]}
        data={stores}
      />
      <div className="max-w-xs">
        <Form
          fields={fields}
          onSubmit={(data) => {
            setStores([...stores, data]);
          }}
        />
      </div>
    </div>
  );
}
