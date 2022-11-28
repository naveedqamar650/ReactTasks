import HomeHeader from '../Home/HomeHeader'
import Skill from './Skill'
import './Skills.css'
export const HomeSkill = ({ item }) => {
    return (
        <div className='hmaindiv'>
            <div className='hheaderdiv'>
                <HomeHeader />
            </div>
            <div className='hinnerdiv'>
                <Skill item={item} />
            </div>
        </div>
    )
}
export default HomeSkill