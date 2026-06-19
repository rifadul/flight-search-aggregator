import { FlightCardSkeleton, PageContainer } from '@/components/shared';

export default function Loading() {
    return (
        <PageContainer>
            <div className="space-y-4 py-10">
                <FlightCardSkeleton />
                <FlightCardSkeleton />
                <FlightCardSkeleton />
                <FlightCardSkeleton />
            </div>
        </PageContainer>
    );
}
