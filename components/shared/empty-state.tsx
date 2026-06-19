import { Plane } from 'lucide-react';

interface EmptyStateProps {
    title: string;
    description?: string;
}

export function EmptyState({ title, description }: EmptyStateProps) {
    return (
        <div className="flex flex-col items-center justify-center py-16 text-center">
            <Plane className="mb-4 h-10 w-10 text-muted-foreground" />
            <h2 className="text-xl font-semibold">{title}</h2>
            {description && (
                <p className="mt-2 text-muted-foreground">{description}</p>
            )}
        </div>
    );
}
