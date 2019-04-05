// Import Simpla and OAuth adapter
import Simpla from 'simpla';
import SimplaNetlify from 'simpla/adapters/netlify';

// Init Simpla
Simpla.init({

    /**
     * Github Repo
     * Repository where content will be stored (in a '_content' folder)
     */
    repo: 'nicholasmakhija/simpla-sandbox',

    /**
     * Auth adapter
     * Used to authenticate users with Github from your site
     * Included separately to simpla.js core
     */
    auth: new SimplaNetlify({ site: 'simpla-sndbox' }),

    /**
     * Public content source (optional)
     * Public URL of your content, defaults to fetching directly from GitHub
     * Push your content to a CDN like Netlify in production
     */
    source: 'https://simpla-sndbox.netlify.com',

    /**
     * Commit branch (optional)
     * Git branch Simpla commits new content to, defaults to 'master'
     * Change this in development to make non-production changes
     */
    branch: 'master',

    /**
     * Public directory (optional)
     * Base directory to store Simpla '_content' folder
     * Defaults to the root of the repo
     */
    public: 'dist'

});

// Add Simpla to window global for components to access
window.Simpla = Simpla;