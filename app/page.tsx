import Image from "next/image";
import Cep from "./components/cep-form";

export default function Home() {
  return (
    <main className="max-w-md mx-auto mt-5">
      <h1 className="text-2xl text-center mb-2">CEP</h1>
      <p className="text-sm font-light text-gray-500 dark:text-gray-400 text-center">
        Nextjs 14 - Reactjs - Tailwind - Axios - React Hook Form - Zod
      </p>
      <br />
      <hr />
      <br />
      <Cep />
    </main>
  );
}
