import Navbar from "./_components/Navbar";

export default function BiDashLayout({children}:{children: React.ReactNode})
{
    return (
    <div className="">
        <header className="flex justify-center  p-6 shadow-xl fixed top-0 w-full z-10 bg-background/95">
            <Navbar />
        </header>
        {children}
    </div>)
}
