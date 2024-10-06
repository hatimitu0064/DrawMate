import PropTypes from 'prop-types';
import './CreateLayout.scss'

const CreateLayout = ({ children }) => {
  return (
    <div className="layout">
      <main>{children}</main>
    </div>
  )
};

CreateLayout.propTypes = {
  children: PropTypes.node.isRequired, // childrenを必要なプロパティとして定義
};

export default CreateLayout;
