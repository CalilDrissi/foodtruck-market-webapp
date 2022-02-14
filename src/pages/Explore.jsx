import { Link } from 'react-router-dom'
// import Slider from '../components/Slider'
import rentCategoryImage from '../assets/categories/rent.jpg'
import sellCategoryImage from '../assets/categories/buy.jpg'

function Explore() {
  return (
    <div className='explore'>
      <header>
        <p className='pageHeader'>Explore</p>
      </header>

      <main>
        {/* <Slider /> */}

        <p className='exploreCategoryHeading'>Categories</p>
        <div className='exploreCategories'>
          <Link to='/category/rent'>
            <img
              src={rentCategoryImage}
              alt='rent'
              className='exploreCategoryImg'
            />
            <p className='exploreCategoryName'>FoodTrucks for rent</p>
          </Link>
          <Link to='/category/sale'>
            <img
              src={sellCategoryImage}
              alt='sell'
              className='exploreCategoryImg'
            />
            <p className='exploreCategoryName'>FoodTrucks for sale</p>
          </Link>
        </div>
      </main>
    </div>
  )
}

export default Explore
