'use client';

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

interface StopsFilterProps {
    value: string;
    onChange: (value: string) => void;
}

export function StopsFilter({ value, onChange }: StopsFilterProps) {
    return (
        <Select value={value} onValueChange={onChange}>
            {' '}
            <SelectTrigger className="w-55">
                {' '}
                <SelectValue placeholder="All Flights" />{' '}
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="all">All Flights</SelectItem>

                <SelectItem value="0">Non-stop</SelectItem>

                <SelectItem value="1">1 Stop</SelectItem>
            </SelectContent>
        </Select>
    );
}
