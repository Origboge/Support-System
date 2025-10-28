import React, { useState, useEffect } from 'react';
import { Twitter, Send, MessageCircle, TrendingUp, Users, Calendar, Code, Rocket, Menu, X } from 'lucide-react';

// Navigation Component
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-lg border-b border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Users className="w-8 h-8 text-purple-400" />
            <span className="ml-2 text-white font-bold text-xl">The Support System</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#home" className="text-gray-300 hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium">Home</a>
              <a href="#team" className="text-gray-300 hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium">Team</a>
              <a href="#events" className="text-gray-300 hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium">Events</a>
              <a href="#community" className="text-gray-300 hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium">Community</a>
              <a href="/admin" className="text-purple-400 hover:text-purple-300 px-3 py-2 rounded-md text-sm font-medium">Admin</a>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-400 hover:text-white">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800">
            <a href="#home" className="text-gray-300 hover:text-purple-400 block px-3 py-2 rounded-md text-base font-medium">Home</a>
            <a href="#team" className="text-gray-300 hover:text-purple-400 block px-3 py-2 rounded-md text-base font-medium">Team</a>
            <a href="#events" className="text-gray-300 hover:text-purple-400 block px-3 py-2 rounded-md text-base font-medium">Events</a>
            <a href="#community" className="text-gray-300 hover:text-purple-400 block px-3 py-2 rounded-md text-base font-medium">Community</a>
            <a href="/admin" className="text-purple-400 hover:text-purple-300 block px-3 py-2 rounded-md text-base font-medium">Admin</a>
          </div>
        </div>
      )}
    </nav>
  );
};

// Hero Section
const Hero = () => (
  <div id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden pt-16">
    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxIDAgNiAyLjY5IDYgNnMtMi42OSA2LTYgNi02LTIuNjktNi02IDIuNjktNiA2LTZ6IiBzdHJva2U9IiM4QjVDRjYiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjIiLz48L2c+PC9zdmc+')] opacity-20"></div>
    
    <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
      {/* Logo placeholder - Replace with actual logo */}
      <div className="mb-8 inline-block p-4 bg-purple-500/20 rounded-full backdrop-blur-sm">
        <Users className="w-16 h-16 text-purple-400" />
      </div>
      
      <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
        The <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Support System</span>
      </h1>
      
      <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
        A Web3 Creators & Builders Hub where you grow, monetize, and get visibility with jobs, tools, and collaborations
      </p>
      
      <div className="flex flex-wrap gap-4 justify-center mb-12">
        <button className="px-6 sm:px-8 py-3 sm:py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold transition-all transform hover:scale-105 flex items-center gap-2 text-sm sm:text-base">
          <Rocket className="w-5 h-5" />
          Join Community
        </button>
        <button className="px-6 sm:px-8 py-3 sm:py-4 bg-white/10 hover:bg-white/20 text-white rounded-lg font-semibold transition-all backdrop-blur-sm text-sm sm:text-base">
          Learn More
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-16">
        <div className="bg-white/5 backdrop-blur-lg p-4 sm:p-6 rounded-xl border border-purple-500/20">
          <Calendar className="w-6 sm:w-8 h-6 sm:h-8 text-purple-400 mb-3" />
          <h3 className="text-white font-semibold text-base sm:text-lg mb-2">Daily Spaces</h3>
          <p className="text-gray-400 text-sm sm:text-base">7AM - 10AM daily sessions for growth and support</p>
        </div>
        <div className="bg-white/5 backdrop-blur-lg p-4 sm:p-6 rounded-xl border border-blue-500/20">
          <Code className="w-6 sm:w-8 h-6 sm:h-8 text-blue-400 mb-3" />
          <h3 className="text-white font-semibold text-base sm:text-lg mb-2">Web3 Tools</h3>
          <p className="text-gray-400 text-sm sm:text-base">Access cutting-edge resources and opportunities</p>
        </div>
        <div className="bg-white/5 backdrop-blur-lg p-4 sm:p-6 rounded-xl border border-purple-500/20">
          <TrendingUp className="w-6 sm:w-8 h-6 sm:h-8 text-purple-400 mb-3" />
          <h3 className="text-white font-semibold text-base sm:text-lg mb-2">Job Board</h3>
          <p className="text-gray-400 text-sm sm:text-base">Connect with opportunities in Web3</p>
        </div>
      </div>
    </div>
  </div>
);

// Live Crypto Prices
const LivePrices = () => {
  const [prices, setPrices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const response = await fetch(
          'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,solana,cardano,polkadot,binancecoin&vs_currencies=usd&include_24hr_change=true'
        );
        const data = await response.json();
        
        const formattedPrices = [
          { name: 'Bitcoin', symbol: 'BTC', price: data.bitcoin.usd, change: data.bitcoin.usd_24h_change },
          { name: 'Ethereum', symbol: 'ETH', price: data.ethereum.usd, change: data.ethereum.usd_24h_change },
          { name: 'Solana', symbol: 'SOL', price: data.solana.usd, change: data.solana.usd_24h_change },
          { name: 'BNB', symbol: 'BNB', price: data.binancecoin.usd, change: data.binancecoin.usd_24h_change },
          { name: 'Cardano', symbol: 'ADA', price: data.cardano.usd, change: data.cardano.usd_24h_change },
          { name: 'Polkadot', symbol: 'DOT', price: data.polkadot.usd, change: data.polkadot.usd_24h_change },
        ];
        
        setPrices(formattedPrices);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching prices:', error);
        setLoading(false);
      }
    };

    fetchPrices();
    const interval = setInterval(fetchPrices, 60000); // Update every minute
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-slate-900 py-6 sm:py-8 border-y border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-3 mb-4">
          <TrendingUp className="w-5 sm:w-6 h-5 sm:h-6 text-purple-400" />
          <h3 className="text-white font-semibold text-base sm:text-lg">Live Crypto Prices</h3>
          <span className="text-xs text-gray-500 ml-auto">Updates every 60s</span>
        </div>
        
        {loading ? (
          <div className="text-gray-400">Loading prices...</div>
        ) : (
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex gap-3 sm:gap-6 pb-2">
              {prices.map((coin) => (
                <div key={coin.symbol} className="flex-shrink-0 bg-white/5 backdrop-blur-lg px-4 sm:px-6 py-3 rounded-lg border border-purple-500/20 min-w-[140px] sm:min-w-[160px]">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <div className="text-gray-400 text-xs sm:text-sm">{coin.symbol}</div>
                      <div className="text-white font-semibold text-sm sm:text-lg">${coin.price.toLocaleString(undefined, {maximumFractionDigits: 2})}</div>
                    </div>
                    <div className={`text-xs sm:text-sm font-semibold ${coin.change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                      {coin.change >= 0 ? '+' : ''}{coin.change.toFixed(2)}%
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Team Section

const Team = () => {
  // TODO: Replace with actual team data
  const teamMembers = [
    {
      role: 'Founder',
      name: 'Founder Name',
      twitter: '@founder',
      image: '👤',
      bio: 'Building the future of Web3 communities'
    },
    {
      role: 'Community Lead',
      name: 'Lead Name',
      twitter: '@lead',
      image: '👤',
      bio: 'Empowering creators and builders'
    },
    {
      role: 'Moderator',
      name: 'Mod Name',
      twitter: '@moderator',
      image: '👤',
      bio: 'Keeping the community thriving'
    },
    {
      role: 'WhatsApp Admin',
      name: 'Admin Name',
      twitter: '@admin',
      image: '👤',
      bio: 'Supporting growth daily'
    }
  ];

  return (
    <div id="team" className="bg-slate-900 py-12 sm:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">Meet The Team</h2>
          <p className="text-gray-400 text-base sm:text-lg">The amazing people behind The Support System</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {teamMembers.map((member, idx) => (
            <div key={idx} className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-lg p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all hover:transform hover:scale-105">
              <div className="text-5xl sm:text-6xl mb-4 text-center">{member.image}</div>
              <div className="text-purple-400 text-xs sm:text-sm font-semibold mb-1">{member.role}</div>
              <h3 className="text-white font-bold text-lg sm:text-xl mb-2">{member.name}</h3>
              <p className="text-gray-400 text-xs sm:text-sm mb-3">{member.bio}</p>
              <a 
                href={`https://twitter.com/${member.twitter.replace('@', '')}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-400 hover:text-blue-300 flex items-center gap-2 text-xs sm:text-sm"
              >
                <Twitter className="w-4 h-4" />
                {member.twitter}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Upcoming Events
const Upcoming = () => {
  // TODO: Connect to Firebase for dynamic events
  const events = [
    {
      title: 'Daily Growth Space',
      date: 'Every Day',
      time: '7:00 AM - 10:00 AM',
      type: 'Twitter Space',
      description: 'Join our daily community space for networking, learning, and growth opportunities',
      status: 'recurring'
    },
    {
      title: 'Web3 Development Workshop',
      date: 'Coming Soon',
      time: 'TBA',
      type: 'Class',
      description: 'Learn smart contract development and blockchain fundamentals from industry experts',
      status: 'upcoming'
    },
    {
      title: 'Community Alpha Call',
      date: 'Every Friday',
      time: '8:00 PM EST',
      type: 'Announcement',
      description: 'Exclusive Web3 opportunities, project alphas, and insider updates',
      status: 'recurring'
    }
  ];

  const getStatusColor = (status) => {
    switch(status) {
      case 'recurring': return 'bg-green-500/20 text-green-300';
      case 'upcoming': return 'bg-blue-500/20 text-blue-300';
      default: return 'bg-purple-500/20 text-purple-300';
    }
  };

  return (
    <div id="events" className="bg-gradient-to-br from-slate-900 to-purple-900/20 py-12 sm:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">Upcoming Events</h2>
          <p className="text-gray-400 text-base sm:text-lg">Stay updated with our latest sessions and announcements</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, idx) => (
            <div key={idx} className="bg-white/5 backdrop-blur-lg p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all">
              <div className={`inline-block px-3 py-1 rounded-full text-xs sm:text-sm font-semibold mb-4 ${getStatusColor(event.status)}`}>
                {event.type}
              </div>
              <h3 className="text-white font-bold text-lg sm:text-xl mb-2">{event.title}</h3>
              <div className="text-gray-400 text-sm mb-1">{event.date}</div>
              <div className="text-purple-400 font-semibold text-sm sm:text-base mb-3">{event.time}</div>
              <p className="text-gray-400 text-xs sm:text-sm">{event.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold transition-all">
            View All Events
          </button>
        </div>
      </div>
    </div>
  );
};

// Community Links
const CommunityLinks = () => {
  // TODO: Replace with actual community links
  const links = [
    { 
      name: 'Twitter', 
      icon: Twitter, 
      url: 'https://twitter.com/youraccount', 
      color: 'from-blue-500 to-blue-600',
      description: 'Follow us for daily updates'
    },
    { 
      name: 'Telegram', 
      icon: Send, 
      url: 'https://t.me/yourchannel', 
      color: 'from-blue-400 to-blue-500',
      description: 'Join our Telegram community'
    },
    { 
      name: 'WhatsApp', 
      icon: MessageCircle, 
      url: 'https://chat.whatsapp.com/yourlink', 
      color: 'from-green-500 to-green-600',
      description: 'Connect on WhatsApp'
    }
  ];

  return (
    <div id="community" className="bg-slate-900 py-12 sm:py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">Join Our Community</h2>
        <p className="text-gray-400 text-base sm:text-lg mb-8 sm:mb-12">Connect with us across multiple platforms</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {links.map((link, idx) => (
            <a 
              key={idx} 
              href={link.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`bg-gradient-to-br ${link.color} p-6 sm:p-8 rounded-xl hover:scale-105 transition-transform group`}
            >
              <link.icon className="w-10 h-10 sm:w-12 sm:h-12 text-white mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <div className="text-white font-bold text-lg sm:text-xl mb-2">{link.name}</div>
              <div className="text-white/80 text-xs sm:text-sm">{link.description}</div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

// Footer
const Footer = () => (
  <footer className="bg-slate-950 py-6 sm:py-8 px-4 border-t border-purple-500/20">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2">
          <Users className="w-6 h-6 text-purple-400" />
          <span className="text-white font-semibold">The Support System</span>
        </div>
        <p className="text-gray-400 text-sm text-center">&copy; 2025 The Support System. <p>Built with 💜 by Origbge</p></p>
        <div className="flex gap-4">
          <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
            <Twitter className="w-5 h-5" />
          </a>
          <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
            <Send className="w-5 h-5" />
          </a>
          <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
            <MessageCircle className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  </footer>
);

// Main App
const App = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />
      <Hero />
      <LivePrices />
      <Team />
      <Upcoming />
      <CommunityLinks />
      <Footer />
    </div>
  );
};

export default App;