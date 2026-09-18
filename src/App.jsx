import React, { useState } from 'react';
import { Camera, Image as ImageIcon, Video, Home, User, Plus, Settings, X, ChevronRight, Clapperboard, Sparkles, FolderKanban } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [generationType, setGenerationType] = useState('video');
  const [prompt, setPrompt] = useState('');
  
  const [projects, setProjects] = useState([
    { id: 1, title: "Neon Cyber Runner", type: "Video", url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=400&auto=format&fit=crop" },
    { id: 2, title: "Abstract Fluid Art", type: "Image", url: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=400&auto=format&fit=crop" },
    { id: 3, title: "Cinematic Drone Shot", type: "Video", url: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?q=80&w=400&auto=format&fit=crop" },
    { id: 4, title: "Ethereal Portrait", type: "Image", url: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?q=80&w=400&auto=format&fit=crop" }
  ]);

  const handleOpenCreate = (type) => {
    setGenerationType(type);
    setIsCreateOpen(true);
  };

  const handleSubmitGeneration = () => {
    if (!prompt.trim()) {
      alert('Please enter a description for your generation prompt.');
      return;
    }
    setIsCreateOpen(false);
    setProjects([
      {
        id: Date.now(),
        title: prompt.slice(0, 22) + '...',
        type: generationType === 'video' ? 'Video' : 'Image',
        url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=400&auto=format&fit=crop'
      },
      ...projects
    ]);
    setPrompt('');
    alert('Generation workflow successfully dispatched to Google Veo / Gemini API!');
  };

  return (
    <div className="flex justify-center items-center h-screen overflow-hidden bg-gray-300">
      <div className="w-full h-full sm:max-w-[430px] sm:h-[884px] sm:rounded-[48px] sm:border-[10px] sm:border-black sm:shadow-2xl flex flex-col relative bg-[#F2F2F7] overflow-hidden">
        
        {/* Top Header */}
        <header className="ios-glass border-b border-gray-200/60 px-5 py-3 flex items-center justify-between z-40 shrink-0 sticky top-0">
          <div>
            <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">Google Labs</span>
            <h1 className="text-2xl font-bold tracking-tight text-gray-900">Flow</h1>
          </div>
          <div className="flex items-center space-x-3">
            <button onClick={() => setIsSettingsOpen(true)} className="w-9 h-9 rounded-full bg-gray-200/70 flex items-center justify-center hover:bg-gray-300 transition">
              <Settings className="w-5 h-5 text-gray-700" />
            </button>
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-sm shadow-md">
              AI
            </div>
          </div>
        </header>

        {/* Scrollable Viewport */}
        <main className="flex-1 overflow-y-auto no-scrollbar px-4 pt-4 pb-32 space-y-6">
          {activeTab === 'home' ? (
            <>
              {/* Hero Card */}
              <div className="bg-gradient-to-br from-[#007AFF] to-[#5856D6] text-white rounded-[32px] p-6 shadow-xl shadow-blue-500/20 relative overflow-hidden">
                <span className="bg-white/20 text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider backdrop-blur-md">Veo & Gemini Omni</span>
                <h2 className="text-2xl font-bold mt-3 tracking-tight">Cinematic Studio</h2>
                <p className="text-blue-100 text-xs mt-1 leading-relaxed">Turn cinematic descriptions and live camera context into high-fidelity AI clips instantly.</p>
                <div className="mt-5 flex items-center space-x-3">
                  <button onClick={() => handleOpenCreate('video')} className="bg-white text-[#007AFF] px-4 py-2.5 rounded-2xl font-semibold text-xs shadow-sm flex items-center space-x-1.5 hover:bg-blue-50 transition">
                    <Video className="w-4 h-4" />
                    <span>New Video</span>
                  </button>
                  <button onClick={() => handleOpenCreate('image')} className="bg-white/20 backdrop-blur-md text-white border border-white/30 px-4 py-2.5 rounded-2xl font-semibold text-xs flex items-center space-x-1.5 hover:bg-white/30 transition">
                    <ImageIcon className="w-4 h-4" />
                    <span>Generate Image</span>
                  </button>
                </div>
              </div>

              {/* Shortcuts */}
              <div className="grid grid-cols-2 gap-3.5">
                <div onClick={() => handleOpenCreate('video')} className="bg-white p-4 rounded-[24px] shadow-sm hover:scale-[0.98] transition cursor-pointer border border-gray-100 flex flex-col justify-between">
                  <div className="w-10 h-10 rounded-2xl bg-blue-50 flex items-center justify-center text-[#007AFF] mb-3">
                    <Clapperboard className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm text-gray-900 tracking-tight">Veo 3.1 Video</h3>
                    <p className="text-[11px] text-gray-400 mt-0.5">Generate motion clips</p>
                  </div>
                </div>
                <div onClick={() => handleOpenCreate('image')} className="bg-white p-4 rounded-[24px] shadow-sm hover:scale-[0.98] transition cursor-pointer border border-gray-100 flex flex-col justify-between">
                  <div className="w-10 h-10 rounded-2xl bg-purple-50 flex items-center justify-center text-purple-600 mb-3">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm text-gray-900 tracking-tight">Imagen 3</h3>
                    <p className="text-[11px] text-gray-400 mt-0.5">High-res asset design</p>
                  </div>
                </div>
              </div>

              {/* Live Capture */}
              <div onClick={() => alert('Launching camera and live environment context...')} className="bg-white rounded-[28px] p-5 shadow-sm border border-gray-100 flex items-center justify-between cursor-pointer hover:bg-gray-50 transition">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <Camera className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-gray-900">Live Camera Context</h3>
                    <p className="text-xs text-gray-500 mt-0.5">Ground generation with real surroundings</p>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </div>

              {/* Recent Projects */}
              <div>
                <div className="flex justify-between items-center mb-3 px-1">
                  <h3 className="font-bold text-lg text-gray-900 tracking-tight">Recent Projects</h3>
                  <button onClick={() => setActiveTab('library')} className="text-[#007AFF] text-xs font-semibold">See All</button>
                </div>
                <div className="grid grid-cols-2 gap-3.5">
                  {projects.map((p) => (
                    <div key={p.id} className="group relative aspect-square rounded-[22px] overflow-hidden bg-gray-200 shadow-sm border border-gray-100">
                      <img src={p.url} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80"></div>
                      <span className="absolute top-3 left-3 bg-black/40 backdrop-blur-md text-white text-[10px] font-semibold px-2.5 py-1 rounded-full">{p.type}</span>
                      <span className="absolute bottom-3 left-3 right-3 text-white text-xs font-bold truncate">{p.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <div className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight px-1">Complete Library</h2>
              <div className="grid grid-cols-2 gap-3.5">
                {projects.map((p) => (
                  <div key={p.id} className="group relative aspect-square rounded-[22px] overflow-hidden bg-gray-200 shadow-sm border border-gray-100">
                    <img src={p.url} alt={p.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80"></div>
                    <span className="absolute top-3 left-3 bg-black/40 backdrop-blur-md text-white text-[10px] font-semibold px-2.5 py-1 rounded-full">{p.type}</span>
                    <span className="absolute bottom-3 left-3 right-3 text-white text-xs font-bold truncate">{p.title}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </main>

        {/* Bottom Tab Bar */}
        <nav className="absolute bottom-0 left-0 right-0 ios-glass border-t border-gray-200/60 px-6 py-2 pb-7 flex justify-around items-center z-40">
          <button onClick={() => setActiveTab('home')} className={`flex flex-col items-center transition ${activeTab === 'home' ? 'text-[#007AFF]' : 'text-gray-400'}`}>
            <Home className="w-6 h-6" strokeWidth={activeTab === 'home' ? 2.5 : 2} />
            <span className="text-[10px] font-semibold mt-1">Home</span>
          </button>
          
          <div className="relative -top-5">
            <button onClick={() => handleOpenCreate('video')} className="w-14 h-14 bg-[#007AFF] text-white rounded-full shadow-lg shadow-blue-500/40 flex items-center justify-center hover:scale-105 active:scale-95 transition">
              <Plus className="w-7 h-7" strokeWidth={3} />
            </button>
          </div>

          <button onClick={() => setActiveTab('library')} className={`flex flex-col items-center transition ${activeTab === 'library' ? 'text-[#007AFF]' : 'text-gray-400'}`}>
            <FolderKanban className="w-6 h-6" strokeWidth={activeTab === 'library' ? 2.5 : 2} />
            <span className="text-[10px] font-semibold mt-1">Library</span>
          </button>
        </nav>

        {/* Creation Modal Sheet */}
        {isCreateOpen && (
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-end">
            <div className="w-full bg-white rounded-t-[36px] p-6 pb-12 shadow-2xl max-h-[85vh] overflow-y-auto animate-in slide-in-from-bottom duration-300">
              <div className="w-12 h-1.5 bg-gray-300 rounded-full mx-auto mb-6"></div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold tracking-tight text-gray-900">
                  {generationType === 'video' ? 'Generate Veo Video' : 'Generate Imagen Asset'}
                </h3>
                <button onClick={() => setIsCreateOpen(false)} className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500">
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Prompt Description</label>
                  <textarea 
                    rows="3" 
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="Describe your cinematic scene, lighting, and action..." 
                    className="w-full p-4 rounded-2xl bg-gray-100 border-none text-sm focus:ring-2 focus:ring-[#007AFF] outline-none resize-none"
                  />
                </div>

                <button onClick={handleSubmitGeneration} className="w-full py-4 bg-[#007AFF] text-white rounded-2xl font-bold text-sm shadow-lg shadow-blue-500/30 hover:bg-blue-600 transition mt-2">
                  Start Generation
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Settings Modal Sheet */}
        {isSettingsOpen && (
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-end">
            <div className="w-full bg-white rounded-t-[36px] p-6 pb-12 shadow-2xl animate-in slide-in-from-bottom duration-300">
              <div className="w-12 h-1.5 bg-gray-300 rounded-full mx-auto mb-6"></div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold tracking-tight text-gray-900">Settings & Credits</h3>
                <button onClick={() => setIsSettingsOpen(false)} className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500">
                  <X className="w-4 h-4" />
                </button>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-2xl flex items-center justify-between">
                  <div>
                    <span className="block text-xs text-gray-400 font-semibold uppercase">Subscription Tier</span>
                    <span className="font-bold text-sm text-gray-900">Google AI Pro Active</span>
                  </div>
                  <span className="bg-blue-100 text-[#007AFF] text-xs font-bold px-3 py-1 rounded-full">500 Credits</span>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}