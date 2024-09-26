import PropTypes from 'prop-types';
import './Layout.scss'

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <main>{children}</main>
    </div>
  )
};

Layout.propTypes = {
  children: PropTypes.node.isRequired, // childrenを必要なプロパティとして定義
};

export default Layout;
