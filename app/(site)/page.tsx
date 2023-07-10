import getSongs from '@/actions/getSongs';
import Header from '@/components/Header';
import ListItem from '@/components/ListItem';
import PageContent from './components/PageContent';

export const revalidate = 0;

export default async function Home() {
  const songs = await getSongs();

  const currentTime = new Date();
  const hour = currentTime.getHours();

  let partOfDay;

  if (hour >= 5 && hour < 12) {
    partOfDay = 'Buenos Días';
  } else if (hour >= 12 && hour < 17) {
    partOfDay = 'Buenas Tardes';
  } else {
    partOfDay = 'Buenas Noches';
  }

  return (
    <div className="bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto">
      <Header>
        <div className="mb-2">
          <h1 className="text-white text-3xl font-semibold">
            {partOfDay ? partOfDay : 'Bienvenido de nuevo'}
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3 mt-4">
            <ListItem
              image="/images/liked.png"
              name="Tus me gusta"
              href="liked"
            />
          </div>
        </div>
      </Header>
      <div className="mt-2 mb-7 px-6">
        <div className="flex items-center justify-between">
          <h1 className="text-white font-semibold text-2xl">Últimas canciones</h1>
        </div>
        <PageContent songs={songs} />
      </div>
    </div>
  );
}
