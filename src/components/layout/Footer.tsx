export default function Footer() {
  return (
    <footer className="bg-navy border-t border-[rgba(201,168,76,0.2)] px-20 py-6 flex flex-col md:flex-row items-center justify-between gap-2 text-sm text-muted">
      <span>
        © {new Date().getFullYear()}{' '}
        <span className="font-playfair text-gold font-bold">Ricardo De Quiroz Jr.</span>{' '}
        — All rights reserved.
      </span>
      <span className="text-gold text-xs tracking-wider uppercase">BSIT · Full-Stack Developer · Philippines</span>
    </footer>
  )
}
