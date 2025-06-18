import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-white py-8 px-6">
      <div className="container mx-auto text-center">
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Pam Pinheiro. Todos os direitos
          reservados.
        </p>
        <p className="cursor-pointer text-sm text-gray-400 mt-2">
          Desenvolvido por{" "}
          <Link
            href="https://github.com/felipeclarindo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#C39C68] hover:underline"
          >
            Felipe Clarindo
          </Link>
        </p>
      </div>
    </footer>
  );
}
