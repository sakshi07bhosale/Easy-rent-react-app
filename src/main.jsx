import { createRoot } from 'react-dom/client';
import './index.css';
import toast, { Toaster } from 'react-hot-toast';

 const root = createRoot(document.getElementById('root'))

root.render(
    <>
    <h1>Hot Toast</h1>
    <button onClick={() => {
        toast.loading('This is a loading toast!');
    }}>
        Start loading
    </button>
    <button onClick={() => {
        toast.dismiss();
    }}>
         Stop Loading
    </button>
    <Toaster />
    </>
)
