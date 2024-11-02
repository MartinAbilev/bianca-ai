import Navbar from "./_components/Navbar";

export default function BiDashLayout({children}:{children: React.ReactNode})
{
    return (
    <div className="">
        <Navbar />
        {children}
    </div>)
}
