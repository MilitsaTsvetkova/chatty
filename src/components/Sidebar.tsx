import { Add, ExitToApp, SearchOutlined } from '@mui/icons-material'
import { Avatar, IconButton } from '@mui/material'

const Sidebar = ({
  user,
}: {
  user: { displayName: string | null; photoURL: string | null }
}) => {
  return (
    <div className='sidebar'>
      <div className='sidebar__header'>
        <div className='sidebar__header--left'>
          <Avatar src={user.photoURL ?? ''} alt={user.displayName ?? ''} />
        </div>
        <div className='sidebar__header--right'>
          <IconButton>
            <ExitToApp />
          </IconButton>
        </div>
      </div>

      <div className='sidebar__search'>
        <form className='sidebar__search--container'>
          <SearchOutlined />
          <input
            type='text'
            id='search'
            placeholder='Search for users or rooms'
          />
        </form>
      </div>

      <div className='sidebar__chat--addRoom'>
        <IconButton>
          <Add />
        </IconButton>
      </div>
    </div>
  )
}

export default Sidebar
