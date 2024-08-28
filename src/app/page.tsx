import FirstPage from "@/components/firstPage";
import { Poppins, League_Spartan } from 'next/font/google'
import dynamic from 'next/dynamic'
 
const DynamicHeader = dynamic(() => import('../components/firstPage'), {
  ssr: false,
})
const poppins = Poppins({ subsets: ['latin'], weight: '400' })
const ls = League_Spartan({ subsets: ['latin']})


export default function Home() {
  return (
    <main className={ls.className + ' bg-black text-white w-fit'}>
      <DynamicHeader>
      </DynamicHeader>
    </main>
  );
}
