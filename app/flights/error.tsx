'use client';

import { ErrorState } from '@/components/shared';

export default function Error({ reset }: { reset: () => void }) {
    return (
        <ErrorState
            title="Something went wrong"
            description="Unable to load flights."
        />
    );
}
