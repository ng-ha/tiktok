import ModalCanvas from '~/components/Modal3D';
function Live() {
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

export default Live;
