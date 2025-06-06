import FormProgressBar from "./FormProgressBar";

function FormContainer({ children }: { children: React.ReactNode }) {
  return (
    <>
      <FormProgressBar />
      <form className="mx-auto mt-16 w-1/2">{children}</form>
    </>
  );
}

export default FormContainer;
