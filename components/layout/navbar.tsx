import Link from 'next/link';

export function Navbar() {
    return (
        <header className="border-b bg-background/80 backdrop-blur">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                        ✈
                    </div>

                    <Link href="/" className="flex flex-col items-start">
                        <p className="font-semibold">
                            Flight Search Aggregator
                        </p>

                        <p className="text-xs text-muted-foreground">
                            Compare flights across airlines
                        </p>
                    </Link>
                </div>
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
