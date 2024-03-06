import { useForm } from "react-hook-form";
import { AddressProps, FormProps } from "./type";
import { zodResolver } from "@hookform/resolvers/zod";
import { schemaForm } from "./cep.schema";
import { useCallback, useEffect } from "react";
import axios from "axios";
import { zipCodeMask } from "../lib/mask";

export const useCep = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    watch,
    setValue,
  } = useForm<FormProps>({
    criteriaMode: "all",
    mode: "all",
    resolver: zodResolver(schemaForm),
    defaultValues: {
      address: {
        zipCode: "",
        street: "",
        number: "",
        district: "",
        complement: "",
        city: "",
        state: "",
      },
    },
  });

  const zipCode = watch("address.zipCode");

  const handleFormSubmit = (data: FormProps) => {
    console.log(data);
  };

  const handleSetData = useCallback(
    (data: AddressProps) => {
      setValue("address.street", data.logradouro);
      setValue("address.district", data.bairro);
      setValue("address.complement", data.complemento);
      setValue("address.city", data.localidade);
      setValue("address.state", data.uf);
    },
    [setValue]
  );

  const handleFetchAddress = useCallback(
    async (zipCode: string) => {
      const { data } = await axios.get(
        `http://viacep.com.br/ws/${zipCode}/json/`
      );
      handleSetData(data);
    },
    [handleSetData]
  );

  useEffect(() => {
    setValue("address.zipCode", zipCodeMask(zipCode));

    if (zipCode.length !== 9) return;
    handleFetchAddress(zipCode.replace(/[^\w\s]/gi, ""));
  }, [handleFetchAddress, setValue, zipCode]);

  return {
    handleFormSubmit,
    handleSubmit,
    errors,
    register,
  };
};
