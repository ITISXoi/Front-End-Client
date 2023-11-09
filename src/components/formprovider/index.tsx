import React from "react";
import {
  FormProvider,
  UseFormReturn,
  SubmitHandler,
  FieldValues,
} from "react-hook-form";

interface Props<TFormValue extends FieldValues> {
  methods: UseFormReturn<TFormValue, any>;
  onSubmit: SubmitHandler<TFormValue>;
  children?: React.ReactNode;
}

const FormWrapper = <TFormValue extends FieldValues>({
  methods,
  onSubmit,
  children,
  ...props
}: Props<TFormValue>) => {
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} {...props}>
        {children}
      </form>
    </FormProvider>
  );
};

export default FormWrapper;
