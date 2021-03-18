import { loadRemoteEntry } from '@angular-architects/module-federation';

Promise.all([
    loadRemoteEntry('http://localhost:7000/remoteEntry.js', 'vii'),
    loadRemoteEntry('http://localhost:8000/remoteEntry.js', 'viii')
])
.catch(err => console.error('Error loading remote entries', err))
.then(() => import('./bootstrap'))
.catch(err => console.error(err));
