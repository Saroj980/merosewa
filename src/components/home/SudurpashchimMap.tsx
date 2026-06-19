"use client";

import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { MapPin, ShieldCheck } from 'lucide-react';

const markerSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="var(--primary-blue)" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-10 h-10 drop-shadow-lg">
  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
  <circle cx="12" cy="10" r="3" fill="white"></circle>
</svg>
`;

// Upgraded marker with pulsing animation and hover effect
const customMarkerIcon = new L.DivIcon({
  html: `
    <div class="relative flex items-center justify-center w-10 h-10 -ml-5 -mt-10 group cursor-pointer transition-all duration-300">
      <div class="absolute w-8 h-8 bg-blue-400 rounded-full animate-ping opacity-40"></div>
      <div class="absolute w-12 h-12 bg-blue-100 rounded-full opacity-20 group-hover:opacity-40 transition-opacity"></div>
      <div class="relative z-10 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-2">
        ${markerSvg}
      </div>
    </div>
  `,
  className: 'custom-map-marker',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40],
});

const locations = [
  { name: "Dhangadhi", desc: "Provincial Headquarter", lat: 28.7063, lng: 80.5694, active: true },
  { name: "Tikapur", desc: "Major Hub", lat: 28.5144, lng: 81.1275, active: true },
  { name: "Attariya", desc: "Transport Junction", lat: 28.8184, lng: 80.5630, active: true },
  { name: "Mahendranagar", desc: "Border City", lat: 28.9667, lng: 80.1833, active: true },
  { name: "Godawari", desc: "Emerging Center", lat: 28.8833, lng: 80.5833, active: true }
];

// Component to handle map animations
function MapController() {
  const map = useMap();
  useEffect(() => {
    if (!map) return;
    
    const timer = setTimeout(() => {
      try {
        map.invalidateSize();
        map.flyTo([28.8, 80.6], 9, {
          duration: 2.5,
          easeLinearity: 0.25
        });
      } catch(e) {
        console.error(e);
      }
    }, 800);
    
    return () => clearTimeout(timer);
  }, [map]);
  return null;
}

export default function SudurpashchimMap() {
  return (
    <div className="relative w-full h-full min-h-[450px] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white group">
      
      {/* Floating UI Elements for Premium Feel */}
      <div className="absolute top-4 left-4 z-[400] bg-white/95 backdrop-blur-md px-3 py-2 rounded-xl shadow-md border border-slate-100 flex items-center gap-2.5 transition-transform duration-500 hover:scale-105 cursor-default group">
        <div className="relative flex items-center justify-center w-5 h-5">
          <div className="absolute w-full h-full bg-green-400 rounded-full animate-ping opacity-30"></div>
          <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)] z-10"></div>
        </div>
        <div className="flex flex-col">
          <span className="font-bold text-slate-800 text-[11px] uppercase tracking-wider leading-none mb-0.5">Live Coverage</span>
          <span className="text-[10px] text-[var(--primary-blue)] font-medium leading-none">Sudurpashchim</span>
        </div>
      </div>

      {/* Map Container */}
      <MapContainer 
        center={[28.4, 80.6]} 
        zoom={8} 
        scrollWheelZoom={false}
        zoomControl={false} // Hide default to keep it clean
        attributionControl={false} // Remove Leaflet watermark
        className="w-full h-full min-h-[450px] z-0"
      >
        <MapController />
        
        {/* Reliable OSM tile layer to fix blank map issue */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {locations.map((loc) => (
          <Marker 
            key={loc.name} 
            position={[loc.lat, loc.lng]} 
            icon={customMarkerIcon}
          >
            <Popup className="custom-popup">
              <div className="p-1 min-w-[140px]">
                <div className="flex items-center gap-1.5 mb-1">
                  <ShieldCheck className="w-4 h-4 text-green-500" />
                  <h3 className="font-bold text-sm text-slate-800 m-0 leading-none">{loc.name}</h3>
                </div>
                <p className="text-[11px] text-slate-500 mt-1 mb-2 leading-tight">{loc.desc}</p>
                
                <div className="flex items-center justify-between border-t border-slate-100 pt-2 mt-1">
                  <span className="text-[10px] font-semibold text-[var(--primary-blue)] flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block animate-pulse"></span>
                    Service Available
                  </span>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      {/* CSS overrides for Leaflet Popup to make it look modern */}
      <style dangerouslySetInnerHTML={{__html: `
        .leaflet-popup-content-wrapper {
          border-radius: 16px;
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
          border: 1px solid rgba(226, 232, 240, 0.8);
          padding: 2px;
        }
        .leaflet-popup-content {
          margin: 10px 12px;
        }
        .leaflet-popup-tip {
          background: white;
          border-top: 1px solid rgba(226, 232, 240, 0.8);
          border-left: 1px solid rgba(226, 232, 240, 0.8);
        }
        .leaflet-container a.leaflet-popup-close-button {
          color: #94a3b8;
          padding: 6px 6px 0 0;
          font-size: 18px;
        }
        .leaflet-container a.leaflet-popup-close-button:hover {
          color: #334155;
        }
      `}} />
    </div>
  );
}
