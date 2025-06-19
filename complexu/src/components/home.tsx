import React, { useState } from 'react';

const Homepage: React.FC = () => {
  const [activeView, setActiveView] = useState<'calendar' | 'list'>('list');
  const [activeEventType, setActiveEventType] = useState<string>('all');
  
  const eventTypes = [
    { id: 'all', name: 'All Events' },
    { id: 'football', name: 'Football' },
    { id: 'athletics', name: 'Athletics' },
    { id: 'concerts', name: 'Concerts' },
    { id: 'corporate', name: 'Corporate' },
    { id: 'community', name: 'Community' }
  ];
  
  const upcomingEvents = [
    { 
      id: 1, 
      name: 'Ulinzi FC vs AFC Leopards', 
      date: 'June 10, 2025', 
      time: '3:00 PM', 
      venue: 'Main Pitch', 
      type: 'football',
      color: 'bg-green-100 border-green-500'
    },
    { 
      id: 2, 
      name: 'Nairobi Open Athletics', 
      date: 'June 13, 2025', 
      time: '8:00 AM', 
      venue: 'Track', 
      type: 'athletics',
      color: 'bg-blue-100 border-blue-500'
    },
    { 
      id: 3, 
      name: 'Gospel Explosion Concert', 
      date: 'June 15, 2025', 
      time: '6:00 PM', 
      venue: 'Indoor Arena', 
      type: 'concerts',
      color: 'bg-purple-100 border-purple-500'
    },
    { 
      id: 4, 
      name: 'Corporate Leadership Summit', 
      date: 'June 18, 2025', 
      time: '9:00 AM', 
      venue: 'Conference Center', 
      type: 'corporate',
      color: 'bg-gray-100 border-gray-500'
    },
    { 
      id: 5, 
      name: 'Community Health Fair', 
      date: 'June 20, 2025', 
      time: '10:00 AM', 
      venue: 'Exhibition Hall', 
      type: 'community',
      color: 'bg-yellow-100 border-yellow-500'
    },
    { 
      id: 6, 
      name: 'Ulinzi FC vs Gor Mahia', 
      date: 'June 22, 2025', 
      time: '3:30 PM', 
      venue: 'Main Pitch', 
      type: 'football',
      color: 'bg-green-100 border-green-500'
    }
  ];
  
  const filteredEvents = activeEventType === 'all' 
    ? upcomingEvents 
    : upcomingEvents.filter(event => event.type === activeEventType);
  
  const news = [
    {
      id: 1,
      title: 'Ulinzi Sports Complex to Host International Athletics Championship',
      excerpt: 'The prestigious event will bring together athletes from over 20 countries competing in various track and field disciplines.',
      date: 'June 5, 2025',
      category: 'Athletics',
      image: 'https://readdy.ai/api/search-image?query=modern%20athletics%20stadium%20with%20track%20and%20field%20athletes%20competing%20in%20a%20professional%20championship%20event%2C%20bright%20sunny%20day%2C%20clear%20blue%20sky%2C%20spectators%20in%20the%20background%2C%20professional%20sports%20photography%20style&width=600&height=400&seq=news1&orientation=landscape'
    },
    {
      id: 2,
      title: 'New State-of-the-Art Training Facilities Unveiled',
      excerpt: 'The complex now features cutting-edge equipment and specialized training areas for elite athletes.',
      date: 'June 3, 2025',
      category: 'Facilities',
      image: 'https://readdy.ai/api/search-image?query=modern%20sports%20training%20facility%20with%20high-tech%20equipment%2C%20athletes%20training%2C%20clean%20modern%20design%2C%20bright%20lighting%2C%20professional%20gym%20environment%2C%20wide%20angle%20view%20of%20spacious%20interior&width=600&height=400&seq=news2&orientation=landscape'
    },
    {
      id: 3,
      title: 'Ticket Sales for Summer Concert Series Now Open',
      excerpt: 'Secure your spot for the hottest musical performances coming to Ulinzi Sports Complex this summer.',
      date: 'June 1, 2025',
      category: 'Events',
      image: 'https://readdy.ai/api/search-image?query=outdoor%20concert%20venue%20at%20sunset%20with%20stage%20lights%2C%20crowd%20of%20excited%20fans%2C%20professional%20concert%20photography%2C%20vibrant%20atmosphere%2C%20music%20festival%20setting%20in%20a%20sports%20stadium&width=600&height=400&seq=news3&orientation=landscape'
    }
  ];
  
  const facilities = [
    {
      id: 1,
      name: 'Main Pitch',
      description: 'FIFA standard football field with seating for 35,000 spectators',
      image: 'https://readdy.ai/api/search-image?query=modern%20football%20stadium%20with%20green%20pitch%2C%20professional%20lighting%2C%20packed%20stands%20with%20spectators%2C%20clear%20blue%20sky%2C%20aerial%20view%20of%20the%20entire%20stadium%20complex%20with%20perfect%20grass&width=400&height=300&seq=facility1&orientation=landscape'
    },
    {
      id: 2,
      name: 'Athletics Track',
      description: 'IAAF certified 400m track with 8 lanes and field event areas',
      image: 'https://readdy.ai/api/search-image?query=professional%20running%20track%20with%20red%20surface%2C%20white%20lane%20markings%2C%20field%20event%20areas%2C%20stadium%20seating%2C%20perfect%20condition%2C%20sunny%20day%2C%20empty%20track%20ready%20for%20competition&width=400&height=300&seq=facility2&orientation=landscape'
    },
    {
      id: 3,
      name: 'Indoor Arena',
      description: 'Multi-purpose indoor venue with 10,000 seating capacity',
      image: 'https://readdy.ai/api/search-image?query=modern%20indoor%20sports%20arena%20with%20high%20ceiling%2C%20professional%20lighting%2C%20tiered%20seating%2C%20polished%20wooden%20floor%2C%20basketball%20court%20markings%2C%20wide%20angle%20view%20showing%20the%20entire%20arena%20space&width=400&height=300&seq=facility3&orientation=landscape'
    },
    {
      id: 4,
      name: 'Conference Center',
      description: 'Versatile spaces for meetings, presentations and corporate events',
      image: 'https://readdy.ai/api/search-image?query=elegant%20conference%20center%20with%20modern%20furnishings%2C%20presentation%20screens%2C%20comfortable%20seating%2C%20professional%20lighting%2C%20business%20setting%2C%20clean%20and%20sophisticated%20design&width=400&height=300&seq=facility4&orientation=landscape'
    }
  ];
  
  const liveEvents = [
    {
      id: 1,
      name: 'Kenya Premier League: Ulinzi Stars vs Tusker FC',
      status: 'LIVE',
      score: '2 - 1',
      time: '65:12',
      venue: 'Main Pitch',
      image: 'https://readdy.ai/api/search-image?query=live%20football%20match%20in%20progress%2C%20players%20on%20green%20pitch%2C%20stadium%20lights%2C%20excited%20crowd%2C%20professional%20sports%20photography%2C%20dynamic%20action%20shot%20of%20football%20game&width=500&height=300&seq=live1&orientation=landscape'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Notification Banner */}
      <div className="bg-blue-600 text-white px-4 py-2 text-center text-sm">
        <p>COVID-19 Safety Protocols in Effect — Face Masks Required for All Indoor Events</p>
      </div>
      
      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <span className="text-2xl font-bold text-blue-800">Ulinzi Sports Complex</span>
              </div>
              <div className="hidden md:ml-6 md:flex md:space-x-8">
                <a href="#" className="border-b-2 border-blue-500 text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium">
                  Home
                </a>
                <a href="#" className="border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 text-sm font-medium">
                  Events
                </a>
                <a href="#" className="border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 text-sm font-medium">
                  Tickets
                </a>
                <a href="#" className="border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 text-sm font-medium">
                  Facilities
                </a>
                <a href="#" className="border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 text-sm font-medium">
                  News
                </a>
                <a href="#" className="border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 text-sm font-medium">
                  Fan Zone
                </a>
                <a href="#" className="border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 text-sm font-medium">
                  Booking
                </a>
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <button type="button" className="relative inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-button text-white bg-blue-600 shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 whitespace-nowrap cursor-pointer">
                  <i className="fas fa-user-circle mr-2"></i>
                  <span>Sign In</span>
                </button>
              </div>
              <div className="hidden md:ml-4 md:flex-shrink-0 md:flex md:items-center">
                <button className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 cursor-pointer">
                  <span className="sr-only">Search</span>
                  <i className="fas fa-search text-xl"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Mobile menu, show/hide based on menu state */}
        <div className="md:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <a href="#" className="bg-blue-50 border-l-4 border-blue-500 text-blue-700 block pl-3 pr-4 py-2 text-base font-medium">
              Home
            </a>
            <a href="#" className="border-l-4 border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 text-base font-medium">
              Events
            </a>
            <a href="#" className="border-l-4 border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 text-base font-medium">
              Tickets
            </a>
            <a href="#" className="border-l-4 border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 text-base font-medium">
              Facilities
            </a>
            <a href="#" className="border-l-4 border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 text-base font-medium">
              News
            </a>
            <a href="#" className="border-l-4 border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 text-base font-medium">
              Fan Zone
            </a>
            <a href="#" className="border-l-4 border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 text-base font-medium">
              Booking
            </a>
          </div>
        </div>
      </nav>
      
      {/* Hero Section */}
      <div className="relative bg-blue-800 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            className="w-full h-full object-cover object-top" 
            src="https://readdy.ai/api/search-image?query=modern%20sports%20stadium%20at%20sunset%20with%20dramatic%20lighting%2C%20football%20pitch%20visible%2C%20spectators%20in%20stands%2C%20professional%20sports%20venue%20with%20mountains%20in%20background%2C%20cinematic%20wide%20angle%20shot%20with%20perfect%20lighting&width=1440&height=600&seq=hero&orientation=landscape" 
            alt="Ulinzi Sports Complex" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-transparent opacity-90"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <div className="md:w-1/2">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Experience World-Class Events
            </h1>
            <p className="mt-6 text-xl text-blue-100 max-w-3xl">
              Ulinzi Sports Complex hosts premier sporting competitions, concerts, and community events in a state-of-the-art facility.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-button text-blue-700 bg-white hover:bg-blue-50 whitespace-nowrap cursor-pointer">
                View Events
              </a>
              <a href="#" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-button text-white bg-blue-600 hover:bg-blue-700 whitespace-nowrap cursor-pointer">
                Book Tickets
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Quick Links */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6">
            <a href="#" className="group flex flex-col items-center p-4 rounded-lg hover:bg-blue-50 transition-colors duration-200 cursor-pointer">
              <div className="bg-blue-100 p-3 rounded-full">
                <i className="fas fa-calendar-alt text-blue-600 text-2xl"></i>
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Events</h3>
              <p className="mt-1 text-sm text-gray-500 text-center">Browse upcoming events</p>
            </a>
            <a href="#" className="group flex flex-col items-center p-4 rounded-lg hover:bg-blue-50 transition-colors duration-200 cursor-pointer">
              <div className="bg-blue-100 p-3 rounded-full">
                <i className="fas fa-ticket-alt text-blue-600 text-2xl"></i>
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Tickets</h3>
              <p className="mt-1 text-sm text-gray-500 text-center">Purchase event tickets</p>
            </a>
            <a href="#" className="group flex flex-col items-center p-4 rounded-lg hover:bg-blue-50 transition-colors duration-200 cursor-pointer">
              <div className="bg-blue-100 p-3 rounded-full">
                <i className="fas fa-map-marker-alt text-blue-600 text-2xl"></i>
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Facilities</h3>
              <p className="mt-1 text-sm text-gray-500 text-center">Explore our venues</p>
            </a>
            <a href="#" className="group flex flex-col items-center p-4 rounded-lg hover:bg-blue-50 transition-colors duration-200 cursor-pointer">
              <div className="bg-blue-100 p-3 rounded-full">
                <i className="fas fa-phone-alt text-blue-600 text-2xl"></i>
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Contact</h3>
              <p className="mt-1 text-sm text-gray-500 text-center">Get in touch with us</p>
            </a>
          </div>
        </div>
      </div>
      
      {/* Live Events Section */}
      {liveEvents.length > 0 && (
        <div className="bg-red-50 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center mb-6">
              <div className="flex-shrink-0 h-4 w-4 rounded-full bg-red-600 animate-pulse"></div>
              <h2 className="ml-2 text-2xl font-bold text-gray-900">LIVE NOW</h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {liveEvents.map(event => (
                <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="relative">
                    <img className="h-48 w-full object-cover object-top" src={event.image} alt={event.name} />
                    <div className="absolute top-0 left-0 bg-red-600 text-white px-3 py-1 font-bold">
                      LIVE
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-gray-900">{event.name}</h3>
                    <p className="text-gray-600">{event.venue}</p>
                    
                    <div className="mt-4 flex justify-between items-center">
                      <div className="text-3xl font-bold text-gray-900">{event.score}</div>
                      <div className="bg-gray-100 px-3 py-1 rounded-full text-gray-800">{event.time}</div>
                    </div>
                    
                    <div className="mt-4">
                      <button className="w-full bg-red-600 text-white py-2 px-4 rounded-button hover:bg-red-700 transition-colors duration-200 whitespace-nowrap cursor-pointer">
                        Watch Live Stream
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden lg:col-span-2">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Upcoming Live Events</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center p-3 border-l-4 border-blue-500 bg-blue-50 rounded-r-lg">
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900">Athletics: Nairobi Open</h4>
                        <p className="text-sm text-gray-600">June 13, 8:00 AM • Track</p>
                      </div>
                      <div className="text-sm text-gray-500">
                        Starts in 3 days
                      </div>
                    </div>
                    
                    <div className="flex items-center p-3 border-l-4 border-purple-500 bg-purple-50 rounded-r-lg">
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900">Gospel Explosion Concert</h4>
                        <p className="text-sm text-gray-600">June 15, 6:00 PM • Indoor Arena</p>
                      </div>
                      <div className="text-sm text-gray-500">
                        Starts in 5 days
                      </div>
                    </div>
                    
                    <div className="flex items-center p-3 border-l-4 border-green-500 bg-green-50 rounded-r-lg">
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900">Football: Ulinzi FC vs Gor Mahia</h4>
                        <p className="text-sm text-gray-600">June 22, 3:30 PM • Main Pitch</p>
                      </div>
                      <div className="text-sm text-gray-500">
                        Starts in 12 days
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <button className="text-blue-600 hover:text-blue-800 font-medium flex items-center cursor-pointer">
                      View all upcoming events
                      <i className="fas fa-arrow-right ml-2"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Event Schedule Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Event Schedule
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Plan your visit to Ulinzi Sports Complex with our comprehensive event calendar.
            </p>
          </div>
          
          <div className="mt-10">
            <div className="flex flex-col md:flex-row justify-between items-center mb-6 space-y-4 md:space-y-0">
              <div className="flex items-center space-x-4">
                <button 
                  onClick={() => setActiveView('list')}
                  className={`px-4 py-2 rounded-button font-medium ${activeView === 'list' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'} whitespace-nowrap cursor-pointer`}
                >
                  <i className="fas fa-list mr-2"></i>
                  List View
                </button>
                <button 
                  onClick={() => setActiveView('calendar')}
                  className={`px-4 py-2 rounded-button font-medium ${activeView === 'calendar' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'} whitespace-nowrap cursor-pointer`}
                >
                  <i className="fas fa-calendar-alt mr-2"></i>
                  Calendar View
                </button>
              </div>
              
              <div className="flex flex-wrap items-center gap-2">
                {eventTypes.map(type => (
                  <button 
                    key={type.id}
                    onClick={() => setActiveEventType(type.id)}
                    className={`px-3 py-1 rounded-full text-sm font-medium ${activeEventType === type.id ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'} whitespace-nowrap cursor-pointer`}
                  >
                    {type.name}
                  </button>
                ))}
              </div>
            </div>
            
            {activeView === 'list' ? (
              <div className="bg-white shadow overflow-hidden sm:rounded-md">
                <ul className="divide-y divide-gray-200">
                  {filteredEvents.map(event => (
                    <li key={event.id}>
                      <div className={`block hover:bg-gray-50 transition-colors duration-200 border-l-4 ${event.color.split(' ')[1]}`}>
                        <div className="px-4 py-4 sm:px-6">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <div className={`flex-shrink-0 h-10 w-10 rounded-full ${event.color.split(' ')[0]} flex items-center justify-center`}>
                                {event.type === 'football' && <i className="fas fa-futbol text-green-600"></i>}
                                {event.type === 'athletics' && <i className="fas fa-running text-blue-600"></i>}
                                {event.type === 'concerts' && <i className="fas fa-music text-purple-600"></i>}
                                {event.type === 'corporate' && <i className="fas fa-briefcase text-gray-600"></i>}
                                {event.type === 'community' && <i className="fas fa-users text-yellow-600"></i>}
                              </div>
                              <div className="ml-4">
                                <div className="text-sm font-medium text-blue-600">{event.name}</div>
                                <div className="text-sm text-gray-500">
                                  {event.date} • {event.time} • {event.venue}
                                </div>
                              </div>
                            </div>
                            <div className="flex space-x-2">
                              <button className="inline-flex items-center px-3 py-1 border border-transparent text-xs font-medium rounded-button text-blue-700 bg-blue-100 hover:bg-blue-200 whitespace-nowrap cursor-pointer">
                                <i className="fas fa-ticket-alt mr-1"></i>
                                Tickets
                              </button>
                              <button className="inline-flex items-center px-3 py-1 border border-transparent text-xs font-medium rounded-button text-gray-700 bg-gray-100 hover:bg-gray-200 whitespace-nowrap cursor-pointer">
                                <i className="fas fa-calendar-plus mr-1"></i>
                                Add
                              </button>
                              <button className="inline-flex items-center px-3 py-1 border border-transparent text-xs font-medium rounded-button text-gray-700 bg-gray-100 hover:bg-gray-200 whitespace-nowrap cursor-pointer">
                                <i className="fas fa-share-alt mr-1"></i>
                                Share
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <div className="bg-white shadow rounded-lg p-6">
                <div className="text-center text-gray-500 py-12">
                  <i className="fas fa-calendar-alt text-5xl mb-4 text-blue-300"></i>
                  <p className="text-lg">Calendar view is coming soon.</p>
                  <p>We're working on an interactive calendar to help you plan your visits.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Facilities Section */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Facilities
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Explore our world-class venues and amenities designed for athletes and spectators alike.
            </p>
          </div>
          
          <div className="mt-10">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {facilities.map(facility => (
                <div key={facility.id} className="bg-white overflow-hidden shadow rounded-lg cursor-pointer transform transition duration-300 hover:scale-105">
                  <div className="h-48 w-full overflow-hidden">
                    <img className="w-full h-full object-cover object-top" src={facility.image} alt={facility.name} />
                  </div>
                  <div className="px-4 py-5 sm:p-6">
                    <h3 className="text-lg font-medium text-gray-900">{facility.name}</h3>
                    <p className="mt-1 text-sm text-gray-500">{facility.description}</p>
                    <div className="mt-4">
                      <button className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-button text-blue-700 bg-blue-100 hover:bg-blue-200 whitespace-nowrap cursor-pointer">
                        <i className="fas fa-info-circle mr-2"></i>
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-10 text-center">
              <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-button text-white bg-blue-600 hover:bg-blue-700 whitespace-nowrap cursor-pointer">
                <i className="fas fa-map-marked-alt mr-2"></i>
                View Interactive Map
              </button>
              <button className="ml-4 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-button text-blue-700 bg-white shadow-sm hover:bg-blue-50 whitespace-nowrap cursor-pointer">
                <i className="fas fa-vr-cardboard mr-2"></i>
                Take Virtual Tour
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* News Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Latest News
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Stay updated with the latest happenings at Ulinzi Sports Complex.
            </p>
          </div>
          
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {news.map(item => (
              <div key={item.id} className="flex flex-col rounded-lg shadow-lg overflow-hidden cursor-pointer">
                <div className="flex-shrink-0">
                  <img className="h-48 w-full object-cover object-top" src={item.image} alt={item.title} />
                </div>
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-blue-600">
                      {item.category}
                    </p>
                    <a href="#" className="block mt-2">
                      <p className="text-xl font-semibold text-gray-900">{item.title}</p>
                      <p className="mt-3 text-base text-gray-500">{item.excerpt}</p>
                    </a>
                  </div>
                  <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                      <span className="sr-only">Ulinzi Sports Complex</span>
                      <i className="fas fa-newspaper text-blue-600 text-lg"></i>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">
                        Press Release
                      </p>
                      <div className="flex space-x-1 text-sm text-gray-500">
                        <time dateTime="2020-03-16">{item.date}</time>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <a href="#" className="inline-flex items-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-button text-gray-700 bg-white hover:bg-gray-50 whitespace-nowrap cursor-pointer">
              View All News
              <i className="fas fa-arrow-right ml-2"></i>
            </a>
          </div>
        </div>
      </div>
      
      {/* Call to Action */}
      <div className="bg-blue-700">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to experience Ulinzi?</span>
            <span className="block text-blue-200">Book your tickets today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-button shadow">
              <a href="#" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-button text-blue-600 bg-white hover:bg-blue-50 whitespace-nowrap cursor-pointer">
                Book Now
              </a>
            </div>
            <div className="ml-3 inline-flex rounded-button shadow">
              <a href="#" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-button text-white bg-blue-600 hover:bg-blue-500 whitespace-nowrap cursor-pointer">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-gray-800">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
            <div className="col-span-2">
              <h3 className="text-2xl font-bold text-white">Ulinzi Sports Complex</h3>
              <p className="mt-4 text-base text-gray-300">
                A world-class sports and entertainment venue dedicated to excellence and community engagement.
              </p>
              <div className="mt-8 flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-white cursor-pointer">
                  <i className="fab fa-facebook-f text-xl"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white cursor-pointer">
                  <i className="fab fa-twitter text-xl"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white cursor-pointer">
                  <i className="fab fa-instagram text-xl"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white cursor-pointer">
                  <i className="fab fa-youtube text-xl"></i>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                Quick Links
              </h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a href="#" className="text-base text-gray-300 hover:text-white cursor-pointer">
                    Events
                  </a>
                </li>
                <li>
                  <a href="#" className="text-base text-gray-300 hover:text-white cursor-pointer">
                    Tickets
                  </a>
                </li>
                <li>
                  <a href="#" className="text-base text-gray-300 hover:text-white cursor-pointer">
                    Facilities
                  </a>
                </li>
                <li>
                  <a href="#" className="text-base text-gray-300 hover:text-white cursor-pointer">
                    News
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                Support
              </h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a href="#" className="text-base text-gray-300 hover:text-white cursor-pointer">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-base text-gray-300 hover:text-white cursor-pointer">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#" className="text-base text-gray-300 hover:text-white cursor-pointer">
                    Accessibility
                  </a>
                </li>
                <li>
                  <a href="#" className="text-base text-gray-300 hover:text-white cursor-pointer">
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                Contact
              </h3>
              <ul className="mt-4 space-y-4">
                <li className="flex">
                  <i className="fas fa-map-marker-alt text-gray-400 mt-1 mr-2"></i>
                  <span className="text-base text-gray-300">
                    123 Stadium Road<br />
                    Nairobi, Kenya
                  </span>
                </li>
                <li className="flex">
                  <i className="fas fa-phone-alt text-gray-400 mt-1 mr-2"></i>
                  <span className="text-base text-gray-300">
                    +254 123 456 789
                  </span>
                </li>
                <li className="flex">
                  <i className="fas fa-envelope text-gray-400 mt-1 mr-2"></i>
                  <span className="text-base text-gray-300">
                    info@ulinzisports.co.ke
                  </span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 border-t border-gray-700 pt-8">
            <p className="text-base text-gray-400 text-center">
              &copy; 2025 Ulinzi Sports Complex. All rights reserved.
            </p>
            <div className="mt-4 flex justify-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-gray-300 cursor-pointer">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-300 cursor-pointer">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-300 cursor-pointer">
                Cookie Policy
              </a>
            </div>
            <div className="mt-8 flex justify-center space-x-6">
              <i className="fab fa-cc-visa text-gray-400 text-2xl"></i>
              <i className="fab fa-cc-mastercard text-gray-400 text-2xl"></i>
              <i className="fab fa-cc-paypal text-gray-400 text-2xl"></i>
              <i className="fab fa-cc-apple-pay text-gray-400 text-2xl"></i>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;
