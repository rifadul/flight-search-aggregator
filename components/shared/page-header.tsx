import { BackButton } from './back-button';

interface PageHeaderProps {
    title: string;
    description?: string;
    showBackButton?: boolean;
}

export function PageHeader({
    title,
    description,
    showBackButton = false,
}: PageHeaderProps) {
    return (
        <div>
            {showBackButton && <BackButton />}

            <div>
                <h1 className="text-2xl font-bold tracking-tight">{title}</h1>

                {description && (
                    <p className="text-md text-muted-foreground">
                        {description}
                    </p>
                )}
            </div>
        </div>
    );
}
