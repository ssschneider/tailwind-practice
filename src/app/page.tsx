import Logo from "../../public/logo.svg";
import Client01 from "../../public/client01.svg";
import Client02 from "../../public/client02.svg";
import Image from "next/image";
import { PaperAirplaneIcon, ClockIcon, BanknotesIcon, UserIcon, AtSymbolIcon, PhoneIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <main className="">
      {/* Header */}
      <div className="w-full flex justify-around items-center h-screen bg-gray-100">
        <Image 
          src={Logo}
          alt="Make it Rain logo"
        />
        <div className="bg-green-600 h-full max-w-xl p-12 flex flex-col justify-center">
          <h2 className="font-bold text-4xl">Open your pockets...</h2>
          <p className="text-xl mt-3">...so money can flow in</p>

          {/* Input name */}
          <div className="w-full mt-10">
            <div className="w-full mt-4">
              <label 
                  htmlFor="name"
                  className="text-gray-100 text-2xl capitalize"
              >
                  Full name:
              </label>
              <div className="bg-green-200 rounded px-4 py-4 flex gap-2">
                  <UserIcon className="h-6 w-6 text-green-950" />
                      <input 
                          className="bg-transparent w-full outline-0 text-green-950 border-b-green-200 focus:border-b-green-950" 
                          placeholder="John Dane Smith"
                          id="name"
                      />
              </div>
            </div>
          </div>

          {/* Input email */}
          <div className="w-full mt-10">
            <div className="w-full mt-4">
              <label 
                  htmlFor="email"
                  className="text-gray-100 text-2xl capitalize"
              >
                  Email:
              </label>
              <div className="bg-green-200 rounded px-4 py-4 flex gap-2">
                  <AtSymbolIcon className="h-6 w-6 text-green-950" />
                      <input 
                          className="bg-transparent w-full outline-0 text-green-950 border-b-green-200 focus:border-b-green-950" 
                          placeholder="John D. Smith"
                          id="email"
                      />
              </div>
            </div>
          </div>

          {/* Input phone */}
          <div className="w-full mt-10">
            <div className="w-full mt-4">
              <label 
                  htmlFor="phone"
                  className="text-gray-100 text-2xl capitalize"
              >
                  Phone:
              </label>
              <div className="bg-green-200 rounded px-4 py-4 flex gap-2">
                  <PhoneIcon className="h-6 w-6 text-green-950" />
                      <input 
                          className="bg-transparent w-full outline-0 text-green-950 border-b-green-200 focus:border-b-green-950" 
                          placeholder="+xx xx xxxxx-xxxx"
                          id="phone"
                      />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero */}
      <div className="w-full bg-green-200 py-16 flex flex-col justify-center items-center">
        <h2 className="text-green-950 text-5xl">Keep it simple.</h2>
        <p className="text-green-950 text-xl mt-2">No tricky business</p>
        <div className="flex justify-between gap-40 mt-8">
          <div className="flex gap-2 items-center">
            <PaperAirplaneIcon className="w-10 h-10 text-green-950 -rotate-45"/>
            <div>
              <p className="text-green-950 font-bold text-xl">SEND</p>
              <p className="text-green-950">the form above</p>
            </div>
          </div>

          <div className="flex gap-2 items-center">
            <ClockIcon className="w-10 h-10 text-green-950 -rotate-45"/>
            <div>
              <p className="text-green-950 font-bold text-xl">WAIT</p>
              <p className="text-green-950">the approval</p>
            </div>
          </div>

          <div className="flex gap-2 items-center">
            <BanknotesIcon className="w-10 h-10 text-green-950 -rotate-45"/>
            <div>
              <p className="text-green-950 font-bold text-xl">GET</p>
              <p className="text-green-950">the money</p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonies */}
      <div className="flex gap-8 p-24 bg-gray-100 justify-around">
        <div className="flex items-center gap-8">
          <Image 
            src={Client01}
            alt="Placeholder UI pattern"
          />
          <div className="max-w-60">
            <p className="text-black text-lg">Nam voluptas rerum sed molestiae odio et esse. Omnis aut illum et ducimus nisi. Quia vel voluptatem.</p>
            <p className="text-black italic mt-1">- Alexis Reynolds</p>
          </div>
        </div>

        <div className="flex items-center gap-8">
          <Image 
            src={Client02}
            alt="Placeholder UI pattern"
          />
          <div className="max-w-60">
            <p className="text-black text-lg">Nihil nobis enim consequuntur veritatis. Sint hic perspiciatis. Unde quaerat accusamus sed.</p>
            <p className="text-black italic mt-1">- Krystal Crona</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-green-600 p-12 flex flex-col items-center gap-3">
          <h5 className="font-bold text-3xl text-gray-100">SEND. WAIT. GET THE MONEY.</h5>
          <p className="text-xl text-gray-100">Will you miss this unique opportunity?</p>
          <button 
            className="mt-5 bg-green-200 text-green-950 px-8 py-3 rounded font-bold font-size-2xl"
          >
            GIVE ME THE MONEY!
          </button>
      </div>
    </main>
  );
}
