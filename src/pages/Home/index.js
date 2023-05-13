import ModalCanvas from '~/components/Modal3D';

function Home() {
    return (
        <div
            style={{ height: '100vh', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
            <div style={{ width: '700px', height: '600px' }}>
                <ModalCanvas />
            </div>
        </div>
    );
}

export default Home;
