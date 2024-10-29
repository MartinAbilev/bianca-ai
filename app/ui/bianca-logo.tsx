import Image from "next/image"
import { lusitana } from '@/app/ui/fonts';

export default function BiancaLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
          <Image
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert opacity-100 z-10"
              src="/biai.svg"
              alt="Bi.AI Logo"
              width={280*2}
              height={137*2}
              priority
          />
    </div>
  );
}
