import './App.css';
import CheckoutModal from "./components/CheckoutModal";

export default function App() {
    return (
        <div
            className="App"
            style={{
                background: '#F8F6F7',
                color: '#414042',
                display: 'block',
                marginBottom: 0,
                width: '100vw',
                minHeight: '1500px'
        }}
        >
            <CheckoutModal />
        </div>
    );
}
