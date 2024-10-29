import PropTypes from 'prop-types';
import { BsFillCheckCircleFill } from "react-icons/bs";
const Feture = ({featur}) => {
    return (
        <div>
            <p className='flex items-center gap-2'><BsFillCheckCircleFill className='text-green-200'/>{featur}</p>
        </div>
    );
};

Feture.propTypes = {
    featur: PropTypes.array
}
export default Feture;