import Link from 'next/link';

export function Navbar() {
    return (
        <header className="border-b bg-background/80 backdrop-blur">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <Link
                    href="/"
                    className="flex items-center gap-2 font-semibold">
                    <span>✈</span> <span>Flight Search Aggregator</span>
                </Link>
                <nav className="flex items-center gap-6 text-sm text-muted-foreground">
                    <Link
                        href="/"
                        className="transition-colors hover:text-foreground">
                        Home
                    </Link>
                </nav>
            </div>
        </header>
    );
}
