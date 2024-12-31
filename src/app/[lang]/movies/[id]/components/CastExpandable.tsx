import { Card } from "@/components/ui/card";
import type { getDictionary } from "@/get-dictionary";
import Image from "next/image";

const CastExpandable = ({
	dictionary,
	movie,
}: {
	dictionary: Awaited<ReturnType<typeof getDictionary>>;
	movie: Content;
}) => {
	if (!movie.credits) return;
	return (
		<>
			<Card className="w-full p-6 space-y-3">
				<h2 className="text-3xl font-semibold">
					{dictionary.content_details.cast.title}
				</h2>
			</Card>
			<div className="grid grid-cols-1 max-sm:grid-cols-2 sm:grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-3">
				{movie.credits.cast.map((actor) => (
					<Card
						key={actor.id}
						className="flex flex-col items-center p-3 relative overflow-hidden"
					>
						<Image
							src={`${actor.profile_path ? `https://image.tmdb.org/t/p/w500${actor.profile_path}` : "/static/placeholder-person.jpg"}`}
							alt={actor.name}
							width={40}
							height={40}
							className="w-full max-h-72 absolute top-0 left-0 object-cover"
						/>
						<div className="flex flex-col items-center mt-72">
							<h3 className="text-xl font-semibold text-center leading-tight">
								{actor.name}
							</h3>
							<p className="text-center">{actor.character}</p>
						</div>
					</Card>
				))}
			</div>
		</>
	);
};

export default CastExpandable;
