import PropTypes from 'prop-types';
import Feture from '../Feture/Feture';

const PriceOption = ({ option }) => {
    const { name, price, features } = option;
    return (
        <div className=' bg-purple-500 text-white rounded-lg p-4 flex flex-col'>
            <h1 className='text-center'>
                <span className='text-7xl font-extrabold'>{price}</span>
                <span className='text-2xl'>/mon</span>
            </h1>
            <h4 className='text-3xl my-8 text-center'>{name}</h4>
            <div className='pl-6 flex-grow'>
                {
                    features.map((featur, idx) => <Feture key={idx} featur={featur}></Feture>)
                }
                <button className='w-full bg-gradient-to-r from-orange-400 to-purple-200 hover:from-purple-200 hover:to-orange-400 text-lg rounded-xl mt-16 p-3'>Buy Now</button>
            </div>
        </div>


    );
};

PriceOption.propTypes = {
    option: PropTypes.object
}

export default PriceOption;