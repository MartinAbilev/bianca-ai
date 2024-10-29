import BiancaLogo from "../ui/bianca-logo";
import SignUpForm from "../ui/signup-form";

export default function SignUpPage()
{
  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        <div className="flex h-14 w-full items-end rounded-lg bg-slate-200 p-3 md:h-14">
          <div className="w-32 text-white md:w-36">
            <BiancaLogo />
          </div>
        </div>
        <SignUpForm />
      </div>
    </main>
  );
}
