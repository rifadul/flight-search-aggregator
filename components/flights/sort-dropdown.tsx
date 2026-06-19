'use client';

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { SortOption } from '@/types/filter';
import { FilterSelect } from '../shared/FilterSelect';

interface SortDropdownProps {
    value: SortOption;
    onChange: (value: SortOption) => void;
}

export function SortDropdown({ value, onChange }: SortDropdownProps) {
    return (
        <FilterSelect label="Sort By">
            <Select
                value={value}
                onValueChange={(value) => onChange(value as SortOption)}>
                <SelectTrigger className="w-55">
                    <SelectValue />
                </SelectTrigger>

                <SelectContent>
                    <SelectItem value="price-asc">Lowest Price</SelectItem>

                    <SelectItem value="price-desc">Highest Price</SelectItem>

                    <SelectItem value="duration-asc">
                        Shortest Duration
                    </SelectItem>
                </SelectContent>
            </Select>
        </FilterSelect>
    );
}
