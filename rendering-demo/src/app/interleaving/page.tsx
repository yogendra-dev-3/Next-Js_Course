
import ClientComponentOne from "@/components/client-component-one";
import ServerComponentOne from "@/components/server-component-one";

export default function InterLeavingPage() {
    return (
        <>
        <div>Inter leaving page</div>
        <ClientComponentOne>
            <ServerComponentOne />
        </ClientComponentOne>
        </>
    );
}