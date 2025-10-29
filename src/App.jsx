import React, { useState, useEffect } from 'react';
import { Send, MessageCircle, TrendingUp, Users, Calendar, Code, Rocket, Menu, X } from 'lucide-react';
import TweetEmbed from './TweetEmbed';
const founderTweets = [
  '1932117453959578011', 
  '1983428614419845475', 
  '1983398389221077213',
];

// Custom X (Twitter) Icon Component
const XIcon = ({ className }) => (
  <svg 
    viewBox="0 0 24 24" 
    className={className}
    fill="currentColor"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);


// Navigation Component
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // New function to handle link clicks and close the menu
  const handleNavLinkClick = () => {
    // This sets the state back to false, which closes the dropdown
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-lg border-b border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img 
              src={`${import.meta.env.BASE_URL}images/logo.png`}
              className="w-8 h-8 text-purple-400"
              alt="The Support System Logo"
            />
            <span className="ml-2 text-white font-bold text-xl">The Support System</span>
          </div>
          
          {/* Desktop Links (No change needed here) */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#home" className="text-gray-300 hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium">Home</a>
              <a href="#team" className="text-gray-300 hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium">Team</a>
              <a href="#events" className="text-gray-300 hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium">Events</a>
              <a href="#community" className="text-gray-300 hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium">Community</a>
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-gray-400 hover:text-white"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu Content */}
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800">
            {/* 💡 FIX APPLIED HERE: Added onClick={handleNavLinkClick} to all mobile links */}
            <a href="#home" onClick={handleNavLinkClick} className="text-gray-300 hover:text-purple-400 block px-3 py-2 rounded-md text-base font-medium">Home</a>
            <a href="#team" onClick={handleNavLinkClick} className="text-gray-300 hover:text-purple-400 block px-3 py-2 rounded-md text-base font-medium">Team</a>
            <a href="#events" onClick={handleNavLinkClick} className="text-gray-300 hover:text-purple-400 block px-3 py-2 rounded-md text-base font-medium">Events</a>
            <a href="#community" onClick={handleNavLinkClick} className="text-gray-300 hover:text-purple-400 block px-3 py-2 rounded-md text-base font-medium">Community</a>
            {/* <a href="/admin" onClick={handleNavLinkClick} className="text-purple-400 hover:text-purple-300 block px-3 py-2 rounded-md text-base font-medium">Admin</a> */}
          </div>
        </div>
      )}
    </nav>
  );
};

// Hero Section
// Ensure you import any components you use (like Rocket, Calendar, Code, TrendingUp)
// Assuming these are simple icons:




// Hero Component (FINAL with Flip & Fade-In)


const Hero = () => (
  <div id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden pt-16">
    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,...')] opacity-20"></div>
    
    <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
      
      {/* 🔄 3D FLIP LOGO (Animates on its own) */}
      <div className="flip-container mb-8 w-32 h-32 md:w-40 md:h-40 mx-auto initial-hidden animate-fade-left" style={{ animationDelay: '0s' }}>
        <div className="flipper">
          <div className="front">
            <img 
              src={`${import.meta.env.BASE_URL}images/logo.png`}
              alt="The Support System Logo" 
              className="w-full h-full object-contain rounded-full drop-shadow-2xl" 
              // onError logic omitted for brevity
            />
          </div>
          <div className="back bg-purple-600 rounded-full flex flex-col justify-center items-center p-2 text-white shadow-2xl">
             <span className="text-xl md:text-2xl font-extrabold leading-none mb-1">JOIN NOW</span>
             <span className="text-xs md:text-sm font-medium">10K+ Builders</span>
          </div>
        </div>
      </div>
      
      {/* 📝 HEADING (Fades in from the LEFT) */}
      <h1 
        className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 leading-tight initial-hidden animate-fade-left"
        style={{ animationDelay: '0.2s' }}
      >
        The <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Support System</span>
      </h1>
      
      {/* 📝 PARAGRAPH (Fades in from the RIGHT) */}
      <p 
        className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto initial-hidden animate-fade-right"
        style={{ animationDelay: '0.4s' }}
      >
        A Web3 Creators & Builders Hub where you grow, monetize, and get visibility with jobs, tools, and collaborations
      </p>
      
      {/* 🚀 BUTTONS (Fades in from the LEFT) */}
      <div 
        className="flex flex-wrap gap-4 justify-center mb-12 initial-hidden animate-fade-left"
        style={{ animationDelay: '0.6s' }}
      >
        <button className="px-6 sm:px-8 py-3 sm:py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold transition-all transform hover:scale-105 flex items-center gap-2 text-sm sm:text-base">
          <Rocket className="w-5 h-5" />
          <a href="https://x.com/SSWEB5"> Join Community</a>
        </button>
      </div>
      
      {/* 📊 FEATURE CARDS CONTAINER (Fades in from the RIGHT) */}
      <div 
        className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-16 mb-8 initial-hidden animate-fade-right"
        style={{ animationDelay: '0.8s' }}
      >
        <div className="bg-white/5 backdrop-blur-lg p-4 sm:p-6 rounded-xl border border-purple-500/20">
          <Calendar className="w-6 sm:w-8 h-6 sm:h-8 text-purple-400 mb-3" />
          <h3 className="text-white font-semibold text-base sm:text-lg mb-2">Daily Spaces</h3>
          <p className="text-gray-400 text-sm sm:text-base">7AM - 11AM daily sessions for growth and support</p>
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

    // Initial fetch and set interval
    fetchPrices();
    const interval = setInterval(fetchPrices, 60000); // Updates every 60s
    return () => clearInterval(interval);
  }, []);
  
  // Array duplication for seamless marquee loop
  const marqueeData = [...prices, ...prices];

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
          /* Marquee Container (Hides Overflow) */
          <div className="marquee-container w-full overflow-hidden">
            
            {/* Marquee Inner Wrapper (Applies Animation) */}
            <div className="marquee flex gap-3 sm:gap-6 pb-2">
              
              {/* RENDER DATA TWICE FOR SEAMLESS LOOP */}
              {marqueeData.map((coin, index) => (
                <div 
                  // Use index for key since we duplicated the array
                  key={`${coin.symbol}-${index}`} 
                  className="flex-shrink-0 bg-white/5 backdrop-blur-lg px-4 sm:px-6 py-3 rounded-lg border border-purple-500/20 min-w-[140px] sm:min-w-[160px]"
                >
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
  const baseUrl = import.meta.env.BASE_URL || '/';
  
  const teamMembers = [
    {
      role: 'Founder',
      name: 'Teaona',
      twitter: '@TeaonaX',
      image: `${baseUrl}images/team/founder.jpg`,
      bio: 'Building the future of Web3 communities'
    },
    {
      role: 'Community Lead',
      name: 'Ajah',
      twitter: '@ajah_elube',
      image: `${baseUrl}images/team/lead.jpg`,
      bio: 'Empowering creators and builders'
    },
    {
      role: 'Community Manager',
      name: 'Fantasy B',
      twitter: '@Fan_Tasy0',
      image: `${baseUrl}images/team/moderator.jpg`,
      bio: 'Keeping the community thriving'
    },
    // {
    //   role: 'WhatsApp Admin',
    //   name: 'Admin Name',
    //   twitter: '@admin',
    //   image: `${baseUrl}images/team/admin.jpg`,
    //   bio: 'Supporting growth daily'
    // }
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
            <div key={idx} className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-lg p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all hover:scale-105">
              
              <div className="mb-4 mx-auto w-24 h-24 rounded-full overflow-hidden border-4 border-purple-500/30 bg-gradient-to-br from-purple-900/40 to-blue-900/40 flex items-center justify-center">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    console.error('Image failed to load:', member.image);
                    e.target.style.display = 'none';
                    const parent = e.target.parentElement;
                    parent.innerHTML = '<div class="text-4xl">👤</div>';
                  }}
                />
              </div>

              <div className="text-purple-400 text-xs sm:text-sm font-semibold mb-1">{member.role}</div>
              <h3 className="text-white font-bold text-lg sm:text-xl mb-2">{member.name}</h3>
              <p className="text-gray-400 text-xs sm:text-sm mb-3">{member.bio}</p>
              <a 
                href={`https://x.com/${member.twitter.replace('@', '')}`}
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-400 hover:text-blue-300 flex items-center gap-2 text-xs sm:text-sm transition-colors"
              >
                <XIcon className="w-4 h-4" />
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
  const events = [
    {
      title: 'Daily Growth Space',
      date: 'Every Day',
      time: '7:00 AM - 11:00 AM',
      type: 'X Space',
      description: 'Join our daily community space for networking, learning, and growth opportunities',
      status: 'recurring'
    },
    {
      title: 'Web3 Branding',
      date: 'Coming Soon',
      time: 'TBA',
      type: 'Class',
      description: 'Learn smart contract development and blockchain fundamentals from industry experts',
      status: 'upcoming'
    },
    {
      title: 'Shill Yourself Friday',
      date: 'Every Friday',
      time: '7:00 AM WAT',
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


function App() { // <--- KEEP ONLY THIS MAIN DEFINITION
  return (
    // Change the main wrapper class to what you had in the deleted block
    <div className="min-h-screen bg-slate-900"> 
      
      {/* 1. Components from the deleted block */}
      <Navbar />
      <Hero />
      <LivePrices />
      <Team />
      <Upcoming /> {/* Your existing Events section */}

     {/* --- WHAT'S HAPPENING SECTION START (Your New Section) --- */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 text-center">
          🗣️ What's Happening in Our Community
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {founderTweets.map((id) => ( 
            <div 
              key={id} 
              // 4. ✅ FIX: Removed all custom styling (bg-white, shadow, border) 
              // to rely on the tweet content size and remove the white edges.
              className="p-3" 
            >
              <TweetEmbed tweetId={id} /> 
            </div>
          ))}
        </div>
      </section>
      {/* --- WHAT'S HAPPENING SECTION END --- */}
      {/* 2. Remaining components from the deleted block */}
      <CommunityLinks />
      <Footer />
      
    </div>
  );
}

// Community Links
const CommunityLinks = () => {
  const links = [
    { 
      name: 'X (Twitter)', 
      icon: XIcon, 
      url: 'https://x.com/SSWEB5', 
      color: 'from-slate-700 to-black',
      description: 'Follow us for daily updates'
    },
    { 
      name: 'Telegram', 
      icon: Send, 
      url: 'https://t.me/TheSupportSystem01', 
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
          <img   src={`${import.meta.env.BASE_URL}images/logo.png`}
            className="w-8 h-8 text-purple-400"/>
          {/* <Users className="w-6 h-6 text-purple-400" /> */}
          <span className="text-white font-semibold">The Support System</span>
        </div>
        <p className="text-gray-400 text-sm text-center">&copy; 2025 The Support System.</p> <p>Built with 💜 by Origboge</p>
        <div className="flex gap-4">
          <a href="https://x.com/SSWEB5" className="text-gray-400 hover:text-white transition-colors">
            <XIcon className="w-5 h-5" />
          </a>
          <a href="https://t.me/TheSupportSystem01" className="text-gray-400 hover:text-purple-400 transition-colors">
            <Send className="w-5 h-5" />
          </a>
          <a href="https://chat.whatsapp.com/yourlink" className="text-gray-400 hover:text-purple-400 transition-colors">
            <MessageCircle className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  </footer>
);

// Main App

    <div className="min-h-screen bg-slate-900">
      <Navbar />
      <Hero />
      <LivePrices />
      <Team />
      <Upcoming />
      <CommunityLinks />
      <Footer />
    </div>


export default App;