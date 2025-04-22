import { createClient } from "@/utils/supabase/server";

export default async function Contacts() {
  const supabase = await createClient();

  try {
    // Try with original table name
    const { data, error } = await supabase.from("contacts").select();

    console.log({ data, error });

    if (error) {
      return (
        <div>
          Error: {error.message} (Code: {error.code})
        </div>
      );
    }

    return <div>{JSON.stringify(data, null, 2)}</div>;
  } catch (e) {
    console.error("Error fetching contacts:", e);
    return <div>Error fetching contacts: {String(e)}</div>;
  }
}
