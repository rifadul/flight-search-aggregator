import { FlightSearchForm } from '@/components/search/flight-search-form';
import { PageContainer, PageHeader } from '@/components/shared';

export default function HomePage() {
    return (
        <PageContainer>
            <div className="py-10">
                <PageHeader
                    title="Flight Search Aggregator"
                    description="Search and compare flights across multiple airlines."
                />

                <FlightSearchForm />
            </div>
        </PageContainer>
    );
}
