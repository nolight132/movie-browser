import { faStar } from '@fortawesome/free-solid-svg-icons/faStar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';

export default function ContentListItem() {
  return (
    <Link
      href="#"
      className="w-60 rounded-lg overflow-hidden bg-white m-3 lg:hover:scale-105 lg:hover:shadow-[0_0_8px_2px_rgba(255,255,255,0.3)] transition-all"
    >
      <div className="w-full h-80 relative">
        <Image
          className="w-full h-full object-cover pointer-events-none select-none"
          src={'/placeholder.jpg'}
          alt={'Loading'}
          width={500}
          height={280}
        />
      </div>
      <div className="w-full p-4">
        <div className="w-full flex place-content-between truncate">
          <div className="flex items-center">
            <h2 className="text-base font-semibold text-gray-800 max-w-36 truncate"></h2>
            <div className="w-36 bg-gray-300 animate-pulse h-3 rounded-sm"></div>
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon
              icon={faStar}
              style={{ color: '#FFD700' }}
              className="w-4 h-4 mr-1"
            />
            <div className="w-4 bg-gray-300 animate-pulse h-3 rounded-sm"></div>
          </div>
        </div>
        <div className="my-2 w-48 bg-gray-300 animate-pulse h-3 rounded-sm"></div>
        <div className="my-2 w-36 bg-gray-300 animate-pulse h-3 rounded-sm"></div>
      </div>
    </Link>
  );
}
