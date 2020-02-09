import createAppContainer from 'react-navigation'
import Search from '../Components/Search'
import createStackNavigator from 'react-navigation'

// import FilmDetail from '../components/FilmDetail'

const SearchStackNavigator = createStackNavigator({
    Search: {
      screen: Search,
      navigationOptions: {
        title: 'Rechercher'
      }
    }
  })

  export default createAppContainer(SearchStackNavigator)
