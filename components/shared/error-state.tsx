import { AlertTriangle } from 'lucide-react';

interface ErrorStateProps {
    title: string;
    description?: string;
}

export function ErrorState({ title, description }: ErrorStateProps) {
    return (
        <div className="flex flex-col items-center justify-center py-16 text-center">
            <AlertTriangle className="mb-4 h-10 w-10 text-destructive" />
            <h2 className="text-xl font-semibold">{title}</h2>
            {description && (
                <p className="mt-2 text-muted-foreground">{description}</p>
            )}
        </div>
    );
}
