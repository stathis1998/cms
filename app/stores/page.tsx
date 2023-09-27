import Input from "@/components/common/Input";
import Table from "@/components/common/Table";

export default function Stores() {
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
        data={[
          {
            firstName: "Stathis",
            lastName: "Stathopoulos",
            age: 25,
          },
          {
            firstName: "Andra",
            lastName: "Toterman",
            age: 25,
          },
        ]}
      />
      <div className="my-10 max-w-xs space-y-2">
        <Input label="First Name" id="firstName" />
        <Input label="Last Name" id="lastName" />
        <Input label="Age" id="age" />
      </div>
    </div>
  );
}
