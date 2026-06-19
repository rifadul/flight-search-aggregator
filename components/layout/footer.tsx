export function Footer() {
    return (
        <footer className="border-t py-6">
            {' '}
            <div className="container mx-auto px-4 py-8 text-center">
                {' '}
                <p className="font-medium">Flight Search Aggregator </p>
                <p className="mt-2 text-sm text-muted-foreground">
                    Built with Next.js, TypeScript, Redux Toolkit and shadcn/ui
                </p>
                <p className="mt-4 text-xs text-muted-foreground">
                    © 2026 All Rights Reserved
                </p>
            </div>
        </footer>
    );
}
