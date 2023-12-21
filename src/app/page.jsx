import Image from 'next/image';
import AnimeList from '../components/AnimeList';
import Header from '../components/AnimeList/Header';
import { getAnimeResponse } from './services/api_services';
import Link from 'next/link';
const Page = async () => {

	const topAnime = await getAnimeResponse("top/anime", "limit=8")

	return (
		<>
			<section>
				<Header
					title="Paling Populer"
					linkTitle="Lihat Semua"
					linkHref="/populer"
				/>
				<AnimeList api={topAnime} />
			</section>
		</>
	);
};
export default Page;
