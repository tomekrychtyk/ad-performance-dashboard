interface CardProps {
    title: string;
    value: string;
}

export const Card = ({ title, value }: CardProps) => {
    return (
        <div className="bg-gray-100 flex flex-col col-span-full sm:col-span-6 xl:col-span-4 shadow-md rounded-xl pb-4">
            <div className="px-5 pt-5">
                <header className="flex justify-between items-start">
                    <h2 className="text-xs font-semibold text-gray-500 mb-1">{title}</h2>
                </header>
                <div className="text-3xl font-bold text-gray-800 mr-2">{value}</div>
            </div>
        </div>
    );
};
