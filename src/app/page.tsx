import Image from "next/image";
import Sidebar from "./components/Sidebar";

export default function Home() {
  return (
    <>
      {/* Side menu */}
      <Sidebar/>
      {/* Menu page */}
      <div className="ml-72 p-6 bg-yellow-50 min-h-screen">
        {/* Seller's information */}
        <h5 className="text-xl font-bold dark:text-white">Seller's name</h5>
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white mt-4">Menu</h1>
        <div className="flex flex-row flex-wrap gap-10 text-lg">
          <div>
            <i className="fa-solid fa-location-dot text-orange-500 mr-2"></i>
            <label className="text-slate-500">123 Jane St</label>
          </div>
          <div>
            <i className="fa-solid fa-envelope text-orange-500 mr-2"></i>
            <label className="text-slate-500">seller@example.com</label>
          </div>
          <div>
            <i className="fa-solid fa-phone text-orange-500 mr-2"></i>
            <label className="text-slate-500">1234567890</label>
          </div>
          <div>
            <i className="fa-solid fa-globe text-orange-500 mr-2"></i>
            <label className="text-slate-500">mywebsite.example</label>
          </div>
        </div>
        <blockquote className="text-md italic font-light text-slate-700 dark:text-white w-[70%] mt-4">
          <p>"Experience authentic Vietnamese flavors: Fresh, aromatic dishes crafted from family recipes, featuring pho, spring rolls, and vibrant, zesty salads!"</p>
        </blockquote>

        {/* Menu content */}
        <div className="mt-6 pr-10">
          <div className="flex flex-row gap-4 my-3">
            <div className="w-[80%]">
              <div className="flex flex-row justify-between">
                <h5 className="text-xl font-bold dark:text-white">Banh mi </h5>
                <h5 className="text-xl font-bold dark:text-white">$10.00</h5>
              </div>
              <p className="text-md italic font-light text-slate-700 dark:text-white mt-2">
                A crusty baguette filled with savory meats, pickled vegetables, cilantro, and spicy chili, offering a symphony of flavors
              </p>
            </div>
            <Image src="/img/banh-mi.jpg" alt="Banh mi image" width={100} height={100} className="rounded-lg object-cover w-[100px] h-[100px]"/>
          </div>

          <div className="flex flex-row gap-4 my-3">
            <div className="w-[80%]">
              <div className="flex flex-row justify-between">
                <h5 className="text-xl font-bold dark:text-white">Bun bo hue </h5>
                <h5 className="text-xl font-bold dark:text-white">$20.00</h5>
              </div>
              <p className="text-md italic font-light text-slate-700 dark:text-white mt-2">
                A spicy Vietnamese beef noodle soup, infused with lemongrass and shrimp paste, topped with herbs and lime slices
              </p>
            </div>
            <Image src="/img/bun-bo-hue.jpg" alt="Bun bo hue image" width={100} height={100} className="rounded-lg object-cover w-[100px] h-[100px]"/>
          </div>

          <div className="flex flex-row gap-4 my-3">
            <div className="w-[80%]">
              <div className="flex flex-row justify-between">
                <h5 className="text-xl font-bold dark:text-white">Pho</h5>
                <h5 className="text-xl font-bold dark:text-white">$20.00</h5>
              </div>
              <p className="text-md italic font-light text-slate-700 dark:text-white mt-2">
                A fragrant Vietnamese noodle soup with tender slices of beef, rice noodles, and herbs in a rich, savory broth
              </p>
            </div>
            <Image src="/img/pho.jpg" alt="Pho image" width={100} height={100} className="rounded-lg object-cover w-[100px] h-[100px]"/>
          </div>

          <div className="flex flex-row gap-4 my-3">
            <div className="w-[80%]">
              <div className="flex flex-row justify-between">
                <h5 className="text-xl font-bold dark:text-white">Com Tam (Broken rice)</h5>
                <h5 className="text-xl font-bold dark:text-white">$18.00</h5>
              </div>
              <p className="text-md italic font-light text-slate-700 dark:text-white mt-2">
                A popular Vietnamese dish featuring broken rice, grilled pork, crispy skin, fresh vegetables, and a sweet fish sauce.
              </p>
            </div>
            <Image src="/img/com-tam.jpg" alt="Com tam image" width={100} height={100} className="rounded-lg object-cover w-[100px] h-[100px]"/>
          </div>

          <div className="flex flex-row gap-4 my-3">
            <div className="w-[80%]">
              <div className="flex flex-row justify-between">
                <h5 className="text-xl font-bold dark:text-white">Goi cuon (Salad roll)</h5>
                <h5 className="text-xl font-bold dark:text-white">$12.00</h5>
              </div>
              <p className="text-md italic font-light text-slate-700 dark:text-white mt-2">
                Fresh, light Vietnamese spring rolls filled with crunchy vegetables, herbs, and shrimp, wrapped in delicate rice paper.
              </p>
            </div>
            <Image src="/img/salad-roll.jpg" alt="Com tam image" width={100} height={100} className="rounded-lg object-cover w-[100px] h-[100px]"/>
          </div>
        </div>
      </div>
    </>
  );
}
