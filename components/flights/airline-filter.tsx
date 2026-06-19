'use client';

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

interface AirlineFilterProps {
    value: string;
    onChange: (value: string) => void;
}

export function AirlineFilter({ value, onChange }: AirlineFilterProps) {
    return (
        <Select value={value} onValueChange={onChange}>
            {' '}
            <SelectTrigger className="w-55">
                {' '}
                <SelectValue placeholder="All Airlines" />{' '}
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="all">All Airlines</SelectItem>

                <SelectItem value="biman">Biman</SelectItem>

                <SelectItem value="us-bangla">US-Bangla</SelectItem>

                <SelectItem value="novoair">Novoair</SelectItem>

                <SelectItem value="air-astra">Air Astra</SelectItem>
            </SelectContent>
        </Select>
    );
}
