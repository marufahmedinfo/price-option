import PropTypes from 'prop-types';

const Links = ({paths}) => {
    return (
        <div>
            <li><a href={paths.path}>{paths.name}</a></li>
        </div>
    );
};

Links.propTypes = {
    paths: PropTypes.object    
}

export default Links;