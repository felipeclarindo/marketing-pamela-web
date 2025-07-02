import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-white py-8 px-6 flex flex-col items-center justify-center">
      <p className="text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Pam Pinheiro. Todos os direitos
        reservados.
      </p>
      <p className="text-sm text-gray-400 mt-2 flex justify-center items-center gap-2">
        Desenvolvido por
        <Link
          href="https://www.linkedin.com/in/felipeclarindo"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer z-10 flex items-center gap-1 text-[#C39C68] hover:text-[#d7b07f] transition-all duration-300 ease-in-out hover:opacity-60"
        >
          Felipe Clarindo
        </Link>
      </p>
    </footer>
  );
}
