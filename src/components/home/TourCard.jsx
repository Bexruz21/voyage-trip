import { MapPin, Clock, Star, Heart } from 'lucide-react';

export function TourCard({ tour, isClient, isFavorite, onToggleFavorite }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300">
      <div className="relative">
        <img
          src={tour.image}
          alt={tour.name}
          className="w-full h-48 object-cover"
        />
        {tour.isHot && (
          <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            🔥 Хит сезона
          </div>
        )}
        {isClient && (
          <button
            onClick={() => onToggleFavorite(tour.id)}
            className={`absolute top-4 right-4 p-2 rounded-full backdrop-blur-sm transition-all duration-300 ${
              isFavorite
                ? 'bg-red-500 text-white'
                : 'bg-white/20 text-white hover:bg-white/30'
            }`}
          >
            <Heart
              className={`w-5 h-5 ${isFavorite ? 'fill-current' : ''}`}
            />
          </button>
        )}
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-gray-900">{tour.name}</h3>
          <div className="text-2xl font-bold text-cyan-600">{tour.price}</div>
        </div>

        <div className="flex items-center text-gray-600 mb-4">
          <MapPin className="w-4 h-4 mr-1" />
          <span className="text-sm">{tour.location}</span>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4 text-sm text-gray-600">
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              {tour.days}
            </div>
            <div className="flex items-center">
              <Star className="w-4 h-4 mr-1 text-yellow-400" />
              {tour.rating} ({tour.reviews})
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {tour.features.map((feature, idx) => (
            <span
              key={idx}
              className="px-2 py-1 bg-cyan-50 text-cyan-700 text-xs rounded-full border border-cyan-200"
            >
              {feature}
            </span>
          ))}
        </div>

        <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300">
          Подробнее о туре
        </button>
      </div>
    </div>
  );
}