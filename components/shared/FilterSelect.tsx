interface FilterSelectProps {
    label: string;
    children: React.ReactNode;
}

export function FilterSelect({ label, children }: FilterSelectProps) {
    return (
        <div>
            <p className="text-sm font-medium">{label}</p>
            {children}
        </div>
    );
}
