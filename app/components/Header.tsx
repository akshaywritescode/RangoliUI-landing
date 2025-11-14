export default function Header() {
    return (
        <header className="h-[65px] border-b border-b-white/10 w-full flex items-center px-10">
            {/* Logo */}
            <h1 className="text-3xl font-bold mr-10">RangoliUI</h1>
            {/* Navigation Menu */}
            <nav>
                <ul className="flex items-center gap-10 text-sm font-medium">
                    <li>
                        <a
                            href="#"
                            className="p-2 rounded-md hover:bg-accent hover:text-accent-foreground"
                        >
                            Get Started
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}