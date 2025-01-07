export default async function Layout({children}: {children: React.ReactNode}) {
    const res=await fetch("http://localhost:3001/products",{
        next:{
            revalidate:20
        }
    });
    const products=await res.json()
    return (
        <section>
            {children}
        </section>
    );
}