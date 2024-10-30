import Link from "next/link";
import { Button } from "../ui/button";

export default function BiDashButt()
{
    return (
        <div>
            <Link href="/dashboard">
                <Button>Dashboard</Button>
            </Link>
        </div>
    )
}
