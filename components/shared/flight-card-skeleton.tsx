import { Skeleton } from '@/components/ui/skeleton';

export function FlightCardSkeleton() {
    return (
        <div className="rounded-lg border p-6">
            <div className="space-y-4">
                <Skeleton className="h-5 w-40" />
                <Skeleton className="h-4 w-64" />
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-10 w-full" />
            </div>
        </div>
    );
}
