import Hero from "@/components/hero";
import ConnectSupabaseSteps from "@/components/tutorial/connect-supabase-steps";
import SignUpUserSteps from "@/components/tutorial/sign-up-user-steps";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";
import Contacts from "@/app/contacts/page";

export default async function Home() {
  return (
    <>
      {/* <Hero /> */}
      <Contacts />
      <main className="flex-1 flex flex-col gap-6 px-4">
        {hasEnvVars ? <SignUpUserSteps /> : <ConnectSupabaseSteps />}
      </main>
    </>
  );
}
