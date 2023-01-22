import PropTypes from 'prop-types';

function Menu({ children }) {
    return <nav>{children}</nav>;
}
Menu.propTypes = {
    children: PropTypes.node,
};

export default Menu;
