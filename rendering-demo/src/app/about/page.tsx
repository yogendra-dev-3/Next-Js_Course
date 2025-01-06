import { cookies } from "next/headers";
export default async function AboutPage() {
    const cookieStore=await cookies()
    const theme=cookieStore.get("theme")?.value
    console.log(theme)
    console.log("about page rendred")
    return (
        <h1>AboutPage {new Date().toLocaleTimeString()}</h1>
    );
}