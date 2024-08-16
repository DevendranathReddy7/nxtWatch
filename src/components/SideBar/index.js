// import {v4 as uuidv4} from 'uuid'

import {IoMdHome} from 'react-icons/io'
import {FaFire} from 'react-icons/fa'
import {SiYoutubegaming} from 'react-icons/si'
import {RiMenuAddFill} from 'react-icons/ri'

import {SideBarContainer, Li, Span} from './SideBarStyles'

const SideBarItems = [
  {id: 'uuidv4()1', ItemName: 'Home', ItemIcon: 'Home'},
  {id: 'uuidv4()2', ItemName: 'Trending', ItemIcon: 'Trending'},
  {id: 'uuidv4()3', ItemName: 'Gaming', ItemIcon: 'Gaming'},
  {id: 'uuidv4()', ItemName: 'Saved videos', ItemIcon: 'SavedVideos'},
]

const SideBar = () => {
  const getIcon = value => {
    switch (value) {
      case 'Home':
        return <IoMdHome />
      case 'Trending':
        return <FaFire />
      case 'Gaming':
        return <SiYoutubegaming />
      case 'SavedVideos':
        return <RiMenuAddFill />
      default:
        return null
    }
  }

  return (
    <SideBarContainer>
      {SideBarItems.map(item => (
        <Li key={item.id}>
          <Span>
            {getIcon(item.ItemIcon)} <p>{item.ItemName}</p>
          </Span>
        </Li>
      ))}
    </SideBarContainer>
  )
}

export default SideBar
