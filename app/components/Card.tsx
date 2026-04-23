interface CardProps {
  title: string;
  subtitle: string;
}

export default function Card({ title, subtitle }: CardProps) {
  return (
    <div className="bg-[#121821] p-4 rounded-2xl">
      <p className="text-white text-sm">{title}</p>
      <p className="text-gray-400 text-xs">{subtitle}</p>
    </div>
  )
}