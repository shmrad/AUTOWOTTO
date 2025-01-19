import React, { useEffect } from 'react';

declare global {
  interface Window {
    VG_CONFIG?: {
      ID: string;
      region: string;
      render: string;
      stylesheets: string[];
    };
  }
}

const ChatbotWidget = () => {
  useEffect(() => {
    // Configure the chatbot
    window.VG_CONFIG = {
      ID: "1xwkpn4lmy37fcrj",
      region: 'na',
      render: 'bottom-right',
      stylesheets: [
        "https://vg-bunny-cdn.b-cdn.net/vg_live_build/styles.css"
      ]
    };

    // Create and load the script
    const script = document.createElement('script');
    script.src = "https://vg-bunny-cdn.b-cdn.net/vg_live_build/vg_bundle.js";
    script.async = true;
    document.body.appendChild(script);

    // Cleanup function
    return () => {
      document.body.removeChild(script);
      delete window.VG_CONFIG;
    };
  }, []);

  return <div id="VG_OVERLAY_CONTAINER" style={{ width: 0, height: 0 }} />;
};

export default ChatbotWidget;