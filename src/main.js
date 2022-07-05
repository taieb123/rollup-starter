import App from './Component/App.svelte';
import './Scss/style.scss';

const app = new App({
    target: document.body,
    props: {
        name: 'Taieb rekik go head',
    },
});

export default app;