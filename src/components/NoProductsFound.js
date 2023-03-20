import { ExclamationCircleIcon } from "@heroicons/react/24/outline"
import RssIcon from "@heroicons/react/24/outline"
export default function NoProductsFound() {

    return (
        <div className="py-14 px-6 text-center text-sm sm:px-14">
        <ExclamationCircleIcon
          type="outline"
          name="exclamation-circle"
          className="mx-auto h-6 w-6 text-gray-400"
        />
        
        <p className="mt-4 font-semibold text-gray-900">No results found</p>
        <p className="mt-2 text-gray-500">No products found for this search term. Please try again.</p>
      </div>
    )
}