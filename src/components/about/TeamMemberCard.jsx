import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

export function TeamMemberCard({ member, index, isClient }) {
  const cardContent = (
    <div 
      className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden cursor-pointer group"
    >
      <div className="relative overflow-hidden">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
        <p className="text-blue-600 font-semibold mb-2">{member.position}</p>
        <p className="text-gray-600 text-sm mb-4">{member.experience}</p>
        <div className="flex items-center text-gray-500 text-sm">
          <Mail className="w-4 h-4 mr-1" />
          {member.contact}
        </div>
      </div>
    </div>
  );

  if (!isClient) {
    return (
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
        <div className="relative overflow-hidden">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-64 object-cover"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
          <p className="text-blue-600 font-semibold mb-2">{member.position}</p>
          <p className="text-gray-600 text-sm mb-4">{member.experience}</p>
          <div className="flex items-center text-gray-500 text-sm">
            <Mail className="w-4 h-4 mr-1" />
            {member.contact}
          </div>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5, scale: 1.02 }}
    >
      {cardContent}
    </motion.div>
  );
}