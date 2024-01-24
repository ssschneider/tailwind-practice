interface Props {
    field: string;
    placeholder: string;
    icon: any;
};

export default function Input({ field, icon, placeholder }: Props) {
    return (
        <div className="w-full">
            <label 
                htmlFor={field}
                className="text-gray-100 text-2xl capitalize"
            >
                {field}:
            </label>
            <div className="bg-green-200 rounded px-4 py-4 flex gap-2">
                <div className="h-6 w-6 text-green-950">{icon}</div>
                    <input 
                        className="bg-transparent w-full outline-0 text-green-950 border-b-green-200 focus:border-b-green-950" 
                        placeholder={placeholder}
                        id={field}
                    />
            </div>
        </div>
    );
}