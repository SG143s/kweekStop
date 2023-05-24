import './SimpleCategory.css';

const SimpleCategory = (props) => {
    return (
        <div className='simple-categories'>
            <div className='simple-cat-clothing'>
                <p>Clothing</p>
            </div>
            <div className='simple-cat-hp'>
                <p>Handphone Accessories</p>
            </div>
            <div className='simple-cat-bathroom'>
                <p>Bathroom</p>
            </div>
            <div className='simple-cat-garden'>
                <p>Garden</p>
            </div>
            <div className='simple-cat-diy'>
                <p>DIY & Crafts</p>
            </div>
        </div>
    )
};

export default SimpleCategory;