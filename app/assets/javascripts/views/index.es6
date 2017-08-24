import posts   from './posts'
import layouts from './layouts'
import pages   from './pages'
import users   from './users'

export default {
    ...posts,
    ...layouts,
    ...pages,
    ...users
}
