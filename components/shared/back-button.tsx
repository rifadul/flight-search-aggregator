'use client';

import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

export function BackButton() {
    const router = useRouter();

    return (
        <Button
            variant="ghost"
            size="sm"
            className="w-fit gap-2"
            onClick={() => router.back()}>
            <ArrowLeft className="h-4 w-4" />
            Back
        </Button>
    );
}
