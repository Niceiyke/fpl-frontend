import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col items-center justify-center h-screen">
        <Image
          src="/logo.svg"
          alt="Logo"
          width={200}
          height={200}
          priority
        />
        <h1 className="text-6xl font-bold text-center mt-4">Welcome to FPL Insight</h1>
      </div>
    </main>
  );
}
