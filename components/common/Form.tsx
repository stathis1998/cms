"use client";

import { useForm, Controller } from "react-hook-form";
import Input, { TInputProps } from "./Input";

export type TFormProps = {
  fields: TInputProps[];
  onSubmit: (data: any) => void;
};

export default function Form(props: TFormProps) {
  const { fields, onSubmit } = props;

  const { control, handleSubmit, reset } = useForm();

  return (
    <form
      onSubmit={handleSubmit((data) => {
        onSubmit(data);
        reset();
      })}
    >
      <div className="space-y-2">
        {fields.map((field) => (
          <Controller
            key={field.id}
            control={control}
            name={field.id}
            render={({ field: { onChange, value } }) => (
              <Input
                {...field}
                onChange={(e) => {
                  onChange(e);
                  field.onChange?.(e);
                }}
                value={value}
              />
            )}
          />
        ))}
      </div>

      <button>Submit</button>
    </form>
  );
}
