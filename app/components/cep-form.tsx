"use client";
import { useCep } from "./useCep";

export default function Cep() {
  const { errors, handleFormSubmit, handleSubmit, register } = useCep();
  return (
    <div className="mb-5 border rounded-sm p-4">
      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        className="flex flex-col gap-4"
      >
        <div>
          <input
            {...register("address.zipCode")}
            type="text"
            placeholder="CEP"
            maxLength={9}
            className="input-form"
          />
          {errors.address?.zipCode?.message && (
            <p className="mt-2 text-sm text-red-500">
              {errors.address?.zipCode?.message}
            </p>
          )}
        </div>
        <div>
          <input
            {...register("address.street")}
            type="text"
            placeholder="Rua"
            className="input-form"
          />
          {errors.address?.street?.message && (
            <p className="mt-2 text-sm text-red-500">
              {errors.address?.street?.message}
            </p>
          )}
        </div>
        <div>
          <input
            {...register("address.number")}
            type="text"
            placeholder="Número"
            className="input-form"
          />
          {errors.address?.number?.message && (
            <p className="mt-2 text-sm text-red-500">
              {errors.address?.number?.message}
            </p>
          )}
        </div>
        <div>
          <input
            {...register("address.district")}
            type="text"
            placeholder="Bairro"
            className="input-form"
          />
          {errors.address?.district?.message && (
            <p className="mt-2 text-sm text-red-500">
              {errors.address?.district?.message}
            </p>
          )}
        </div>
        <div>
          <input
            {...register("address.complement")}
            type="text"
            placeholder="Completemento"
            className="input-form"
          />
          {errors.address?.complement?.message && (
            <p className="mt-2 text-sm text-red-500">
              {errors.address?.complement?.message}
            </p>
          )}
        </div>
        <div>
          <input
            {...register("address.city")}
            type="text"
            placeholder="Cidade"
            className="input-form"
          />
          {errors.address?.city?.message && (
            <p className="mt-2 text-sm text-red-500">
              {errors.address?.city?.message}
            </p>
          )}
        </div>
        <div>
          <input
            {...register("address.state")}
            type="text"
            placeholder="Estado"
            className="input-form"
          />
          {errors.address?.state?.message && (
            <p className="mt-2 text-sm text-red-500">
              {errors.address?.state?.message}
            </p>
          )}
        </div>
        <button type="submit" className="button-form">
          Enviar
        </button>
      </form>
    </div>
  );
}
